import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import structure from './structure'

export default defineConfig({
  name: 'default',
  title: 'taylorzanke.com',

  projectId: 'hhvbqtrb',
  dataset: 'production',

  plugins: [structureTool({structure}), visionTool()],

  schema: {
    types: schemaTypes,
    templates: (prev) => [
      ...prev,
      // New work pre-tagged with the tag whose list it was created from.
      {
        id: 'works-by-tag',
        title: 'Work with tag',
        schemaType: 'works',
        parameters: [{name: 'tagId', type: 'string'}],
        value: ({tagId}) => ({
          tags: [{_type: 'reference', _ref: tagId, _key: tagId}],
        }),
      },
      // New work pre-filled with the year whose list it was created from.
      {
        id: 'works-by-year',
        title: 'Work from year',
        schemaType: 'works',
        parameters: [{name: 'year', type: 'string'}],
        value: ({year}) => ({year}),
      },
    ],
  },
})
