import './Hero.css'
import logoImg from '../assets/hero/Frame 1597884674.png'
import decorationLeft from '../assets/hero/decoration_left.png'
import decorationRight from '../assets/hero/decoration_right.png'
import butterflyLeft from '../assets/hero/butterfly_left.png'
import butterflyRight from '../assets/hero/butterfly_right.png'

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      {/* Perspective Grid Lines Background (Clean SVG) */}
      <div className="hero-grid-container" aria-hidden="true">
        <svg 
          className="hero-grid-svg" 
          viewBox="0 0 1440 600" 
          fill="none" 
          preserveAspectRatio="none"
        >
          {/* Horizontal lines with progressive vertical spacing */}
          <path d="M0 100 H1440" stroke="rgba(0,0,0,0.03)" strokeWidth="1" />
          <path d="M0 135 H1440" stroke="rgba(0,0,0,0.03)" strokeWidth="1" />
          <path d="M0 180 H1440" stroke="rgba(0,0,0,0.03)" strokeWidth="1" />
          <path d="M0 235 H1440" stroke="rgba(0,0,0,0.035)" strokeWidth="1" />
          <path d="M0 300 H1440" stroke="rgba(0,0,0,0.035)" strokeWidth="1" />
          <path d="M0 375 H1440" stroke="rgba(0,0,0,0.04)" strokeWidth="1.2" />
          <path d="M0 460 H1440" stroke="rgba(0,0,0,0.04)" strokeWidth="1.2" />
          <path d="M0 555 H1440" stroke="rgba(0,0,0,0.045)" strokeWidth="1.5" />
          
          {/* Radiating perspective lines originating from vanishing point at (720, 40) */}
          <path d="M720 40 L-300 600" stroke="rgba(0,0,0,0.035)" strokeWidth="1" />
          <path d="M720 40 L-100 600" stroke="rgba(0,0,0,0.035)" strokeWidth="1" />
          <path d="M720 40 L100 600" stroke="rgba(0,0,0,0.035)" strokeWidth="1" />
          <path d="M720 40 L300 600" stroke="rgba(0,0,0,0.035)" strokeWidth="1" />
          <path d="M720 40 L500 600" stroke="rgba(0,0,0,0.035)" strokeWidth="1" />
          <path d="M720 40 L650 600" stroke="rgba(0,0,0,0.035)" strokeWidth="1" />
          <path d="M720 40 L720 600" stroke="rgba(0,0,0,0.04)" strokeWidth="1" />
          <path d="M720 40 L790 600" stroke="rgba(0,0,0,0.035)" strokeWidth="1" />
          <path d="M720 40 L940 600" stroke="rgba(0,0,0,0.035)" strokeWidth="1" />
          <path d="M720 40 L1140 600" stroke="rgba(0,0,0,0.035)" strokeWidth="1" />
          <path d="M720 40 L1340 600" stroke="rgba(0,0,0,0.035)" strokeWidth="1" />
          <path d="M720 40 L1540 600" stroke="rgba(0,0,0,0.035)" strokeWidth="1" />
          <path d="M720 40 L1740 600" stroke="rgba(0,0,0,0.035)" strokeWidth="1" />
        </svg>
      </div>

      {/* Collage Collateral (Side Decorations positioned absolutely at extremes) */}
      <img 
        src={decorationLeft} 
        alt="Creative flower collage on the left side" 
        className="hero-decoration hero-decoration--left" 
        loading="eager"
      />
      <img 
        src={decorationRight} 
        alt="Artistic purple hand and butterflies on the right side" 
        className="hero-decoration hero-decoration--right" 
        loading="eager"
      />

      {/* Main Content Area */}
      <div className="hero-content">
        <div className="hero-logo-container">
          <img 
            src={logoImg} 
            alt="Hi-Res Annual Design Convergence (31 Jan - 2 Feb)" 
            className="hero-logo-img" 
            loading="eager"
          />
        </div>

        <p className="hero-description">
          Join to ignite the spark of new beginnings, bringing visions to life through collective brilliance and shaping the future of design.
        </p>

        {/* Action Button Container */}
        <div className="hero-btn-container">
          <img 
            src={butterflyLeft} 
            alt="" 
            className="hero-butterfly-btn hero-butterfly-btn--left" 
            aria-hidden="true" 
          />
          <a 
            href="#register" 
            className="hero-btn" 
            id="hero-register-btn"
          >
            Register Now
          </a>
          <img 
            src={butterflyRight} 
            alt="" 
            className="hero-butterfly-btn hero-butterfly-btn--right" 
            aria-hidden="true" 
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
