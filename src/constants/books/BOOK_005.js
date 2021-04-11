function importAll(r) { return r.keys().map(r); }
const images = importAll(require.context('../../../src/assets/work-images/005', false, /\.(png|jpe?g|svg)$/));
// console.log("images", images)

const BOOK_005 = {
  id: 5,
  title: 'Two Visitations',
  year: '2020',
  description: 'A collection of photographs taken in places which are similar or the same, inhabited psychically or phyiscally, visited once or several times. Images documenting a visit turn into images aiding memory, returned to in the volume, arranged in dialogue with one another. Two trees reach out towards one another in spring and in fall, landscapes reaching towards the horizon share edges, waves crashing to shore mix motion.',
  dimensions: '5 x 7 inches',
  pagesCount: 104,
  textStock: 'Red River, 26lb, Colorjet',
  coverStock: 'Crest, 80lb, Solar White. Red River, 26lb, Colorjet dust jacket',
  productionInfo: 'Inkjet printed, smythe sewn, PVA glued spine, french folded',
  edition: '1',
  images: [ images ],
  route: '/005'
}

export default BOOK_005
