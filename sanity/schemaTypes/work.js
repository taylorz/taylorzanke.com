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
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: (doc) => {
          const title = doc.title || ''
          const materials = doc.materials || ''
          return `${title} ${materials}`.trim()
        },
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'height',
      title: 'Height',
      type: 'string',
      description: 'Height of the artwork',
    }),
    defineField({
      name: 'width',
      title: 'Width',
      type: 'string',
      description: 'Width of the artwork',
    }),
    defineField({
      name: 'depth',
      title: 'Depth',
      type: 'string',
      description: 'Depth of the artwork (optional)',
    }),
    defineField({
      name: 'customDimensions',
      title: 'Custom Dimensions',
      type: 'string',
      description:
        'Use this field for non-standard dimension descriptions (e.g., "Variable dimensions", "Site-specific installation")',
    }),
    defineField({
      name: 'materials',
      title: 'Materials',
      type: 'string',
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
    }),
    defineField({
      name: 'externalLinkUrl',
      title: 'External Link URL',
      type: 'url',
    }),
    defineField({
      name: 'externalLinkLabel',
      title: 'External Link Label',
      type: 'string',
      description: 'The text to display for the external link',
    }),
    defineField({
      name: 'details',
      title: 'Details',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent',
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
              name: 'caption',
              title: 'Caption',
              type: 'string',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'category'}],
    }),
    defineField({
      name: 'selected',
      title: 'Selected',
      type: 'boolean',
      description: 'Mark this work as selected for featured display',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'images.0.image',
    },
  },
})
