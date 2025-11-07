import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'resume',
  title: 'Resume',
  type: 'document',
  __experimental_actions: [
    // Only allow update and publish - disable create and delete to make it a singleton
    'update',
    'publish',
  ],
  fields: [
    defineField({
      name: 'groups',
      title: 'Groups',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'group',
          title: 'Group',
          fields: [
            {
              name: 'groupTitle',
              title: 'Group Title',
              type: 'string',
              description: 'The title/name of this group (e.g., "Education", "Experience")',
            },
            {
              name: 'items',
              title: 'Items',
              type: 'array',
              of: [
                {
                  type: 'object',
                  name: 'item',
                  title: 'Item',
                  fields: [
                    {
                      name: 'year',
                      title: 'Year',
                      type: 'string',
                    },
                    {
                      name: 'title',
                      title: 'Title',
                      type: 'string',
                    },
                    {
                      name: 'label',
                      title: 'Label',
                      type: 'string',
                    },
                  ],
                  preview: {
                    select: {
                      title: 'title',
                      subtitle: 'year',
                    },
                  },
                },
              ],
            },
          ],
          preview: {
            select: {
              title: 'groupTitle',
              subtitle: 'items',
            },
            prepare({title, subtitle}) {
              const itemCount = Array.isArray(subtitle) ? subtitle.length : 0
              return {
                title: title || 'Untitled Group',
                subtitle: `${itemCount} item${itemCount !== 1 ? 's' : ''}`,
              }
            },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Resume',
      }
    },
  },
})
