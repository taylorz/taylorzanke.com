// One work as a row of text (the /work list). From md up, on a 12-column
// grid, cells gap-6 apart (every 2 columns match the /work pickers' 6):
// title over columns 1-5, type over 6-7, then note, year and `view` (e.g.
// "View") over 8-12, the note filling up to the year and `view` at the
// row's right end. The title truncates; type and note wrap. Missing data
// leaves a blank.
//
// `cellClass` goes on every cell, e.g. "pl-6" to indent all the text or
// "group-hover:pl-6" to indent it when a `group` parent is hovered.
export default function WorkRow({
  year,
  types,
  title,
  note,
  view,
  cellClass = "",
  className = "",
  style,
}) {
  return (
    <span className={`grid grid-cols-12 gap-x-6 ${className}`} style={style}>
      <span className={`col-span-5 truncate ${cellClass}`}>{title}</span>
      <span className={`col-span-2 min-w-0 ${cellClass}`}>{types}</span>
      <span className={`col-span-5 flex gap-6 min-w-0 ${cellClass}`}>
        <span className="flex-1 min-w-0">{note}</span>
        <span className="shrink-0">{year}</span>
        {view && <span className="shrink-0">{view}</span>}
      </span>
    </span>
  );
}
