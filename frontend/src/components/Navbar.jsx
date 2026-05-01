import React, { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [cartCount, setCartCount] = useState(0)
  const location = useLocation()

  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem('cart')) || []
      const count = cart.reduce((total, item) => total + item.quantity, 0)
      setCartCount(count)
    }

    updateCartCount()

    window.addEventListener('cartUpdated', updateCartCount)

    return () => {
      window.removeEventListener('cartUpdated', updateCartCount)
    }
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-brand">A&J Modest</Link>

        {/* Desktop Navigation */}
        <div className="nav-links hidden-mobile">
          <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Home
          </NavLink>
          <NavLink to="/shop" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Shop
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            About
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Contact
          </NavLink>
          <Link to="/cart" className="nav-link cart-button">
            🛒
            <span className="cart-count" style={{ display: cartCount > 0 ? 'flex' : 'none' }}>
              {cartCount}
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMobileMenu} className="mobile-menu-btn">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${!isMobileMenuOpen ? 'hidden' : ''}`}>
        <NavLink to="/" onClick={closeMobileMenu} className={({ isActive }) => isActive ? "mobile-link active" : "mobile-link"}>
          Home
        </NavLink>
        <NavLink to="/shop" onClick={closeMobileMenu} className={({ isActive }) => isActive ? "mobile-link active" : "mobile-link"}>
          Shop
        </NavLink>
        <NavLink to="/about" onClick={closeMobileMenu} className={({ isActive }) => isActive ? "mobile-link active" : "mobile-link"}>
          About
        </NavLink>
        <NavLink to="/contact" onClick={closeMobileMenu} className={({ isActive }) => isActive ? "mobile-link active" : "mobile-link"}>
          Contact
        </NavLink>
        <Link to="/cart" onClick={closeMobileMenu} className="mobile-link">
          🛒 Cart {cartCount > 0 && `(${cartCount})`}
        </Link>
      </div>
    </nav>
  )
}

export default Navbar