// Moves the legacy `work` docs (all but exhibitions) into the `individuals`
// singleton as `groups`, and folds its loose `images` into one last group.
//
//   npx sanity exec migrations/legacy-work-to-individual-groups.mjs --with-user-token            (dry run)
//   npx sanity exec migrations/legacy-work-to-individual-groups.mjs --with-user-token -- --apply
//   npx sanity exec migrations/legacy-work-to-individual-groups.mjs --with-user-token -- --delete-legacy
//
// --delete-legacy removes the migrated legacy docs; only run it after
// checking the groups. Group _keys are the legacy doc ids, so existing
// /work/individuals/<id> URLs keep working.
import sanityCli from 'sanity/cli'
const {getCliClient} = sanityCli

const client = getCliClient({apiVersion: '2024-04-07'}).withConfig({perspective: 'raw'})
const args = process.argv.slice(2)
const apply = args.includes('--apply')
const deleteLegacy = args.includes('--delete-legacy')

const LEGACY = `*[_type == "work" && !(_id in path("drafts.**")) && category->title != "Exhibitions & Presentations"]
  | order(year desc) {_id, title, year, materials, width, depth, height, images}`

// Sanity image object (asset + crop/hotspot) from a legacy {image, caption} item.
const toImage = (image, _key) => ({
  _type: 'image',
  _key,
  asset: image.asset,
  ...(image.crop && {crop: image.crop}),
  ...(image.hotspot && {hotspot: image.hotspot}),
})

const imagesOf = (items) =>
  (items || [])
    .filter((item) => item?.image?.asset)
    .map((item, i) => toImage(item.image, item._key || `img${i}`))

if (deleteLegacy) {
  const ids = (await client.fetch(LEGACY)).map((d) => d._id)
  const keys = await client.fetch(`*[_id == "individuals"][0].groups[]._key`)
  const missing = ids.filter((id) => !keys?.includes(id))
  if (missing.length) throw new Error(`Not in individuals.groups, refusing to delete: ${missing.join(', ')}`)
  const tx = client.transaction()
  ids.forEach((id) => tx.delete(id))
  await tx.commit()
  console.log(`Deleted ${ids.length} legacy work docs.`)
  process.exit(0)
}

const draft = await client.fetch(`*[_id == "drafts.individuals"][0]._id`)
if (draft) throw new Error('drafts.individuals exists — publish or discard it first.')

const [legacy, singleton] = await Promise.all([
  client.fetch(LEGACY),
  client.fetch(`*[_id == "individuals"][0]{images}`),
])

const groups = legacy.map((doc) => ({
  _type: 'group',
  _key: doc._id,
  images: imagesOf(doc.images),
  ...(doc.year && {year: doc.year.trim()}),
  ...(doc.materials && {materials: doc.materials.trim()}),
  ...(doc.width && {width: doc.width}),
  ...(doc.depth && {depth: doc.depth}),
  ...(doc.height && {height: doc.height}),
}))

const loose = imagesOf(singleton?.images)
if (loose.length) groups.push({_type: 'group', _key: 'loose-images', images: loose})

for (const [i, g] of groups.entries()) {
  const src = legacy.find((d) => d._id === g._key)
  console.log(
    `${String(i + 1).padStart(2)}. ${src ? src.title.trim() : '(loose individuals images)'} — ` +
      `${g.images.length} img · ${g.year || '-'} · ${g.materials || '-'} · ` +
      `${[g.width, g.depth, g.height].map((v) => v || '-').join(' × ')}`,
  )
}
console.log(`\n${groups.length} groups, ${groups.reduce((n, g) => n + g.images.length, 0)} images.`)

if (!apply) {
  console.log('Dry run. Re-run with --apply.')
  process.exit(0)
}

await client.patch('individuals').set({groups}).unset(['images']).commit()
console.log('Wrote individuals.groups and removed individuals.images.')
