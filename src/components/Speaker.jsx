import './Speaker.css'

import speakerImg from '../assets/speakers/speaker.png'
import butterflyBlue from '../assets/decorations/butterfly_blue.png'
import butterflyRed from '../assets/decorations/butterfly_red.png'
import butterflyTealSm from '../assets/decorations/butterfly_teal_sm.png'
import butterflyTealLg from '../assets/decorations/butterfly_teal_lg.png'
import butterflyIndigo from '../assets/decorations/butterfly_indigo.png'

// Each speaker card: tilt angle + 2 butterfly decorations with positions & animation delays
const speakers = [
  {
    id: 1,
    tilt: -2.5,
    butterflies: [
      { src: butterflyBlue,    cls: 'top-left',     delay: 0 },
      { src: butterflyTealSm,  cls: 'bottom-left',  delay: 0.8 },
    ],
  },
  {
    id: 2,
    tilt: 2,
    butterflies: [
      { src: butterflyIndigo,  cls: 'top-right',    delay: 0.3 },
      { src: butterflyRed,     cls: 'bottom-left',  delay: 1.1 },
    ],
  },
  {
    id: 3,
    tilt: -1.5,
    butterflies: [
      { src: butterflyRed,     cls: 'top-right',    delay: 0.6 },
      { src: butterflyTealSm,  cls: 'bottom-right', delay: 1.4 },
    ],
  },
  {
    id: 4,
    tilt: 3,
    butterflies: [
      { src: butterflyTealSm,  cls: 'top-left',     delay: 0.2 },
      { src: butterflyTealLg,  cls: 'bottom-left',  delay: 0.9 },
    ],
  },
  {
    id: 5,
    tilt: -2,
    butterflies: [
      { src: butterflyRed,     cls: 'top-left',     delay: 0.5 },
      { src: butterflyIndigo,  cls: 'top-right',    delay: 1.2 },
    ],
  },
  {
    id: 6,
    tilt: 1.5,
    butterflies: [
      { src: butterflyBlue,    cls: 'top-right',    delay: 0.1 },
      { src: butterflyTealSm,  cls: 'bottom-right', delay: 0.7 },
    ],
  },
  {
    id: 7,
    tilt: -3,
    butterflies: [
      { src: butterflyTealLg,  cls: 'bottom-left',  delay: 0.4 },
      { src: butterflyIndigo,  cls: 'top-right',    delay: 1.0 },
    ],
  },
  {
    id: 8,
    tilt: 2.5,
    butterflies: [
      { src: butterflyRed,     cls: 'top-left',     delay: 0.2 },
      { src: butterflyBlue,    cls: 'bottom-right', delay: 1.3 },
    ],
  },
  {
    id: 9,
    tilt: -1,
    butterflies: [
      { src: butterflyBlue,    cls: 'top-right',    delay: 0.6 },
      { src: butterflyTealSm,  cls: 'bottom-left',  delay: 1.1 },
    ],
  },
]

const SpeakerCard = ({ speaker }) => {
  return (
    <div className="speaker-card">
      <div
        className="speaker-polaroid"
        style={{ transform: `rotate(${speaker.tilt}deg)` }}
      >
        <img src={speakerImg} alt="Ansh Mehra" className="speaker-photo" />

        {speaker.butterflies.map((bf, i) => (
          <img
            key={i}
            src={bf.src}
            alt=""
            className={`butterfly butterfly--${bf.cls}`}
            style={{ animationDelay: `${bf.delay}s` }}
          />
        ))}
      </div>

      <div className="speaker-info">
        <h3 className="speaker-name">
          Ansh Mehra
        </h3>
        <p className="speaker-title">Design Consultant</p>
        <p className="speaker-bio">
          <span>
            Lorem ipsum dolor sit amet consectetur. Hac sit varius cursus purus nec vulputate. Hac sit varius
          </span>
        </p>
      </div>
    </div>
  )
}

const Speaker = () => {
  return (
    <section className="speakers-section" id="speakers">
      <div className="speakers-header">
        <h2 className="speakers-heading">Voices That Matter</h2>
        <p className="speakers-subheading">2025 SPEAKERS</p>
      </div>
      <div className="speakers-grid">
        {speakers.map((speaker) => (
          <SpeakerCard key={speaker.id} speaker={speaker} />
        ))}
      </div>
    </section>
  )
}

export default Speaker
