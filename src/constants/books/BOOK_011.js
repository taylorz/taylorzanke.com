function importAll(r) { return r.keys().map(r); }
const images = importAll(require.context('../../../src/assets/work-images/011', false, /\.(png|jpe?g|svg)$/));
// console.log("images", images)

const BOOK_011 = {
  id: 11,
  title: 'Untitled #3',
  year: '2021',
  description: 'Found grocery store flyers are folded and assembled into this volume. Two sets of printed forms outline a grid and trace the contours of the numbers 0 to 9.',
  dimensions: '6.25 x 9',
  pagesCount: 76,
  textStock: 'Found newsprint flyers',
  coverStock: 'Red River, 60lb, Polar Matte',
  productionInfo: 'Inkjet printed, hot glue open spine, french folded',
  edition: '1',
  images: [ images ],
  route: '/011'
}

export default BOOK_011
