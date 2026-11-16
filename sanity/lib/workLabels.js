// Tag titles (already dereferenced) joined, e.g. "Installation, Publication".
export function tagLabel(tagTitles) {
  if (!Array.isArray(tagTitles)) return ''
  return tagTitles.filter(Boolean).join(', ')
}

// "Installation · 2026" — leads with the tags so it reads at a glance in
// document lists and in the reference dropdown on Home.
export function workSubtitle(tagTitles, year) {
  return [tagLabel(tagTitles), year].filter(Boolean).join(' · ')
}
