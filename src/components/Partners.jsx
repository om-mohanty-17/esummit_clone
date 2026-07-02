import './Partners.css'
import fampayLogo from '../assets/partners/icon 1.png'
import dodLogo from '../assets/partners/icon 2.png'
import orangeAsterisk from '../assets/partners/flower.png'
import yellowFlower from '../assets/partners/yellow flower.png'
import bluePyramid from '../assets/partners/pyramid.png'
import eyeIcon from '../assets/partners/eye.png'
import yellowCircle from '../assets/partners/yellowcircle.png'

const Partners = () => {
  // We duplicate elements inside each marquee row to allow seamless infinite looping.
  // Row 1: Department of Design cards with different decorations in between
  const row1Elements = [
    { type: 'card', src: dodLogo, alt: 'Department of Design' },
    { type: 'deco', src: orangeAsterisk, alt: 'Asterisk' },
    { type: 'card', src: dodLogo, alt: 'Department of Design' },
    { type: 'deco', src: bluePyramid, alt: 'Pyramid' },
    { type: 'card', src: dodLogo, alt: 'Department of Design' },
    { type: 'deco', src: yellowCircle, alt: 'Yellow Circle' },
  ]

  // Row 2: Fampay cards with different decorations in between
  const row2Elements = [
    { type: 'card', src: fampayLogo, alt: 'Fampay' },
    { type: 'deco', src: eyeIcon, alt: 'Eye' },
    { type: 'card', src: fampayLogo, alt: 'Fampay' },
    { type: 'deco', src: orangeAsterisk, alt: 'Asterisk' },
    { type: 'card', src: fampayLogo, alt: 'Fampay' },
    { type: 'deco', src: yellowFlower, alt: 'Yellow Flower' },
  ]

  // Create infinite loops by repeating the rows
  const infiniteRow1 = [...row1Elements, ...row1Elements, ...row1Elements, ...row1Elements]
  const infiniteRow2 = [...row2Elements, ...row2Elements, ...row2Elements, ...row2Elements]

  return (
    <section className="partners-section" id="partners">
      <h2 className="partners-heading">PARTNERS</h2>
      
      <div className="partners-marquees">
        {/* Row 1: Slides Left */}
        <div className="partners-marquee-row partners-marquee-row--left">
          <div className="partners-marquee-track partners-marquee-track--left">
            {infiniteRow1.map((item, idx) => (
              <div key={`row1-${idx}`} className={`partners-item partners-item--${item.type}`}>
                <img src={item.src} alt={item.alt} className="partners-img" />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Slides Right */}
        <div className="partners-marquee-row partners-marquee-row--right">
          <div className="partners-marquee-track partners-marquee-track--right">
            {infiniteRow2.map((item, idx) => (
              <div key={`row2-${idx}`} className={`partners-item partners-item--${item.type}`}>
                <img src={item.src} alt={item.alt} className="partners-img" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Partners
