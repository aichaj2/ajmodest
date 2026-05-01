// src/pages/Shop.jsx
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Shop() {
  const navigate = useNavigate()

  // Categories with images
  const categories = [
    { 
      id: 'clothing', 
      name: 'Clothing',  
      image: `${import.meta.env.BASE_URL}img/a.jpg`,
      description: 'Modern & modest fashion',
    },
    { 
      id: 'shoes', 
      name: 'Shoes', 
      image: `${import.meta.env.BASE_URL}img/b.jpg`,
      description: 'Elegant & comfortable footwear',
    },
    { 
      id: 'accessories', 
      name: 'Accessories', 
      image: `${import.meta.env.BASE_URL}img/c.jpg`,
      description: 'Premium accessories',
    },
    { 
      id: 'bags', 
      name: 'Bags', 
      image: `${import.meta.env.BASE_URL}img/d.jpg`,
      description: 'Stylish bags for every occasion',
    },
    { 
      id: 'hijab', 
      name: 'Hijab',
      image: `${import.meta.env.BASE_URL}img/e.jpg`,
      description: 'Luxury fabrics & soft colors',
    },
    { 
      id: 'makeup', 
      name: 'Makeup',  
      image: `${import.meta.env.BASE_URL}img/f.jpg`,
      description: 'Premium beauty products',
    }
  ]

  return (
    <div className="page">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Discover Our Collections</p>
          <h2 className="section-title">Categories</h2>
          <div className="section-divider"></div>
        </div>

        <div className="categories-grid">
          {categories.map((category, index) => (
            <div 
              key={category.id} 
              className="category-card slide-up" 
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => navigate(`/category/${category.id}`)}
            >
              <div className="category-image">
                <img src={category.image} alt={category.name} />
                <div className="category-overlay">
                  <span className="category-icon">{category.icon}</span>
                  <h3 className="category-name">{category.name}</h3>
                  <p className="category-description">{category.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Shop