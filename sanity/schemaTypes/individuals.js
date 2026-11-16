import {defineArrayMember, defineField, defineType} from 'sanity'
import SortedByYearArrayInput from '../components/SortedByYearArrayInput'

// Singleton holding standalone pieces (not part of a show), shown as
// "individuals" on /work. Each group is one piece: its images plus a few
// attributes. Groups can't be reordered; both the Studio list and the site
// show them by year, newest first.
export default defineType({
  name: 'individuals',
  title: 'Individuals',
  type: 'document',
  fields: [
    defineField({
      name: 'groups',
      title: 'Groups',
      type: 'array',
      options: {sortable: false},
      components: {input: SortedByYearArrayInput},
      of: [
        defineArrayMember({
          type: 'object',
          name: 'group',
          fields: [
            defineField({
              name: 'images',
              title: 'Images',
              type: 'array',
              of: [{type: 'image', options: {hotspot: true}}],
            }),
            defineField({name: 'year', title: 'Year', type: 'string'}),
            defineField({name: 'materials', title: 'Materials', type: 'string'}),
            defineField({name: 'width', title: 'Width', type: 'string'}),
            defineField({name: 'depth', title: 'Depth', type: 'string'}),
            defineField({name: 'height', title: 'Height', type: 'string'}),
          ],
          preview: {
            // Select `images` once and derive the thumbnail from it: also
            // selecting `images.0` makes the preview resolver hand back the
            // array as a plain object with no items (count 0, no media).
            select: {
              year: 'year',
              materials: 'materials',
              images: 'images',
            },
            prepare({year, materials, images}) {
              const list = Array.isArray(images) ? images : []
              const count = list.length
              return {
                title: [year || 'No year', `${count} image${count === 1 ? '' : 's'}`].join(' · '),
                subtitle: materials,
                media: list[0],
              }
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {groups: 'groups'},
    prepare({groups}) {
      const count = Array.isArray(groups) ? groups.length : 0
      return {title: 'Individuals', subtitle: `${count} group${count === 1 ? '' : 's'}`}
    },
  },
})
