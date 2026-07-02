import './Footer.css'
import logoESummit from '../assets/footer/logo_esummit.png'
import logoECell from '../assets/footer/logo_ecell.png'

const exploreLinks = [
  { id: 1, label: 'Home', href: '#' },
  { id: 2, label: 'Benefits', href: '#' },
  { id: 3, label: 'How it works?', href: '#' },
  { id: 4, label: 'Testimonials', href: '#' },
  { id: 5, label: 'FAQs', href: '#faqs' },
]

const socialIcons = [
  {
    id: 'facebook',
    href: '#',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    id: 'twitter-x',
    href: '#',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    id: 'instagram',
    href: '#',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    id: 'linkedin',
    href: '#',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    id: 'youtube',
    href: '#',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58a2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#1a1f2e" />
      </svg>
    ),
  },
]

const Footer = () => {
  return (
    <footer className="footer-outer" id="footer">
      <div className="footer-card">
        {/* ── Top: Logos + Nav ─────────────────────── */}
        <div className="footer-top">
          {/* Left column */}
          <div className="footer-left">
            {/* Logos */}
            <div className="footer-logos">
              <img src={logoESummit} alt="E-Summit" className="footer-logo" />
              <span className="footer-logo-divider" />
              <img src={logoECell} alt="E-Cell IIT Roorkee" className="footer-logo footer-logo--ecell" />
            </div>

            {/* Tagline */}
            <p className="footer-tagline">
              E-Summit IIT Roorkee is North India's largest entrepreneurial fest,
              organized by the Entrepreneurship Cell to inspire and empower future leaders.
            </p>

            {/* Address */}
            <div className="footer-address">
              <p className="footer-address-label">ADDRESS</p>
              <p className="footer-address-text">E-Cell Office, SAC Building</p>
              <p className="footer-address-text">IIT Roorkee</p>
              <p className="footer-address-text">Roorkee, Uttarakhand – 247667</p>
            </div>
          </div>

          {/* Right column */}
          <div className="footer-right">
            {/* Explore links */}
            <div className="footer-nav">
              <p className="footer-nav-heading">EXPLORE</p>
              <ul className="footer-nav-list">
                {exploreLinks.map((link) => (
                  <li key={link.id}>
                    <a href={link.href} className="footer-nav-link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contacts */}
            <div className="footer-contacts">
              <p className="footer-nav-heading">CONTACTS</p>
              <a href="mailto:esummit@iitr.ac.in" className="footer-contact-item">
                esummit@iitr.ac.in
              </a>
              <a href="tel:+916387630920" className="footer-contact-item">
                +916387630920
              </a>
            </div>
          </div>
        </div>

        {/* ── Social Icons ─────────────────────────── */}
        <div className="footer-socials">
          {socialIcons.map((icon) => (
            <a
              key={icon.id}
              href={icon.href}
              className="footer-social-btn"
              aria-label={icon.id}
              id={`footer-social-${icon.id}`}
            >
              {icon.svg}
            </a>
          ))}
        </div>
      </div>

      {/* ── Bottom bar ───────────────────────────── */}
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          Made with <span className="footer-heart">♥</span> by Design &amp; Tech Team
        </p>
        <p className="footer-bottom-right">
          © 2024 E-Summit IIT Roorkee. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
