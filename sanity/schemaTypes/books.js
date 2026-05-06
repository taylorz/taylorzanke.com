import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'book',
  title: 'Books',
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
      name: 'note',
      title: 'Note',
      type: 'blockContent',
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'object',
      fields: [
        {
          name: 'label',
          title: 'Label',
          type: 'string',
        },
        {
          name: 'url',
          title: 'URL',
          type: 'url',
        },
      ],
    }),
    defineField({
      name: 'files',
      title: 'Files',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'Label',
              type: 'string',
            },
            {
              name: 'file',
              title: 'File',
              type: 'file',
            },
          ],
        },
      ],
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
      images: 'images',
    },
    prepare({title, year, images}) {
      const hasImages = Array.isArray(images) && images.length > 0
      return {
        title,
        subtitle: `${year || ''}${hasImages ? '' : ' (no images)'}`.trim(),
      }
    },
  },
})
