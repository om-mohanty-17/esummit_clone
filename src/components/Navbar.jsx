import { useState } from 'react'
import './Navbar.css'
import logoImg from "../assets/navbar/E-Summit'25 Logo (1).png"

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Hi-Res', href: '#hi-res' },
  { name: 'Benefits', href: '#benefits' },
  { name: 'Process', href: '#process' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'FAQs', href: '#faqs' },
  { name: 'Contact Us', href: '#contact' }
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="navbar">
      {/* Left: Logo */}
      <div className="navbar-logo-container">
        <a href="/">
          <img src={logoImg} alt="E-Summit '25 Logo" className="navbar-logo" />
        </a>
      </div>

      {/* Center: Desktop links */}
      <div className="navbar-menu-capsule">
        {navLinks.map((link) => (
          <a key={link.name} href={link.href} className="navbar-link">
            {link.name}
          </a>
        ))}
      </div>

      {/* Right: CTA & Hamburger Toggle */}
      <div className="navbar-actions">
        <a href="#login" className="navbar-cta-btn">
          Login/Signup
        </a>
        <button
          className="navbar-hamburger"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M18 6L6 18" />
              <path d="M6 6l12 12" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M4 6h16" />
              <path d="M8 12h12" />
              <path d="M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="navbar-mobile-drawer">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="navbar-mobile-link"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#login"
            onClick={() => setIsOpen(false)}
            className="navbar-mobile-cta-btn"
          >
            Login/Signup
          </a>
        </div>
      )}
    </nav>
  )
}

export default Navbar
