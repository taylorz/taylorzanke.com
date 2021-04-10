function importAll(r) { return r.keys().map(r); }
const images = importAll(require.context('../../../src/assets/work-images/011', false, /\.(png|jpe?g|svg)$/));
// console.log("images", images)

const BOOK_011 = {
  id: 11,
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
  route: '/011'
}

export default BOOK_011
