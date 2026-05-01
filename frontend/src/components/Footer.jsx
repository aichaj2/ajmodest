import React from 'react'
import { useNavigate } from 'react-router-dom'

function Footer() {
  const navigate = useNavigate()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div>
            <h3 className="footer-brand">A&J Modest</h3>
            <p className="footer-text">Modest fashion for elegant women</p>
          </div>
          <div>
            <h4 className="footer-title">Quick Links</h4>
            <div className="footer-links">
              <button onClick={() => navigate('/shop')} className="footer-link">Shop</button>
              <button onClick={() => navigate('/about')} className="footer-link">About Us</button>
              <button onClick={() => navigate('/contact')} className="footer-link">Contact</button>
            </div>
          </div>
          <div>
            <h4 className="footer-title">Follow Us</h4>
            <a
              href="https://instagram.com/a_j_modest"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-text"
            >
              Instagram: @a_j_modest
            </a>
            <a
              href="https://wa.me/212638063994"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-text"
            >
              WhatsApp: 0638063994
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copyright">© 2026 A&J Modest. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer