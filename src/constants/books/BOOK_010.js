function importAll(r) { return r.keys().map(r); }
const images = importAll(require.context('../../../src/assets/work-images/010', false, /\.(png|jpe?g|svg)$/));
// console.log("images", images)

const BOOK_010 = {
  id: 10,
  title: 'Untitled',
  year: '2021',
  description: '',
  dimensions: '',
  pagesCount: null,
  textStock: '',
  coverStock: '',
  productionInfo: '',
  edition: '',
  images: [ images ],
  route: '/010'
}

export default BOOK_010
