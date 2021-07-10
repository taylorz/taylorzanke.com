function importAll(r) { return r.keys().map(r); }
const images = importAll(require.context('../../../src/assets/work-images/books/002', false, /\.(png|jpe?g|svg)$/));
// console.log("images", images)

const BOOK_002 = {
  id: 2,
  title: 'Two Cities Reader: Mumbai Paris',
  year: '2015',
  description: 'A collection of photographs taken in Mumbai, India and Paris, France over the course of a few years. Images were printed and arranged on a tabletop while recorded. The book is a compilation of stills from the footage, spliced and assembled in the book to reveal persistent forms across frames as well as transient motion as I organize the printed images.',
  dimensions: '10 x 12 inches',
  pagesCount: 214,
  textStock: '',
  coverStock: '',
  productionInfo: 'Inkjet printed, cold glue spine, point sewn',
  edition: '1',
  images: [ images ],
  route: '/002'
}

export default BOOK_002
