function importAll(r) { return r.keys().map(r); }
const images = importAll(require.context('../../../src/assets/work-images/003', false, /\.(png|jpe?g|svg)$/));
// console.log("images", images)

const BOOK_003 = {
  id: 3,
  title: 'Several Speculative Improvements To My Family Home',
  year: '2016',
  description: 'This book is a diary of some time I spent in my family home, years after having moved away, to care for my mother while she recovered from surgery. To occupy my time I began to survey and create models of the home, assembling them slowly out of cardboard, paper, and other found materials. The models deviate quite dramatically from the actual existing condition of the house, and compositonal liberties were taken as my mind wandered. This book examines those models and situates them within the context of my solitary work, in a familiar place. Photographs of objects and scenes within the house appear throughout the book, punctuating the reconfigured spatial conditions of the actual, and imagined home.',
  dimensions: '6 x 8.5 inches',
  pagesCount: 182,
  textStock: '',
  coverStock: '',
  productionInfo: 'Laser printed, cold glue spine',
  edition: '1',
  images: [ images ],
  route: '/003'
}

export default BOOK_003
