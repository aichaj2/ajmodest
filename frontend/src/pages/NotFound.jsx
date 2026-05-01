import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="page">
      <div className="container-small" style={{ textAlign: 'center' }}>
        <h2 className="section-title">404</h2>
        <p className="about-paragraph">Oops! This page does not exist.</p>
        <Link to="/" className="btn-primary">Go Home</Link>
      </div>
    </div>
  )
}

export default NotFound