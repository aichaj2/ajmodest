import React from 'react'

function About() {
  return (
    // أهم شيء: أضف className="page"
    <div className="page"> 
      <div className="container-small">
        <div className="section-header">
          <p className="section-label">Who We Are</p>
          <h2 className="section-title">Our Story</h2>
          <div className="section-divider"></div>
        </div>
        <div className="about-grid">
          <div className="about-image">
            <img src={`${import.meta.env.BASE_URL}img/logo.jpeg`} alt="About A&J Modest" className="about-img"/>
          </div>
          <div className="about-text">
            <p className="about-paragraph">
              A&J Modest was created to celebrate femininity and elegance through simple designs
            </p>
            <p className="about-paragraph">
              All our pieces are designed with soft colors and clean cuts for women who appreciate modest elegance
            </p>
            <p className="about-paragraph">
              We pay attention to every detail to ensure you look elegant on every occasion
            </p>
            <div className="feature-box">
              <div className="feature-icon">✨</div>
              <div className="feature-content">
                <p className="feature-title">Premium Quality</p>
                <p className="feature-subtitle">Carefully selected fabrics & craftsmanship</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About