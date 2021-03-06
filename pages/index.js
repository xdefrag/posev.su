import Main from '../layouts/Main'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SCTrack from '../components/SCTrack'
import MailChimp from '../components/MailChimp'
import Background from '../components/Background.js'

const releases = [
  {
    catalogID: "PSVC1",
    artist: "VA",
    title: "POSEV I",
    year: "2016",
    bandcamp: "https://posev.bandcamp.com/album/i",
  },
  {
    catalogID: "PSV1",
    artist: "Dragstor",
    title: "Black Art",
    year: "2016",
    bandcamp: "https://posev.bandcamp.com/album/black-art",
  },
  {
    catalogID: "PSV2",
    artist: "Otres",
    title: "Ergot Poisoning",
    year: "2016",
    bandcamp: "https://posev.bandcamp.com/album/ergot-poisoning",
  },
  {
    catalogID: "PSV3",
    artist: "Wzvahr",
    title: "Methods of Disguise",
    year: "2016",
    bandcamp: "https://posev.bandcamp.com/album/methods-of-disguise",
  },
  {
    catalogID: "PSV4",
    artist: "Dragstor",
    title: "I: Dark Promise",
    year: "2016",
    bandcamp: "https://posev.bandcamp.com/album/i-dark-promise",
  },
  {
    catalogID: "PSV5",
    artist: "Cum Prison",
    title: "Untitled",
    year: "2016",
    bandcamp: "https://posev.bandcamp.com/album/untitled",
  },
  {
    catalogID: "PSV6",
    artist: "Prizraki Katakomb",
    title: "Prizraki Katakomb",
    year: "2016",
    bandcamp: "https://posev.bandcamp.com/album/self-titled-2",
  },
  {
    catalogID: "PSV7",
    artist: "Suspiria",
    title: "Suspiria",
    year: "2016",
    bandcamp: "https://posev.bandcamp.com/album/self-titled",
  },
  {
    catalogID: "PSVC2",
    artist: "VA",
    title: "POSEV II",
    year: "2017",
    bandcamp: "https://posev.bandcamp.com/album/posev-ii",
  },
  {
    catalogID: "PSV8",
    artist: "Solar Kite",
    title: "Remote Past",
    year: "2017",
    bandcamp: "https://posev.bandcamp.com/album/remote-past",
  },
  {
    catalogID: "PSV9",
    artist: "Oneiroids",
    title: "Square Ticket 2 Sun",
    year: "2017",
    bandcamp: "https://posev.bandcamp.com/album/square-ticket-2-sun",
  },
  {
    catalogID: "PSV10",
    artist: "Grey Infantry / Dragstor",
    title: "Split",
    year: "2017",
    bandcamp: "https://posev.bandcamp.com/album/grey-infantry-dragstor",
  },
  {
    catalogID: "PSV11",
    artist: "Fetch",
    title: "Iron Trees & Careless Gods",
    year: "2019",
    bandcamp: "https://posev.bandcamp.com/album/iron-trees-careless-gods",
  },
  {
    catalogID: "PSVC3",
    artist: "VA",
    title: "POSEV III",
    year: "2020",
    bandcamp: "http://posev.bandcamp.com/album/posev-3",
  },
]

const releasesTBD = []

export default () => (
  <div>
  <Background />
  <Main>
  <Header />

  <iframe className="bc" src="https://bandcamp.com/EmbeddedPlayer/album=2760474398/size=large/bgcol=333333/linkcol=9a64ff/minimal=true/transparent=true/" seamless><a href="http://posev.bandcamp.com/album/posev-3">POSEV 3 by POSEV</a></iframe>

  <div className="released">
  {releases.reverse().map((r, i) => (
    <p key={i.toString()}><a href={r.bandcamp} target="_blank">{r.catalogID} | {r.artist} - {r.title} ({r.year})</a></p>
  ))}
  </div>

  <div className="tbd">
  SOON:
  {releasesTBD.map((r, i) => (
    <p key={i.toString()}>{r.artist} - {r.title} ({r.year})</p>
  ))}
  </div>
  
  <MailChimp />

  <style jsx>{`
    .released, .track, .tbd, .video {
      margin-bottom: 2em;
    }

    .bc {
      border: 0;
      width: 500px;
      height: 500px;
    }
    `}
  </style>

  <Footer />
  </Main>
  </div>
)
