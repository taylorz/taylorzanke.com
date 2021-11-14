function importAll(r) { return r.keys().map(r); }
const images = importAll(require.context('../../../src/assets/work-images/recordings/002', false, /\.(png|jpe?g|svg)$/));
// console.log("images", images)

const RECORDING_002 = {
  id: 2,
  title: 'Interludes',
  dateRecorded: '2021',
  dateReleased: '2021',
  release: 'Self Released',
  description: 'A collection of rhythmic scenes is arranged in dialogue with crunching sounds recorded far away.',
  duration: '09:09',
  trackList: [
    {
      title: 'Interlude 1',
      duration: '00:16'
    },
    {
      title: 'Interlude 2',
      duration: '01:16'
    },
    {
      title: 'Interlude 3',
      duration: '02:13'
    },
    {
      title: 'Interlude 4',
      duration: '02:32'
    },
    {
      title: 'Interlude 5',
      duration: '01:05'
    },
    {
      title: 'Interlude 6',
      duration: '01:48'
    },
  ],
  format: 'Digital Release',
  production: 'Field recordings, synthesizer, digital tape echo, recorded to cassette',
  listenUrl: 'https://taylorzanke.bandcamp.com/album/interludes',
  images: [ images ],
  route: '/002'
}

export default RECORDING_002
