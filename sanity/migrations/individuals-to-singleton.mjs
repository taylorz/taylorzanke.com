import { createClient } from '@sanity/client'

const token = process.env.SANITY_TOKEN

if (!token) {
  console.error('Error: SANITY_TOKEN environment variable is required')
  console.error('Run: SANITY_TOKEN=<your-token> node migrations/individuals-to-singleton.mjs')
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
  // Fetch all existing individual documents
  const individuals = await client.fetch(
    `*[_type == "individual"] | order(year desc) { _id, image, captionTitle, captionLabel, year }`
  )

  console.log(`Found ${individuals.length} individual documents`)

  if (individuals.length === 0) {
    console.log('Nothing to migrate.')
    process.exit(0)
  }

  // Map them to the images array format
  const images = individuals.map(({ image, captionTitle, captionLabel, year }) => ({
    _type: 'object',
    _key: Math.random().toString(36).slice(2),
    image,
    captionTitle,
    captionLabel,
    year,
  }))

  // Create or replace the singleton
  await client.createOrReplace({
    _id: 'individuals',
    _type: 'individuals',
    images,
  })

  console.log(`Created singleton "individuals" with ${images.length} images`)

  // Delete the original individual documents
  const ids = individuals.map((d) => d._id)
  const tx = client.transaction()
  for (const id of ids) {
    tx.delete(id)
  }
  await tx.commit()

  console.log(`Deleted ${ids.length} individual documents`)
  console.log('Migration complete.')
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
