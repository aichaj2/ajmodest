// src/pages/CategoryPage.jsx

import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'


function CategoryPage() {

  const { categoryId } = useParams()
  const navigate = useNavigate()

  const [cart, setCart] = useState([])
  const [selectedSize, setSelectedSize] = useState({})
  const [categoryProducts, setCategoryProducts] = useState([])
  const [categoryInfo, setCategoryInfo] = useState({})
  const [currentImage, setCurrentImage] = useState({})
  const [products, setProducts] = useState([])

  const categories = {
    'clothing': { name: 'Clothing', arabicName: 'Clothing' },
    'shoes': { name: 'Shoes', arabicName: 'Shoes' },
    'accessories': { name: 'Accessories', arabicName: 'Accessories' },
    'bags': { name: 'Bags', arabicName: 'Bags' },
    'hijab': { name: 'Hijab', arabicName: 'Hijab' },
    'caps': { name: 'Hijab Caps', arabicName: 'Hijab Caps' },
    'makeup': { name: 'Makeup', arabicName: 'Makeup' }
  }

  // Categories that DON'T need size selection
  const categoriesWithoutSize = ['accessories', 'makeup', 'caps', 'bags', 'hijab']

  // Hijab colors
  const hijabColors = [
    { code: '#d4c4b5', name: 'Beige' },
    { code: '#fda4af', name: 'Rose' },
    { code: '#a8b5a0', name: 'Olive' },
    { code: '#e8d5c4', name: 'Cream' },
    { code: '#c9b6a6', name: 'Mocha' },
    { code: '#e8c4c4', name: 'Blush Pink' },
    { code: '#292524', name: 'Black' },
    { code: '#ffffff', name: 'White' },
    { code: '#78716b', name: 'Grey' },
    { code: '#d4a5a5', name: 'Dusty Rose' }
  ]

  const nextImage = (id, colors) => {
    setCurrentImage(prev => ({
      ...prev,
      [id]: prev[id] === colors.length - 1
        ? 0
        : (prev[id] || 0) + 1
    }))
  }

  const prevImage = (id, images) => {
    setCurrentImage(prev => ({
      ...prev,
      [id]: prev[id] === 0
        ? images.length - 1
        : (prev[id] || 0) - 1
    }))
  }

  useEffect(() => {
    const savedCart = localStorage.getItem('cart')
    if (savedCart) {
      setCart(JSON.parse(savedCart))
    }
  }, [])

useEffect(() => {
  if (!categoryId) return

  console.log("URL categoryId:", categoryId)

  fetch("https://ajmodest-production.up.railway.app/products")
    .then(res => res.json())
    .then(data => {

      console.log("ALL DATA:", data)

      data.forEach(p => {
        console.log("COMPARE =>", p.category, "==", categoryId)
      })

      const filtered = data.filter(p =>
        p.category &&
        categoryId &&
        p.category.toLowerCase().trim() === categoryId.toLowerCase().trim()
      )

      console.log("FILTERED:", filtered)

      setCategoryProducts(filtered)
    })
    .catch(err => console.log("ERROR:", err))

}, [categoryId])

  useEffect(() => {
    if (!categoryId) return
    setCategoryInfo(categories[categoryId] || {})
  }, [categoryId])

  const addToCart = (product) => {
    let size = selectedSize[product.id + '-size']
    let color = product.colors?.[currentImage[product.id] || 0]?.name

    if (categoriesWithoutSize.includes(product.category)) {
      size = 'One Size'
    } else if (product.category === 'hijab') {
      size = size || 'Beige'
    } else if (product.category === 'shoes') {
      size = size || '39'
    } else {
      size = size || 'M'
      color = color || product.colors?.[0]?.name
    }

    const existingItem = cart.find(
      item => item.id === product.id && item.size === size
    )

    let newCart

    if (existingItem) {
      newCart = cart.map(item =>
        item.id === product.id && item.size === size
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    } else {
      newCart = [...cart,{ 
        ...product,
        size,
        color,
        image: product.colors?.[currentImage[product.id] ?? 0]?.image,
        quantity: 1 
      }]
    }

    setCart(newCart)
    localStorage.setItem('cart', JSON.stringify(newCart))
    window.dispatchEvent(new Event('cartUpdated'))
    showNotification('✓ Added to cart!')
  }

  const showNotification = (message) => {
    const notification = document.createElement('div')
    notification.className = 'notification'
    notification.textContent = message

    document.body.appendChild(notification)

    setTimeout(() => notification.classList.add('show'), 100)

    setTimeout(() => {
      notification.classList.remove('show')
      setTimeout(() => notification.remove(), 300)
    }, 2000)
  }

  const renderSizeSelector = (product) => {

    // Accessories: show images instead of size
if (['accessories', 'hijab', 'bags', 'makeup'].includes(product.category)) {
  return (
    <div className="thumbnails">
      {product.colors.map((img, index) => (
        <img
          key={index}
          src={img.image}
          alt=""
          className={`thumb ${
            (currentImage[product.id] || 0) === index ? 'active' : ''
          }`}
          onClick={() =>
            setCurrentImage({
              ...currentImage,
              [product.id]: index
            })
          }
        />
      ))}
    </div>
  )
}

// Categories WITHOUT size (others)
if (categoriesWithoutSize.includes(product.category)) {
  return null
}


    if (product.category === 'shoes') {
      return (
        <>
          {product.colors && (
            <div className="color-selector">
              <label className="color-label">Color:</label>

              <div className="color-options">
                {product.colors.map((color, index) => (
                  <button
                    key={color.name}
                    type="button"
                    className={`color-option ${
                      (currentImage[product.id] || 0) === index
                        ? 'active'
                        : ''
                    }`}
                    style={{ backgroundColor: color.code }}
                    onClick={() =>
                      setCurrentImage({
                        ...currentImage,
                        [product.id]: index
                      })
                    }
                  />
                ))}
              </div>
            </div>
          )}

          <select
            id={`size-${product.id}`}
            onChange={(e) =>
              setSelectedSize({
                ...selectedSize,
                [product.id + '-size']: e.target.value
              })
            }
            className="size-select"
            defaultValue="39"
          >
            <option value="38">38</option>
            <option value="39">39</option>
            <option value="40">40</option>
            <option value="41">41</option>
          </select>
        </>
      )
    }

    if (product.colors) {
      return (
        <>
          <div className="color-selector"> 
            <label className="color-label">Color:</label> 
            <div className="color-options"> 
              {product.colors.map((color, index) => ( 
                <button 
                  key={color.name} 
                  type="button" 
                  className={`color-option ${
                    (currentImage[product.id] || 0) === index ? 'active' : ''
                  }`} 
                  style={{ backgroundColor: color.code }} 
                  onClick={() => 
                    setCurrentImage({ 
                      ...currentImage, 
                      [product.id]: index 
                    }) 
                  }
                /> 
              ))} 
            </div> 
          </div> 
          {/* SIZE */} 
          <select 
            onChange={(e) => 
              setSelectedSize({ 
                ...selectedSize, 
                [product.id + '-size']: e.target.value 
              })
            } 
            className="size-select" 
            defaultValue="M" 
          > 
            <option value="S">S</option> 
            <option value="M">M</option> 
            <option value="L">L</option> 
            <option value="XL">XL</option> 
          </select>
        </>
      )
    }
  }

  return (
    <div className="page">
      <div className="container">

        <button
          onClick={() => navigate('/shop')}
          className="back-to-shop"
        >
          ← Back to Shop
        </button>
        <div className="section-header"> 
          <p className="section-label">{categoryInfo.icon} {categoryInfo.name}</p> 
          <h2 className="section-title">{categoryInfo.arabicName}</h2> 
          <div className="section-divider"></div> 
        </div>

        <div className="products-grid"> 
          {categoryProducts.length === 0 ? (
            <div className="no-products"> 
              <p>😊 No products in this category yet</p> 
              <button onClick={() => navigate('/shop')} className="btn-primary"> 
                Back to Shop 
              </button> 
            </div> 
          ) : ( 
            categoryProducts.map((product, index) => (
              <div key={product.id} className="product-card slide-up" style={{ animationDelay: `${index * 0.1}s` }}>

              <div className="product-image">
                <img
                  src={product.colors?.[currentImage[product.id] || 0]?.image}
                  alt={product.name}
                />

                <button
                  className="arrow right"
                  onClick={() => nextImage(product.id, product.colors)}
                >
                  →
                </button>

                <span className="product-price">{product.price} MAD</span>
              </div>

              <div className="product-info">
  <h3 className="product-name">{product.name}</h3>

  {/* Accessories → show images here */}
  {renderSizeSelector(product)}

  {/* Other categories → show specs */}
  {product.category !== 'accessories' && product.fabric && (
    <div className="product-specs">
      <p className="product-spec">• {product.fabric}</p>
    </div>
  )}

  <div className="product-actions">
   

    <button 
      onClick={() => addToCart(product)} 
      className="btn-primary full-width"
    >
      🛒 Add to Cart
    </button>
  </div>
</div>

              </div>
            ))
          )}  
        </div>
      </div>
    </div>
  )
}

export default CategoryPage