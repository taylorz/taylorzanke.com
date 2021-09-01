const images = importAll(require.context('../../../src/assets/work-images/books/006', false, /\.(png|jpe?g|svg)$/));
function importAll(r) { return r.keys().map(r); }
// console.log("images", images)

const BOOK_006 = {
  id: 6,
  title: 'Reformulations 1',
  year: '2020',
  description: 'A series of snapshots from a trip to California are printed on 8.5 x 11 inch letter paper and stored, without concrete intent, for several years. Later, drawings of imagined spaces are printed on the very same pages, followed by dark overprinted forms which overlap and indicate structure. The yellow cover wraps and defines a newfound object. Original graphite drawings are sewn into the book, and cropped to size.',
  sharedDescription: 'Reformulations is an ongoing project which, through an intuitive process of selection, addition, removal, or combination, groups a growing body of visual material. Photographs of drawings of models, drawings of models of photographs, models of drawings of photographs (and so on) are gathered. The outcome is a deepening and widening of a density, and the slow accretion of a point of view. Reformulations reaches outwards, beyond its formal purview, and demands arrangement, order and definition of yet unused material. A form, discovered, requires its fragments to possess structure, tone, potency. Its material occupies space, encroaching on the mundane. Printed pages, cut cardboard fragments, dusty matter stuffed in drawers or stored under desks. The stuff of the work. A tension between the structures of daily life and the expanding edge of implicated matter. An emotional, heartfelt, density.',
  dimensions: '5.25 x 7.5 inches',
  pagesCount: 192,
  textStock: 'US Letter, 24lb, White. Pacon, Standard Weight, Drawing Paper. Newsprint',
  coverStock: 'Crest, 80lb, Solar White. Red River, 26lb, Colorjet dust jacket',
  productionInfo: 'Laser and inkjet printed, smythe sewn, PVA glued spine, with original and printed graphite drawings',
  edition: '1',
  images: [ images ],
  route: '/006'
}

export default BOOK_006
