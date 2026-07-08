import './Gallery.css'
import galleryImg from '../assets/gallery/gallery_1.png'

// Alternating tilts for natural polaroid feel
const tilts = [-3, 2, -5, 1.5, -2.5, 4, -1.5, 3, -4, 2]

// Build base set then duplicate for seamless infinite loop
const basePhotos = tilts.map((tilt, i) => ({ id: i, tilt }))
const allPhotos = [...basePhotos, ...basePhotos]

const Gallery = () => {
  return (
    // Background frame (torn edges + orange + leaf texture) applied via CSS
    <section className="gallery-section" id="process">
      <div className="gallery-content">

        {/* Section heading */}
        <div className="gallery-header">
          <h2 className="gallery-heading">Pixels of Memory</h2>
          <p className="gallery-subheading">Hi-Res'24</p>
        </div>

        {/* Infinite auto-scroll marquee */}
        <div className="gallery-marquee-wrapper">
          <div className="gallery-marquee-track">
            {allPhotos.map((photo, i) => (
              <div
                key={i}
                className="gallery-card"
                style={{ transform: `rotate(${photo.tilt}deg)` }}
              >
                <img
                  src={galleryImg}
                  alt={`Memory ${(photo.id % tilts.length) + 1}`}
                  className="gallery-photo"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Gallery
