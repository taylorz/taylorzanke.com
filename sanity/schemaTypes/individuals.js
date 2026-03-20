import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'individuals',
  title: 'Individuals',
  type: 'document',
  fields: [
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {hotspot: true},
            },
            {
              name: 'captionTitle',
              title: 'Caption Title',
              type: 'string',
            },
            {
              name: 'captionLabel',
              title: 'Caption Label',
              type: 'string',
            },
            {
              name: 'year',
              title: 'Year',
              type: 'string',
            },
          ],
        },
      ],
    }),
  ],
})
