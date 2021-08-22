function importAll(r) { return r.keys().map(r); }
const images = importAll(require.context('../../../src/assets/work-images/books/010', false, /\.(png|jpe?g|svg)$/));
// console.log("images", images)

const BOOK_010 = {
  id: 10,
  title: 'Divisions',
  year: '2021',
  description: 'Drawn lines or gestural marks divide sheets of paper which are folded into signatures in this book. A grid system dictates where single or repeated page numbers are printed throughout the book. A dialogue between two methods of demarcation emerges, implying idiosyncratic structural systems.',
  dimensions: '5.75 x 8.5 inches',
  pagesCount: 184,
  textStock: 'Pacon, Standard Weight, Drawing Paper',
  coverStock: 'Crest, 80lb, Solar White. Newsprint dust jacket',
  productionInfo: 'Inkjet printed, smythe sewn, PVA glued spine, with original graphite drawings throughout',
  edition: '1',
  images: [ images ],
  route: '/010'
}

export default BOOK_010
