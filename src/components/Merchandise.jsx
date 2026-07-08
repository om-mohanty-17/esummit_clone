import './Merchandise.css'
import figureLeft from '../assets/merchandise/figure_left.png'
import figureRight from '../assets/merchandise/figure_right.png'
import merchBundle from '../assets/merchandise/merch_bundle.png'
import butterflyLeft from '../assets/merchandise/butterfly_left.png'
import butterflyRight from '../assets/merchandise/butterfly_right.png'

const Merchandise = () => {
  return (
    <section className="merchandise-section" id="merchandise">
      {/* Decorative Left and Right Figures */}
      <img 
        src={figureLeft} 
        alt="Stylised blue and yellow character carrying a bag" 
        className="merchandise-figure merchandise-figure--left" 
        loading="lazy"
      />
      <img 
        src={figureRight} 
        alt="Stylised purple and pink character with headphones" 
        className="merchandise-figure merchandise-figure--right" 
        loading="lazy"
      />

      {/* Main Content Area */}
      <div className="merchandise-content">
        <h2 className="merchandise-heading">MERCHANDISE</h2>
        <p className="merchandise-subheading">exciting t-shirts, totebags, mugs and more</p>
        
        <div className="merchandise-bundle-container">
          <img 
            src={merchBundle} 
            alt="Collection of E-Summit Merchandise including hoodies, mugs, bags, and stationery" 
            className="merchandise-bundle-img" 
            loading="lazy"
          />
        </div>

        <div className="merchandise-btn-container">
          <img 
            src={butterflyLeft} 
            alt="" 
            className="merchandise-butterfly-btn merchandise-butterfly-btn--left" 
            aria-hidden="true" 
            loading="lazy"
          />
          <a 
            href="#buy" 
            className="merchandise-btn" 
            id="merchandise-buy-btn"
          >
            BUY MERCH
          </a>
          <img 
            src={butterflyRight} 
            alt="" 
            className="merchandise-butterfly-btn merchandise-butterfly-btn--right" 
            aria-hidden="true" 
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}

export default Merchandise
