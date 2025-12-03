import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'statement',
  title: 'Statement',
  type: 'document',
  __experimental_actions: [
    // Only allow update and publish - disable create and delete to make it a singleton
    'update',
    'publish',
  ],
  fields: [
    defineField({
      name: 'content',
      title: 'Content',
      type: 'blockContent',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Statement',
      }
    },
  },
})

