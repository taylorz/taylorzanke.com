import {defineArrayMember, defineField, defineType} from 'sanity'
import SlidePicker from '../components/SlidePicker'

// Homepage carousel: 1–5 slides, each one specific image picked from a work
// or an individuals group. The site numbers them 1–5 in this order.
export default defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    defineField({
      name: 'slides',
      title: 'Slides',
      description:
        'Full-screen images on the homepage, numbered 1–5 in this order. Pick a work or an individual, then one of its images. Drag to reorder.',
      type: 'array',
      validation: (Rule) => Rule.required().min(1).max(5),
      of: [
        defineArrayMember({
          type: 'object',
          name: 'slide',
          // One picker for the whole slide: it sets the source (work or
          // individuals group), the image key, and a copy of the image.
          components: {input: SlidePicker},
          fields: [
            // Source: exactly one of these two.
            defineField({
              name: 'work',
              title: 'Work',
              type: 'reference',
              to: [{type: 'works'}],
            }),
            defineField({
              name: 'groupKey',
              title: 'Individuals group',
              type: 'string',
              description: '_key of a group in the Individuals document.',
            }),
            // `_key` of the chosen image within the source's images.
            defineField({name: 'imageKey', title: 'Image', type: 'string'}),
            // Copy of the chosen image, for the Studio list preview (an
            // individuals group can't be referenced, so a preview can't
            // look it up). The site resolves the live image from the source
            // and only falls back to this copy.
            defineField({name: 'image', title: 'Image copy', type: 'image', readOnly: true}),
            // Where the full-screen crop sits on phones (below md): the
            // image's left edge, center, or right edge. Optional; unset
            // means center.
            defineField({
              name: 'mobileAlignment',
              title: 'Mobile alignment',
              type: 'string',
              options: {
                list: [
                  {title: 'Left', value: 'left'},
                  {title: 'Center', value: 'center'},
                  {title: 'Right', value: 'right'},
                ],
                layout: 'radio',
                direction: 'horizontal',
              },
            }),
          ],
          validation: (Rule) =>
            Rule.custom((slide) =>
              slide?.imageKey && (slide.work?._ref || slide.groupKey)
                ? true
                : 'Pick an image for this slide.',
            ),
          preview: {
            select: {title: 'work.title', year: 'work.year', groupKey: 'groupKey', media: 'image'},
            prepare({title, year, groupKey, media}) {
              return {
                title: title || (groupKey ? 'Individual' : 'No image picked'),
                subtitle: title ? year : undefined,
                media,
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
      return {title: 'Home', subtitle: `${count} slide${count === 1 ? '' : 's'}`}
    },
  },
})
