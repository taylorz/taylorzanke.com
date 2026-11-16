// Fills in `image` (the preview copy) on Home slides that lack one, from
// the slide's source work or individuals group. Published + draft.
//
//   npx sanity exec migrations/backfill-slide-image-copies.mjs --with-user-token
import sanityCli from 'sanity/cli'
const {getCliClient} = sanityCli

const client = getCliClient({apiVersion: '2024-04-07'}).withConfig({perspective: 'raw'})

const docs = await client.fetch(`*[_id in ["home", "drafts.home"]]{
  _id,
  "slides": slides[!defined(image) && defined(imageKey)]{
    _key,
    "fromWork": work->images[_key == ^.imageKey][0].image,
    groupKey,
    imageKey
  }
}`)
const groups = (await client.fetch(`*[_id == "individuals"][0].groups`)) ?? []

for (const doc of docs) {
  const patch = client.patch(doc._id)
  let n = 0
  for (const slide of doc.slides ?? []) {
    const src =
      slide.fromWork ??
      groups.find((g) => g._key === slide.groupKey)?.images?.find((i) => i._key === slide.imageKey)
    if (!src?.asset) continue
    patch.set({
      [`slides[_key=="${slide._key}"].image`]: {
        _type: 'image',
        asset: {_type: 'reference', _ref: src.asset._ref},
        ...(src.crop && {crop: src.crop}),
        ...(src.hotspot && {hotspot: src.hotspot}),
      },
    })
    n++
  }
  if (n) await patch.commit()
  console.log(`${doc._id}: filled ${n} slide image copies`)
}
