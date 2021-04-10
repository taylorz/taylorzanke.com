function importAll(r) { return r.keys().map(r); }
const images = importAll(require.context('../../../src/assets/work-images/007', false, /\.(png|jpe?g|svg)$/));
// console.log("images", images)

const BOOK_007 = {
  id: 7,
  title: 'Forms Sites',
  year: '2020',
  description: '',
  dimensions: '',
  pagesCount: null,
  textStock: '',
  coverStock: '',
  productionInfo: '',
  edition: '',
  images: [ images ],
  route: '/007'
}

export default BOOK_007
