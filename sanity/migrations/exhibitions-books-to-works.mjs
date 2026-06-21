import { createClient } from '@sanity/client'
import { randomUUID } from 'crypto'

const token = process.env.SANITY_TOKEN

if (!token) {
  console.error('Error: SANITY_TOKEN environment variable is required')
  console.error('Run: SANITY_TOKEN=<your-token> node migrations/exhibitions-books-to-works.mjs')
  process.exit(1)
}

const client = createClient({
  projectId: 'hhvbqtrb',
  dataset: 'production',
  apiVersion: '2024-04-07',
  token,
  useCdn: false,
})

const key = () => Math.random().toString(36).slice(2)

// Map old `files` [{label, file}] -> new `documents` (array of file objects)
const toDocuments = (files) =>
  (files || [])
    .filter((f) => f?.file?.asset)
    .map((f) => ({ ...f.file, _key: key() }))

// Map old `link` {label, url} -> new `online` (array of url strings)
const toOnline = (link) => (link?.url ? [link.url] : [])

// Re-key arrays of objects so Sanity accepts them
const rekey = (arr) => (arr || []).map((item) => ({ ...item, _key: item._key || key() }))

function buildWork(doc, tag) {
  const location =
    tag === 'exhibitions'
      ? [doc.venue, doc.location].filter(Boolean).join(', ') || undefined
      : doc.location

  return {
    _id: randomUUID(),
    _type: 'works',
    tags: [tag],
    year: doc.year,
    title: doc.title,
    slug: doc.slug,
    location,
    datesOpen: doc.datesOpen,
    note: doc.note,
    documents: toDocuments(doc.files),
    online: toOnline(doc.link),
    images: rekey(doc.images),
  }
}

async function run() {
  const exhibitions = await client.fetch(`*[_type == "exhibition"]`)
  const books = await client.fetch(`*[_type == "book"]`)

  console.log(`Found ${exhibitions.length} exhibitions and ${books.length} books`)

  if (exhibitions.length === 0 && books.length === 0) {
    console.log('Nothing to migrate.')
    process.exit(0)
  }

  const newDocs = [
    ...exhibitions.map((d) => buildWork(d, 'exhibitions')),
    ...books.map((d) => buildWork(d, 'books')),
  ]

  // Create all new works docs
  const createTx = client.transaction()
  for (const doc of newDocs) {
    createTx.create(doc)
  }
  await createTx.commit()
  console.log(`Created ${newDocs.length} works documents`)

  // Delete the original exhibition and book docs
  const oldIds = [...exhibitions, ...books].map((d) => d._id)
  const deleteTx = client.transaction()
  for (const id of oldIds) {
    deleteTx.delete(id)
  }
  await deleteTx.commit()
  console.log(`Deleted ${oldIds.length} old exhibition/book documents`)

  console.log('Migration complete.')
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
