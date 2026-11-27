import {useEffect, useMemo, useState} from 'react'
import {
  Box,
  Button,
  Card,
  Flex,
  Grid,
  Label,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  Radio,
  Spinner,
  Stack,
  Text,
} from '@sanity/ui'
import {ChevronDownIcon} from '@sanity/icons'
import {set, unset, useClient} from 'sanity'

// Slide input: choose a source (a work, or an individuals group), then click
// one of its images. Writes the slide's `work` reference or `groupKey`, the
// image's `imageKey`, and a copy of the image (used for the list preview).
//
// Published content only (`raw` perspective + drafts filtered out), so a
// slide never points at something the site can't show.
const QUERY = `{
  "works": *[_type == "works" && !(_id in path("drafts.**")) && count(images) > 0]
    | order(year desc) {
      _id, title, year,
      "images": images[defined(image.asset)]{_key, image, "url": image.asset->url}
    },
  "groups": *[_id == "individuals"][0].groups[count(images) > 0]
    | order(coalesce(year, "") desc) {
      _key, year,
      "images": images[defined(asset)]{_key, "image": @, "url": asset->url}
    }
}`

const thumb = (url, size = 320) => `${url}?w=${size}&h=${size}&fit=crop&auto=format`

// Square thumbnail for a source row (its first image).
function SourceThumb({source}) {
  const url = source?.images?.[0]?.url
  return (
    <Box
      style={{
        width: 40,
        height: 40,
        flex: 'none',
        borderRadius: 2,
        overflow: 'hidden',
        background: 'var(--card-muted-bg-color)',
      }}
    >
      {url && (
        <img
          src={thumb(url, 80)}
          alt=""
          style={{width: '100%', height: '100%', objectFit: 'cover', display: 'block'}}
        />
      )}
    </Box>
  )
}

// Thumbnail + label, used in the menu button and each menu item.
function SourceRow({source, placeholder}) {
  return (
    <Flex align="center" gap={3}>
      <SourceThumb source={source} />
      <Text size={1} textOverflow="ellipsis" muted={!source}>
        {source ? source.label : placeholder}
      </Text>
    </Flex>
  )
}

// Image object to store as the slide's copy: asset + crop/hotspot only.
const imageCopy = ({asset, crop, hotspot}) => ({
  _type: 'image',
  asset: {_type: 'reference', _ref: asset._ref},
  ...(crop && {crop}),
  ...(hotspot && {hotspot}),
})

const ALIGNMENTS = [
  ['Left', 'left'],
  ['Center', 'center'],
  ['Right', 'right'],
]

