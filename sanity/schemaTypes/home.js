import {defineArrayMember, defineField, defineType} from 'sanity'
import SlideImagePicker from '../components/SlideImagePicker'
import {workSubtitle} from '../lib/workLabels'

// The reference search runs under the Studio's drafts perspective, which
// rewrites `_id` to the published id and moves the real one to `_originalId`.
// That makes `!(_id in path("drafts.**"))` a no-op inside the search filter,
// and filtering on `_originalId` would also hide published works that simply
// have unpublished edits. So resolve the eligible published ids up front and
// match against those instead.
const PUBLISHED_WORK_IDS = `*[
  _type == "works" &&
  ("exhibitions" in tags || "books" in tags) &&
  count(images) > 0 &&
  !(_id in path("drafts.**"))
]._id`

const publishedWorksFilter = async ({getClient}) => {
  const client = getClient({apiVersion: '2024-04-07'}).withConfig({perspective: 'raw'})
  const publishedWorkIds = await client.fetch(PUBLISHED_WORK_IDS)

  return {filter: '_id in $publishedWorkIds', params: {publishedWorkIds}}
}

export default defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    defineField({
      name: 'slides',
      title: 'Slideshow',
      description:
        'Full-screen slideshow shown on the first visit to the homepage. Pick a work, then pick one of its images. Drag to reorder.',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'slide',
          fields: [
            defineField({
              name: 'work',
              title: 'Work',
              type: 'reference',
              to: [{type: 'works'}],
              options: {filter: publishedWorksFilter},
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'imageKey',
              title: 'Image',
              type: 'string',
              components: {input: SlideImagePicker},
              validation: (Rule) => Rule.required().error('Pick an image for this slide.'),
            }),
          ],
          preview: {
            // Preview paths follow the reference, so `work.images` resolves to
            // the referenced document's array — the selected image is picked
            // out of it below.
            select: {
              title: 'work.title',
              year: 'work.year',
              tags: 'work.tags',
              images: 'work.images',
              imageKey: 'imageKey',
            },
            prepare({title, year, tags, images, imageKey}) {
              const selected = Array.isArray(images)
                ? images.find((image) => image._key === imageKey)
                : undefined

              return {
                title: title || 'Untitled',
                subtitle: workSubtitle(tags, year),
                media: selected?.image,
              }
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {slides: 'slides'},
    prepare({slides}) {
      const count = Array.isArray(slides) ? slides.length : 0
      return {
        title: 'Home',
        subtitle: `${count} slide${count === 1 ? '' : 's'}`,
      }
    },
  },
})
