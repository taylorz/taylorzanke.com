function importAll(r) { return r.keys().map(r); }
const images = importAll(require.context('../../../src/assets/work-images/001', false, /\.(png|jpe?g|svg)$/));
// console.log("images", images)

const BOOK_001 = {
  id: 1,
  title: 'Two Cities Reader: Honolulu New York',
  year: '2013',
  description: 'A collection of photographs taken in Honolulu, Hawaii and New York City over the course of a year. Images from both locations interspersed with one another create a new, third, location visitable within the pages of the book.',
  dimensions: '6 x 8 inches',
  pagesCount: 42,
  textStock: '',
  coverStock: '',
  productionInfo: 'Laser printed, cold glue spine',
  edition: '1',
  images: [ images ],
  route: '/001'
}

export default BOOK_001
