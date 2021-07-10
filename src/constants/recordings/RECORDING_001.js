function importAll(r) { return r.keys().map(r); }
const images = importAll(require.context('../../../src/assets/work-images/recordings/001', false, /\.(png|jpe?g|svg)$/));
// console.log("images", images)

const RECORDING_001 = {
  id: 1,
  title: 'Being With',
  dateRecorded: '2020',
  dateReleased: '2020',
  description: 'A melodic phrase dissipates and solidifies. Tender plants deform in the wind.',
  release: 'Self Released',
  duration: '06:32',
  trackList: [
    {
      title: 'Being With',
      duration: '06:32'
    }
  ],
  format: 'Digital Release',
  production: 'Synthesizer, effects, recorded to cassette.',
  listenUrl: 'https://taylorzanke.bandcamp.com/track/being-with',
  images: [ images ],
  route: '/001'
}

export default RECORDING_001
