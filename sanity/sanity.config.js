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
      {
        id: 'works-exhibition',
        title: 'Work — Exhibition',
        schemaType: 'works',
        value: {tags: ['exhibitions']},
      },
      {
        id: 'works-book',
        title: 'Work — Book',
        schemaType: 'works',
        value: {tags: ['books']},
      },
    ],
  },
})
