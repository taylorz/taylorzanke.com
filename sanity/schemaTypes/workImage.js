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
      name: 'selected',
      title: 'Selected',
      type: 'boolean',
      description: 'Mark this image as selected for featured display',
      initialValue: false,
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
      weak: true, // This prevents reference integrity errors
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'caption',
      media: 'image',
      workTitle: 'work.title',
    },
    prepare(selection) {
      const {title, media, workTitle} = selection
      return {
        title: title,
        subtitle: workTitle ? `From: ${workTitle}` : '',
        media: media,
      }
    },
  },
})
