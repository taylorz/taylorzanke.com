function importAll(r) { return r.keys().map(r); }
const images = importAll(require.context('../../../src/assets/work-images/005', false, /\.(png|jpe?g|svg)$/));
// console.log("images", images)

const BOOK_005 = {
  id: 5,
  title: 'Two Visitations',
  year: '2020',
  description: '',
  dimensions: '5 x 7 inches',
  pagesCount: 104,
  textStock: 'Red River, 26lb, Colorjet',
  coverStock: 'Crest, 80lb, Solar White',
  productionInfo: 'Inkjet printed, smythe sewn, PVA glued spine, french folded',
  edition: '1',
  images: [ images ],
  route: '/005'
}

export default BOOK_005
