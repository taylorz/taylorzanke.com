// Trims text to a search-result-friendly description (~155 characters),
// cutting at a word boundary.
export function truncateDescription(text, max = 155) {
  const clean = (text || "").replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean || undefined;
  return `${clean.slice(0, max).replace(/\s+\S*$/, "")}…`;
}
