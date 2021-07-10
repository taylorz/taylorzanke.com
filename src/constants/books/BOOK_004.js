function importAll(r) { return r.keys().map(r); }
const images = importAll(require.context('../../../src/assets/work-images/books/004', false, /\.(png|jpe?g|svg)$/));
// console.log("images", images)

const BOOK_004 = {
  id: 4,
  title: 'Transmissions From Rare Space',
  year: '2019',
  description: 'This book collects gestural plan and reflected ceiling plan drawings of imagined spaces which have been scanned and drawn over in a CAD environment. The individual drawings are made up of layers of graphite and printed ink, the latter tracing the former, creating effects of depth. Line weight and poché, applied in a the digital drawing environemnt contribute to a compositional strengthening of gestural line. A conceptual "found condition" in the graphite line is surveyed and stabilized by the CAD line.',
  dimensions: '7 x 9 inches',
  pagesCount: 192,
  textStock: 'Red River, 26lb, Colorjet',
  coverStock: 'Crest, 80lb, Solar White',
  productionInfo: 'Inkjet printed, smythe sewn, PVA glued spine',
  edition: '1',
  images: [ images ],
  route: '/004'
}

export default BOOK_004
