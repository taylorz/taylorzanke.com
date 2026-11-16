import {useMemo} from 'react'

// Array input that lists its items newest year first (items without a year
// last), matching the order on the site. Display only: the stored order is
// untouched, so pair it with `options: {sortable: false}`.
export default function SortedByYearArrayInput(props) {
  const {members, renderDefault} = props

  const sorted = useMemo(() => {
    const year = (member) => (member.kind === 'item' && member.item.value?.year) || ''
    // Stable sort: same-year items keep their stored order.
    return [...members].sort((a, b) => year(b).localeCompare(year(a)))
  }, [members])

  return renderDefault({...props, members: sorted})
}
