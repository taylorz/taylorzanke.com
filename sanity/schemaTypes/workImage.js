import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'workImage',
  title: 'Work Image',
  type: 'document',
  fields: [
    defineField({
      name: 'selected',
      title: 'Selected',
      type: 'boolean',
      description: 'Mark this image as selected for featured display',
      initialValue: false,
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
      media: 'image',
    },
    prepare(selection) {
      const {media} = selection
      return {
        title: 'Work Image',
        media: media,
      }
    },
  },
})
