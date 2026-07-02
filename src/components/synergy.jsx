import './Synergy.css'
import synergyBg from '../assets/synergy/synergy template.png'

const Synergy = () => {
  return (
    <section
      className="synergy-section"
      id="synergy"
      style={{ backgroundImage: `url(${synergyBg})` }}
    >
      <div className="synergy-content">
        <h2 className="synergy-heading">ready. set. synergy?</h2>
        <a
          href="#"
          className="synergy-btn"
          id="synergy-get-tickets"
        >
          Get Tickets
        </a>
      </div>
    </section>
  )
}

export default Synergy
