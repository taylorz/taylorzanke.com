function importAll(r) { return r.keys().map(r); }
const images = importAll(require.context('../../../src/assets/work-images/books/007', false, /\.(png|jpe?g|svg)$/));
// console.log("images", images)

const BOOK_007 = {
  id: 7,
  title: 'Forms Sites',
  year: '2020',
  description: 'This book presents details of drawings from a prior project (Transmissions From Rare Space). The book leads with a quote from Aldo Rossi which situates the contents. The book represents an inquiry into a prior process of addition and reflection, and the re-presentation of that process as a new context for discovery. The logical presentation of fragmented, and biographical, additions.',
  dimensions: '7 x 9.5 inches',
  pagesCount: 208,
  textStock: 'Red River, 26lb, Colorjet',
  coverStock: 'Crest, 80lb, Solar White. Trace paper dust jacket',
  productionInfo: 'Inkjet printed, smythe sewn, PVA glued spine',
  edition: '1',
  images: [ images ],
  route: '/007'
}

export default BOOK_007
