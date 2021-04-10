function importAll(r) { return r.keys().map(r); }
const images = importAll(require.context('../../../src/assets/work-images/006', false, /\.(png|jpe?g|svg)$/));
// console.log("images", images)

const BOOK_006 = {
  id: 6,
  title: 'Reformulations 1',
  year: '2020',
  description: '',
  dimensions: '5.25 x 7.5 inches',
  pagesCount: 192,
  textStock: 'US Letter, 24lb, White. Pacon, Standard Weight, Drawing Paper. Newsprint',
  coverStock: 'Crest, 80lb, Solar White',
  productionInfo: 'Laser and inkjet printed, smythe sewn, PVA glued spine, with original and printed graphite drawings',
  edition: '1',
  images: [ images ],
  route: '/006'
}

export default BOOK_006
