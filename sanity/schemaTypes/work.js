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
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
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
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{type: 'reference', to: {type: 'workImage'}}],
    }),
  ],
})
