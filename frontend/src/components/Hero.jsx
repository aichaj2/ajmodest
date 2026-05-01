import React from 'react'
import { useNavigate } from 'react-router-dom'

function Hero() {
  const navigate = useNavigate()

  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-text-group">
            <p className="hero-label slide-up">Modest Fashion</p>
            <h1 className="hero-title slide-up delay-1">A&J Modest</h1>
            <p className="hero-subtitle slide-up delay-2">
              Timeless Pieces for Elegant Women
            </p>
          </div>
          <p className="hero-description slide-up delay-3">
            Discover our soft and minimalist designs created for modern modest women
          </p>
          <button 
            onClick={() => navigate('/shop')}
            className="btn-primary slide-up delay-4"
          >
            🛍️ Shop Now
          </button>
        </div>
        <div className="hero-image slide-up delay-5">
          <img src={`${import.meta.env.BASE_URL}img/logo.jpeg`} alt="A&J Modest" className="hero-img" />
        </div>
      </div>
    </section>
  )
}

export default Hero