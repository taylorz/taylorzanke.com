import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'workImage',
  title: 'Work Image',
  type: 'document',
  fields: [
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
    }),
    defineField({
      name: 'imageDate',
      title: 'Image Date',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'caption',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'work',
      title: 'Work',
      type: 'reference',
      to: [{type: 'work'}],
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
  ],
  preview: {
    select: {
      title: 'caption',
      media: 'image',
    },
  },
})
