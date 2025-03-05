import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'portfolioImage',
  title: 'Portfolio Image',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
    }),
    defineField({
      name: 'materials',
      title: 'Materials',
      type: 'string',
      description: 'e.g., "Oil on canvas"',
    }),
    defineField({
      name: 'dimensions',
      title: 'Dimensions',
      type: 'string',
      description: 'e.g., "24 x 36 inches"',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Generated from title, year, and dimensions',
      options: {
        source: (doc) => {
          const parts = [doc.title || 'untitled', doc.year, doc.dimensions].filter(Boolean)
          return parts.join('-')
        },
        maxLength: 200,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'year',
      media: 'image',
    },
    prepare(selection) {
      const {title, subtitle, media} = selection
      return {
        title: title || 'Untitled',
        subtitle: subtitle || '',
        media: media,
      }
    },
  },
})
