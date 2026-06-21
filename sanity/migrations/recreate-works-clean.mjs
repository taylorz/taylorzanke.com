import { createClient } from '@sanity/client'
import { randomUUID } from 'crypto'

const token = process.env.SANITY_TOKEN

if (!token) {
  console.error('Error: SANITY_TOKEN environment variable is required')
  console.error('Run: SANITY_TOKEN=<your-token> node migrations/recreate-works-clean.mjs')
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
  // Fetch every works doc (token sees both published and any drafts)
  const all = await client.fetch(`*[_type == "works"]`)
  console.log(`Found ${all.length} works docs (ids: ${all.map((d) => d._id).join(', ')})`)

  if (all.length === 0) {
    console.log('Nothing to recreate.')
    process.exit(0)
  }

  // Group by base id (strip any "drafts." prefix); prefer published content over draft
  const byBase = new Map()
  for (const doc of all) {
    const base = doc._id.replace(/^drafts\./, '')
    const isDraft = doc._id.startsWith('drafts.')
    const existing = byBase.get(base)
    if (!existing || (existing.isDraft && !isDraft)) {
      byBase.set(base, { doc, isDraft })
    }
  }
  const logical = [...byBase.values()].map((v) => v.doc)
  console.log(`Deduped to ${logical.length} logical documents`)

  // Create fresh PUBLISHED docs with clean UUID ids (no dots)
  const createTx = client.transaction()
  for (const doc of logical) {
    const { _id, _rev, _createdAt, _updatedAt, ...rest } = doc
    createTx.create({ ...rest, _id: randomUUID() })
  }
  await createTx.commit()
  console.log(`Created ${logical.length} clean published works documents`)

  // Delete every old works doc (dotted ids and any drafts)
  const oldIds = all.map((d) => d._id)
  const deleteTx = client.transaction()
  for (const id of oldIds) {
    deleteTx.delete(id)
  }
  await deleteTx.commit()
  console.log(`Deleted ${oldIds.length} old works documents`)

  console.log('Done.')
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
