function importAll(r) { return r.keys().map(r); }
const images = importAll(require.context('../../../src/assets/work-images/recordings/003', false, /\.(png|jpe?g|svg)$/));
// console.log("images", images)

const RECORDING_003 = {
  id: 3,
  title: "Moving Past",
  dateRecorded: '2021',
  dateReleased: '2021',
  release: 'Self Released',
  description: '',
  duration: '40:27',
  trackList: [
    {
      title: 'I Remember Some Versions of Me',
      duration: '21:20'
    },
    {
      title: 'In The Space Which Exists There',
      duration: '19:07'
    },
  ],
  format: 'Digital Release',
  production: 'Synthesizer, processed guitar, effects',
  listenUrl: 'https://taylorzanke.bandcamp.com/album/moving-past',
  images: [ images ],
  route: '/003'
}

export default RECORDING_003
