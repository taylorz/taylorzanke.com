import {useEffect, useMemo, useState} from 'react'
import {Card, Grid, Spinner, Stack, Text} from '@sanity/ui'
import {set, unset, useClient, useFormValue} from 'sanity'

// Images live inside the `images` array of a `works` document, and Sanity
// references point at documents rather than at array items — so a slide stores
// the work reference plus the `_key` of the image it wants. This input resolves
// the referenced work and lets you click the image instead of typing a key.
const QUERY = `*[_id == $id][0]{
  "images": images[]{_key, "url": image.asset->url, captionTitle, captionLabel}
}`

const thumb = (url) => `${url}?w=320&h=320&fit=crop&auto=format`

const SlideImagePicker = (props) => {
  const {value, onChange, path, readOnly} = props
  const parent = useFormValue(path.slice(0, -1))
  const workId = parent?.work?._ref
  const studioClient = useClient({apiVersion: '2024-04-07'})
  // Pinned to `raw` so `_id == $id` always means the published document,
  // whatever perspective the Studio is browsing in. Memoised because
  // withConfig() returns a new client instance every call.
  const client = useMemo(() => studioClient.withConfig({perspective: 'raw'}), [studioClient])
  const [images, setImages] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!workId) {
      setImages(null)
      return undefined
    }

    let cancelled = false
    setLoading(true)

    client
      .fetch(QUERY, {id: workId})
      .then((doc) => {
        if (cancelled) return
        setImages((doc?.images || []).filter((image) => image.url))
      })
      .catch(() => !cancelled && setImages([]))
      .finally(() => !cancelled && setLoading(false))

    return () => {
      cancelled = true
    }
  }, [client, workId])

  if (!workId) {
    return (
      <Card padding={3} radius={2} tone="transparent">
        <Text size={1} muted>
          Select a work first, then pick one of its images.
        </Text>
      </Card>
    )
  }

  if (loading && !images) {
    return (
      <Card padding={3} radius={2} tone="transparent">
        <Spinner muted />
      </Card>
    )
  }

  if (!images?.length) {
    return (
      <Card padding={3} radius={2} tone="caution">
        <Text size={1}>That work has no published images yet.</Text>
      </Card>
    )
  }

  const missing = value && !images.some((image) => image._key === value)

  return (
    <Stack space={3}>
      <Grid columns={[3, 4, 5]} gap={2}>
        {images.map((image) => {
          const selected = image._key === value
          return (
            <button
              key={image._key}
              type="button"
              disabled={readOnly}
              title={[image.captionTitle, image.captionLabel].filter(Boolean).join(', ')}
              onClick={() => onChange(selected ? unset() : set(image._key))}
              style={{
                padding: 0,
                border: selected ? '2px solid var(--card-focus-ring-color)' : '2px solid transparent',
                borderRadius: 3,
                background: 'var(--card-muted-bg-color)',
                cursor: readOnly ? 'default' : 'pointer',
                aspectRatio: '1 / 1',
                overflow: 'hidden',
                opacity: selected || !value ? 1 : 0.55,
              }}
            >
              <img
                src={thumb(image.url)}
                alt=""
                style={{width: '100%', height: '100%', objectFit: 'cover', display: 'block'}}
              />
            </button>
          )
        })}
      </Grid>

      {missing && (
        <Card padding={3} radius={2} tone="critical">
          <Text size={1}>
            The selected image is no longer on this work. Pick another one.
          </Text>
        </Card>
      )}
    </Stack>
  )
}

export default SlideImagePicker
