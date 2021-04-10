function importAll(r) { return r.keys().map(r); }
const images = importAll(require.context('../../../src/assets/work-images/009', false, /\.(png|jpe?g|svg)$/));
// console.log("images", images)

const BOOK_009 = {
  id: 9,
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
  route: '/009'
}

export default BOOK_009
