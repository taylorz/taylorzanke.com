// Seeds the `tag` docs and converts `works.tags` from strings to references.
//
//   npx sanity exec migrations/works-tags-to-refs.mjs --with-user-token -- --seed-only
//   npx sanity exec migrations/works-tags-to-refs.mjs --with-user-token            (dry run)
//   npx sanity exec migrations/works-tags-to-refs.mjs --with-user-token -- --apply
//
// Converting breaks any deployed frontend still querying `$tag in tags` with
// strings, so run the conversion together with the deploy of the new queries.
import sanityCli from 'sanity/cli'
const {getCliClient} = sanityCli

const client = getCliClient({apiVersion: '2024-04-07'})
const args = process.argv.slice(2)
const seedOnly = args.includes('--seed-only')
const apply = args.includes('--apply')

// IDs without dots — dotted ids are hidden from public reads.
const TAGS = [
  {_id: 'tag-installation', title: 'Installation', slug: 'installation', order: 1},
  {_id: 'tag-publication', title: 'Publication', slug: 'publication', order: 2},
]

// Old string tag -> new tag doc id. A starting point; re-tag by hand in the Studio.
const MAP = {exhibitions: 'tag-installation', books: 'tag-publication'}

const seed = async () => {
  const tx = client.transaction()
  for (const t of TAGS) {
    tx.createIfNotExists({
      _id: t._id,
      _type: 'tag',
      title: t.title,
      slug: {_type: 'slug', current: t.slug},
      order: t.order,
    })
  }
  await tx.commit()
  console.log(`Seeded tags: ${TAGS.map((t) => t._id).join(', ')}`)
}

const convert = async () => {
  // Raw perspective: published and drafts.
  const docs = await client
    .withConfig({perspective: 'raw'})
    .fetch(`*[_type == "works" && count(tags[_type == "string" || string(@) == @]) > 0]{_id, title, tags}`)

  const tx = client.transaction()
  for (const doc of docs) {
    const strings = doc.tags.filter((t) => typeof t === 'string')
    const unknown = strings.filter((t) => !MAP[t])
    if (unknown.length) throw new Error(`${doc._id}: unmapped tags ${unknown.join(', ')}`)
    const refs = [...new Set(strings.map((t) => MAP[t]))].map((id) => ({
      _type: 'reference',
      _ref: id,
      _key: id,
    }))
    console.log(`${doc._id}  ${doc.title}: [${strings.join(', ')}] -> [${refs.map((r) => r._ref).join(', ')}]`)
    tx.patch(doc._id, (p) => p.set({tags: refs}))
  }

  if (!apply) {
    console.log(`\nDry run: ${docs.length} docs would change. Re-run with --apply.`)
    return
  }
  await tx.commit()
  console.log(`\nConverted ${docs.length} docs.`)
}

await seed()
if (!seedOnly) await convert()
