const {createClient} = require('@sanity/client')

const client = createClient({
  projectId: 'hhvbqtrb',
  dataset: 'production',
  apiVersion: '2024-04-07',
  token: process.env.SANITY_AUTH_TOKEN,
  useCdn: false,
})

// Helper to generate a random key
const generateKey = () => Math.random().toString(36).substring(2, 15)

// Find all works and their related workImages
const fetchDocuments = () =>
  client.fetch(`
    *[_type == "work"] {
      _id,
      title,
      "currentImages": images[]{_key, _ref},
      "referencingImages": *[_type == "workImage" && work._ref == ^._id]._id
    }
  `)

const buildPatches = (docs) =>
  docs.reduce((patches, doc) => {
    // Convert arrays to Sets for easier comparison
    const currentRefs = new Set((doc.currentImages || []).map((img) => img._ref))
    const referencingSet = new Set(doc.referencingImages || [])

    // Find images that reference the work but aren't in its images array
    const missingImages = [...referencingSet].filter((id) => !currentRefs.has(id))

    if (missingImages.length > 0) {
      console.log(`Found ${missingImages.length} missing images for work "${doc.title}"`)

      // Preserve existing images with their keys and add new ones with generated keys
      const existingImages = doc.currentImages || []
      const newImages = missingImages.map((ref) => ({
        _key: generateKey(),
        _type: 'reference',
        _ref: ref,
      }))

      patches.push({
        id: doc._id,
        patch: {
          set: {
            images: [...existingImages, ...newImages],
          },
        },
      })
    }

    return patches
  }, [])

const createTransaction = (patches) =>
  patches.reduce((tx, patch) => tx.patch(patch.id, patch.patch), client.transaction())

const commitTransaction = (tx) => tx.commit()

const migrateNextBatch = async () => {
  const documents = await fetchDocuments()
  const patches = buildPatches(documents)

  if (patches.length === 0) {
    console.log('No works need updating!')
    return null
  }

  console.log(
    `Updating ${patches.length} works:\n %s`,
    patches
      .map(
        (patch) =>
          `${patch.id} => Adding ${patch.patch.set.images.length - (documents.find((d) => d._id === patch.id).currentImages || []).length} images`,
      )
      .join('\n'),
  )

  const transaction = createTransaction(patches)
  await commitTransaction(transaction)
  return migrateNextBatch()
}

migrateNextBatch().catch((err) => {
  console.error(err)
  process.exit(1)
})
