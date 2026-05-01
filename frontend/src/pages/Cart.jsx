import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Cart() {
  const navigate = useNavigate()
  const [cartItems, setCartItems] = useState([])
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    city: '',
    address: ''
  })

  useEffect(() => {
    const savedCart = localStorage.getItem('cart')
    if (savedCart) {
      setCartItems(JSON.parse(savedCart))
    }
  }, [])

  const updateQuantity = (id, size, change) => {
    const updated = cartItems.map(item => {
      if (item.id === id && item.size === size) {
        const newQuantity = item.quantity + change
        if (newQuantity <= 0) return null
        return { ...item, quantity: newQuantity }
      }
      return item
    }).filter(Boolean)
    
    setCartItems(updated)
    localStorage.setItem('cart', JSON.stringify(updated))
    window.dispatchEvent(new Event('cartUpdated'))
  }

  const removeItem = (id, size) => {
    const updated = cartItems.filter(item => !(item.id === id && item.size === size))
    setCartItems(updated)
    localStorage.setItem('cart', JSON.stringify(updated))
    window.dispatchEvent(new Event('cartUpdated'))
  }

  const handleInputChange = (e) => {
    setCustomerInfo({
      ...customerInfo,
      [e.target.name]: e.target.value
    })
  }

  const calculateSubtotal = () => {
    return cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  }

  const calculateShipping = () => {
    const city = customerInfo.city.toLowerCase()
    if (!city) return { cost: 0, message: 'Enter your city' }
    if (['casablanca', 'casa', 'mohammedia'].some(c => city.includes(c))) {
      return { cost: 0, message: 'Free Shipping' }
    }
    if (['rabat', 'fes', 'marrakech', 'tangier', 'agadir'].some(c => city.includes(c))) {
      return { cost: 25, message: 'Shipping: 25 MAD' }
    }
    return { cost: 35, message: 'Shipping: 35 MAD' }
  }

  const checkout = () => {
    if (cartItems.length === 0) {
      alert('Your cart is empty')
      return
    }
    
    if (!customerInfo.name || !customerInfo.phone || !customerInfo.city || !customerInfo.address) {
      alert('Please fill in all your information')
      return
    }

    const subtotal = calculateSubtotal()
    const shipping = calculateShipping()
    const total = subtotal + shipping.cost

    let message = "🛍️ *NEW ORDER - A&J Modest*\n━━━━━━━━━━━━━━━━━━━━━━\n\n"
    message += "👤 *CUSTOMER DETAILS*\n"
    message += `📝 Name: ${customerInfo.name}\n`
    message += `📱 Phone: ${customerInfo.phone}\n`
    message += `📍 City: ${customerInfo.city}\n`
    message += `🏠 Address: ${customerInfo.address}\n\n`
    message += "🛒 *ORDER DETAILS*\n━━━━━━━━━━━━━━━━\n"
    
    cartItems.forEach((item, index) => {
      message += `${index + 1}. ${item.name}\n`
      message += `   📏 Size: ${item.size} | 🔢 Qty: ${item.quantity}\n`
      message += `   💰 ${item.price} MAD × ${item.quantity} = ${item.price * item.quantity} MAD\n\n`
    })
    
    message += "━━━━━━━━━━━━━━━━\n"
    message += `📦 Subtotal: ${subtotal} MAD\n`
    message += `🚚 Shipping: ${shipping.cost === 0 ? 'FREE' : shipping.cost + ' MAD'}\n`
    message += `💳 TOTAL: ${total} MAD\n`
    message += "━━━━━━━━━━━━━━━━\n"
    message += "Thank you for shopping with A&J Modest! ✨"
    
    window.open(`https://wa.me/212638063994?text=${encodeURIComponent(message)}`, '_blank')
    
    // Clear cart
    setCartItems([])
    localStorage.setItem('cart', JSON.stringify([]))
    window.dispatchEvent(new Event('cartUpdated'))
  }

  const subtotal = calculateSubtotal()
  const shipping = calculateShipping()
  const total = subtotal + shipping.cost

  if (cartItems.length === 0) {
    return (
      <div className="page">
        <div className="container">
          <div className="empty-cart">
            <div className="empty-cart-icon">🛒</div>
            <h3>Your cart is empty</h3>
            <p>Add some beautiful pieces to your cart</p>
            <button onClick={() => navigate('/shop')} className="btn-primary">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="page">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Shopping Cart</p>
          <h2 className="section-title">Your Order</h2>
          <div className="section-divider"></div>
        </div>
      
        <div className="cart-layout">
          <div className="cart-items">
            {cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h4 className="cart-item-name">{item.name}</h4>
                  <p className="cart-item-price">{item.price} MAD</p>
                  <p className="cart-item-size">
                    {item.size === 'One Size' ? 'One Size' : `Size: ${item.size}`}
                  </p>
                  <div className="cart-item-quantity">
                    <button onClick={() => updateQuantity(item.id, item.size, -1)} className="quantity-btn">−</button>
                    <span className="quantity-number">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.size, 1)} className="quantity-btn">+</button>
                    <button onClick={() => removeItem(item.id, item.size)} className="remove-btn">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        
          <div className="cart-summary">
            <h3 className="summary-title">Order Summary</h3>
          
            <div className="customer-info-form">
              <h4 className="form-subtitle">📋 Your Information</h4>
              <div className="form-group">
                <label className="form-label">Full Name *</label>
                <input type="text" name="name" className="form-input" placeholder="Enter your full name" onChange={handleInputChange} required />
              </div>
              <div className="form-group">
                <label className="form-label">Phone Number *</label>
                <input type="tel" name="phone" className="form-input" placeholder="06xxxxxxxx" onChange={handleInputChange} required />
              </div>
              <div className="form-group">
                <label className="form-label">City *</label>
                <input type="text" name="city" className="form-input" placeholder="Enter your city" onChange={handleInputChange} required />
              </div>
              <div className="form-group">
                <label className="form-label">Full Address *</label>
                <textarea name="address" className="form-input" rows="2" placeholder="Street, building, apartment number..." onChange={handleInputChange} required></textarea>
              </div>
            </div>
          
            <div className="summary-row">
              <span>Subtotal</span>
              <span>{subtotal} MAD</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span>{shipping.cost === 0 ? 'Free' : shipping.cost + ' MAD'}</span>
            </div>
            <div className="summary-row total-row">
              <span>Total</span>
              <span>{total} MAD</span>
            </div>
          
            <button onClick={checkout} className="btn-primary full-width">
              ✅ Confirm Order
            </button>
            <button onClick={() => navigate('/shop')} className="btn-secondary full-width">
              ← Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart