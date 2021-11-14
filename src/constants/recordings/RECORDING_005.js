function importAll(r) { return r.keys().map(r); }
const images = importAll(require.context('../../../src/assets/work-images/recordings/005', false, /\.(png|jpe?g|svg)$/));
// console.log("images", images)

const RECORDING_004 = {
  id: 5,
  title: "Wholes Recast, In the End, Fragments",
  dateRecorded: '2021',
  dateReleased: '2021',
  release: 'Self Released',
  description: '',
  duration: '20:48',
  trackList: [
    {
      title: 'Wholes Recast, In the End, Fragments',
      duration: '20:48'
    },
  ],
  format: 'Digital Release',
  production: 'Processed synthesizer, effects, recorded to cassette',
  listenUrl: 'https://taylorzanke.bandcamp.com/track/wholes-recast-in-the-end-fragments',
  images: [ images ],
  route: '/005'
}

export default RECORDING_004
