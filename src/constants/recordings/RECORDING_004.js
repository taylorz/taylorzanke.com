function importAll(r) { return r.keys().map(r); }
const images = importAll(require.context('../../../src/assets/work-images/recordings/004', false, /\.(png|jpe?g|svg)$/));
// console.log("images", images)

const RECORDING_004 = {
  id: 4,
  title: "A Loose, Yet Guided Structure",
  dateRecorded: '2021',
  dateReleased: '2021',
  release: 'Self Released',
  description: '',
  duration: '34:55',
  trackList: [
    {
      title: 'Feeling of Making The',
      duration: '4:58'
    },
    {
      title: 'A Site for the Self',
      duration: '9:41'
    },
    {
      title: 'Surfaces',
      duration: '20:16'
    },
  ],
  format: 'Digital Release',
  production: 'Pitch adjusted tape, synthesizer, processed guitar, effects, recorded to cassette',
  listenUrl: 'https://taylorzanke.bandcamp.com/album/a-loose-yet-guided-structure',
  images: [ images ],
  route: '/004'
}

export default RECORDING_004
