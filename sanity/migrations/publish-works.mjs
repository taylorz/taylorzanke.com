import { createClient } from '@sanity/client'

const token = process.env.SANITY_TOKEN

if (!token) {
  console.error('Error: SANITY_TOKEN environment variable is required')
  console.error('Run: SANITY_TOKEN=<your-token> node migrations/publish-works.mjs')
  process.exit(1)
}

const client = createClient({
  projectId: 'hhvbqtrb',
  dataset: 'production',
  apiVersion: '2024-04-07',
  token,
  useCdn: false,
})

async function run() {
  const all = await client.fetch(`*[_type == "works"]{ _id }`)
  const draftIds = all.map((d) => d._id).filter((id) => id.startsWith('drafts.'))
  const publishedIds = all.map((d) => d._id).filter((id) => !id.startsWith('drafts.'))

  console.log(`works total: ${all.length} (published: ${publishedIds.length}, drafts: ${draftIds.length})`)

  if (draftIds.length === 0) {
    console.log('No draft works to publish.')
    process.exit(0)
  }

  const drafts = await client.fetch(`*[_type == "works" && _id in path("drafts.**")]`)

  const tx = client.transaction()
  for (const draft of drafts) {
    const { _id, _rev, _createdAt, _updatedAt, ...rest } = draft
    const publishedId = _id.replace(/^drafts\./, '')
    tx.createOrReplace({ ...rest, _id: publishedId })
    tx.delete(_id)
  }
  await tx.commit()

  console.log(`Published ${drafts.length} works documents.`)
  console.log('Done.')
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
