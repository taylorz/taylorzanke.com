function importAll(r) { return r.keys().map(r); }
const images = importAll(require.context('../../../src/assets/work-images/008', false, /\.(png|jpe?g|svg)$/));
// console.log("images", images)

const BOOK_008 = {
  id: 8,
  title: 'Reformulations 2',
  year: '2020',
  description: '',
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
