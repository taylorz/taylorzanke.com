function importAll(r) { return r.keys().map(r); }
const images = importAll(require.context('../../../src/assets/work-images/books/008', false, /\.(png|jpe?g|svg)$/));
// console.log("images", images)

const BOOK_008 = {
  id: 8,
  title: 'Reformulations 2',
  year: '2020',
  description: '',
  sharedDescription: 'Reformulations is an ongoing project which, through an intuitive process of selection, addition, removal, or combination, groups a growing body of visual material. Photographs of drawings of models, drawings of models of photographs, models of drawings of photographs (and so on) are gathered. The outcome is a deepening and widening of a density, and the slow accretion of a point of view. Reformulations reaches outwards, beyond its formal purview, and demands arrangement, order and definition of yet unused material. A form, discovered, requires its fragments to possess structure, tone, potency. Its material occupies space, encroaching on the mundane. Printed pages, cut cardboard fragments, dusty matter stuffed in drawers or stored under desks. The stuff of the work. A tension between the structures of daily life and the expanding edge of implicated matter. An emotional, heartfelt, density.',
  dimensions: '5 x 7.5 inches',
  pagesCount: 192,
  textStock: 'US Letter, 24lb, White',
  coverStock: 'Crest, 80lb, Solar White. Red River, 26lb, Colorjet dust jacket',
  productionInfo: 'Laser and inkjet printed, smythe sewn, PVA glued spine',
  edition: '1',
  images: [ images ],
  route: '/008'
}

export default BOOK_008
