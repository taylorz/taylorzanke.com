import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'works',
  title: 'Works',
  type: 'document',
  fields: [
    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: (doc) => `${doc.title || ''} ${doc.year || ''}`.trim(),
        maxLength: 96,
      },
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Exhibitions', value: 'exhibitions'},
          {title: 'Books', value: 'books'},
        ],
        layout: 'grid',
      },
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'datesOpen',
      title: 'Dates Open',
      type: 'string',
    }),
    defineField({
      name: 'note',
      title: 'Note',
      type: 'blockContent',
    }),
    defineField({
      name: 'attributes',
      title: 'Attributes',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'label', title: 'Label', type: 'string'},
            {name: 'value', title: 'Value', type: 'string'},
          ],
          preview: {
            select: {title: 'label', subtitle: 'value'},
          },
        },
      ],
    }),
    defineField({
      name: 'documents',
      title: 'Documents',
      type: 'array',
      of: [{type: 'file'}],
    }),
    defineField({
      name: 'online',
      title: 'Online',
      type: 'array',
      of: [{type: 'string'}],
    }),
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
              options: {
                hotspot: true,
              },
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
          ],
        },
      ],
    }),
  ],
  orderings: [
    {
      title: 'Year, New',
      name: 'yearDesc',
      by: [{field: 'year', direction: 'desc'}],
    },
    {
      title: 'Year, Old',
      name: 'yearAsc',
      by: [{field: 'year', direction: 'asc'}],
    },
  ],
  preview: {
    select: {
      title: 'title',
      year: 'year',
      tags: 'tags',
    },
    prepare({title, year, tags}) {
      const tagList = Array.isArray(tags) && tags.length ? ` — ${tags.join(', ')}` : ''
      return {
        title,
        subtitle: `${year || ''}${tagList}`.trim(),
      }
    },
  },
})
