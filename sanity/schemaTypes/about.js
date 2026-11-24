import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  __experimental_actions: [
    // Only allow update and publish - disable create and delete to make it a singleton
    'update',
    'publish',
  ],
  fields: [
    defineField({
      name: 'biography',
      title: 'Biography',
      type: 'blockContent',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'About',
      }
    },
  },
})
