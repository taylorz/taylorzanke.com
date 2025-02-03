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

// Find all works with images missing _key
const fetchDocuments = () =>
  client.fetch(`
    *[_type == "work" && defined(images) && count(images[!defined(_key)]) > 0] {
      _id,
      title,
      images
    }
  `)

const buildPatches = (docs) =>
  docs.map((doc) => ({
    id: doc._id,
    patch: {
      set: {
        images: doc.images.map((img) => ({
          ...img,
          _key: img._key || generateKey(),
        })),
      },
    },
  }))

const createTransaction = (patches) =>
  patches.reduce((tx, patch) => tx.patch(patch.id, patch.patch), client.transaction())

const commitTransaction = (tx) => tx.commit()

const migrateNextBatch = async () => {
  const documents = await fetchDocuments()
  const patches = buildPatches(documents)

  if (patches.length === 0) {
    console.log('No works need _key updates!')
    return null
  }

  console.log(
    `Adding missing keys to ${patches.length} works:\n %s`,
    patches
      .map((patch) => `${patch.id} => Updating ${patch.patch.set.images.length} images`)
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