export default function SlidePicker(props) {
  const {value, onChange, readOnly} = props
  const studioClient = useClient({apiVersion: '2024-04-07'})
  const client = useMemo(() => studioClient.withConfig({perspective: 'raw'}), [studioClient])
  const [data, setData] = useState(null)

  useEffect(() => {
    let cancelled = false
    client
      .fetch(QUERY)
      .then((result) => !cancelled && setData(result))
      .catch(() => !cancelled && setData({works: [], groups: []}))
    return () => {
      cancelled = true
    }
  }, [client])

  // Every source as {id, kind, label, images}; individuals labelled with
  // their running image numbers, as on the site: "(5, 6), 2024".
  const sources = useMemo(() => {
    if (!data) return []
    let n = 0
    const groups = (data.groups || []).map((group) => {
      const numbers = group.images.map(() => ++n)
      return {
        id: `group:${group._key}`,
        kind: 'group',
        label: `(${numbers.join(', ')})${group.year ? `, ${group.year}` : ''}`,
        images: group.images,
      }
    })
    const works = (data.works || []).map((work) => ({
      id: `work:${work._id}`,
      kind: 'work',
      label: `${work.title}${work.year ? `, ${work.year}` : ''}`,
      images: work.images,
    }))
    return [...works, ...groups]
  }, [data])

  const sourceId = value?.work?._ref
    ? `work:${value.work._ref}`
    : value?.groupKey
      ? `group:${value.groupKey}`
      : ''
  const source = sources.find((s) => s.id === sourceId)

  const pickSource = (id) => {
    const [kind, key] = id.split(/:(.*)/)
    onChange([
      kind === 'work' ? set({_type: 'reference', _ref: key}, ['work']) : unset(['work']),
      kind === 'group' ? set(key, ['groupKey']) : unset(['groupKey']),
      unset(['imageKey']),
      unset(['image']),
    ])
  }

  const pickImage = (image) =>
    onChange([set(image._key, ['imageKey']), set(imageCopy(image.image), ['image'])])

  if (!data) {
    return (
      <Card padding={3} radius={2} tone="transparent">
        <Spinner muted />
      </Card>
    )
  }

  const missing = value?.imageKey && source && !source.images.some((i) => i._key === value.imageKey)

  return (
    <Stack space={3}>
      <MenuButton
        id="slide-source"
        button={
          <Button
            mode="ghost"
            padding={2}
            disabled={readOnly}
            style={{width: '100%'}}
            justify="flex-start"
          >
            <Flex align="center" justify="space-between" gap={2}>
              <SourceRow source={source} placeholder="Choose a work or individual…" />
              <ChevronDownIcon />
            </Flex>
          </Button>
        }
        menu={
          <Menu>
            {[
              ['Works', 'work'],
              ['Individuals', 'group'],
            ].map(([heading, kind], i) => (
              <Stack key={kind} space={1}>
                {i > 0 && <MenuDivider />}
                <Box paddingX={3} paddingY={2}>
                  <Label size={1} muted>
                    {heading}
                  </Label>
                </Box>
                {sources
                  .filter((s) => s.kind === kind)
                  .map((s) => (
                    <MenuItem
                      key={s.id}
                      padding={2}
                      pressed={s.id === sourceId}
                      onClick={() => pickSource(s.id)}
                    >
                      <SourceRow source={s} />
                    </MenuItem>
                  ))}
              </Stack>
            ))}
          </Menu>
        }
        popover={{portal: true, constrainSize: true, matchReferenceWidth: true}}
      />

      {sourceId && !source && (
        <Card padding={3} radius={2} tone="critical">
          <Text size={1}>This slide's source is no longer published. Choose another.</Text>
        </Card>
      )}

      {source && (
        <Grid columns={[3, 4, 5]} gap={2}>
          {source.images.map((image) => {
            const selected = image._key === value?.imageKey
            return (
              <button
                key={image._key}
                type="button"
                disabled={readOnly}
                onClick={() => pickImage(image)}
                style={{
                  padding: 0,
                  border: selected
                    ? '2px solid var(--card-focus-ring-color)'
                    : '2px solid transparent',
                  borderRadius: 3,
                  background: 'var(--card-muted-bg-color)',
                  cursor: readOnly ? 'default' : 'pointer',
                  aspectRatio: '1 / 1',
                  overflow: 'hidden',
                  opacity: selected || !value?.imageKey ? 1 : 0.55,
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
      )}

      {missing && (
        <Card padding={3} radius={2} tone="critical">
          <Text size={1}>The selected image is no longer on this source. Pick another one.</Text>
        </Card>
      )}

      {/* Mobile alignment: where the full-screen crop sits on phones.
          Optional; unset reads as Center. This custom input replaces the
          default form, so the field is drawn here. */}
      {value?.imageKey && (
        <Stack space={2}>
          <Text size={1} weight="medium">
            Mobile alignment
          </Text>
          <Flex gap={4}>
            {ALIGNMENTS.map(([title, alignment]) => (
              <Flex key={alignment} as="label" align="center" gap={2}>
                <Radio
                  name={`mobile-alignment-${value?._key}`}
                  value={alignment}
                  disabled={readOnly}
                  checked={(value?.mobileAlignment ?? 'center') === alignment}
                  onChange={() =>
                    onChange(
                      alignment === 'center'
                        ? unset(['mobileAlignment'])
                        : set(alignment, ['mobileAlignment']),
                    )
                  }
                />
                <Text size={1}>{title}</Text>
              </Flex>
            ))}
          </Flex>
        </Stack>
      )}
    </Stack>
  )
}
