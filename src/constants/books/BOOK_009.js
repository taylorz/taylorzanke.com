function importAll(r) { return r.keys().map(r); }
const images = importAll(require.context('../../../src/assets/work-images/books/009', false, /\.(png|jpe?g|svg)$/));
// console.log("images", images)

const BOOK_009 = {
  id: 9,
  title: 'Grocery 1',
  year: '2021',
  description: 'Found grocery store flyers are folded and assembled into this volume.',
  dimensions: '6.5 x 8.75 inches',
  pagesCount: 144,
  textStock: 'Found newsprint flyers',
  coverStock: 'Crest, 80lb, Solar White',
  productionInfo: 'Inkjet and unprinted, Smythe sewn, PVA glued spine, french folded',
  edition: '1',
  images: [ images ],
  route: '/009'
}

export default BOOK_009
