import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contact',
  title: 'Contact',
  type: 'document',
  __experimental_actions: [
    // Only allow update and publish - disable create and delete to make it a singleton
    'update',
    'publish',
  ],
  fields: [
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'online',
      title: 'Online',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'documents',
      title: 'Documents',
      type: 'array',
      of: [{type: 'file'}],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Contact',
      }
    },
  },
})
