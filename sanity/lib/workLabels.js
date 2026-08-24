const TAG_LABELS = {
  exhibitions: 'Exhibition',
  books: 'Book',
}

export function tagLabel(tags) {
  if (!Array.isArray(tags)) return ''
  return tags.map((tag) => TAG_LABELS[tag] || tag).join(', ')
}

// "Exhibition · 2026" — leads with the type so it reads at a glance in
// document lists and in the reference dropdown on Home.
export function workSubtitle(tags, year) {
  return [tagLabel(tags), year].filter(Boolean).join(' · ')
}
