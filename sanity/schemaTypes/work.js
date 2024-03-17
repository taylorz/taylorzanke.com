import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'work',
  title: 'Work',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),

    defineField({
      name: 'year',
      title: 'Year',
      type: 'number',
    }),
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Sculpture', value: 'sculpture'},
          {title: 'Books', value: 'books'},
          {title: 'Drawings', value: 'drawings'},
        ],
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
})
