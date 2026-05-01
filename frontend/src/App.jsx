// src/App.jsx
import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home'
import Footer from './components/Footer'
import Shop from './pages/Shop'
import About from './pages/About'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import CategoryPage from './pages/CategoryPage'
import './App.css'
import ScrollToTop from "./components/ScrollToTop";
import NotFound from './pages/NotFound'

function App() { 
  return ( 
    <HashRouter>
      <ScrollToTop />
      <Navbar /> 
      <main className="main-content">
        <Routes> 
          <Route path="/" element={<Home />} /> 
          <Route path="/shop" element={<Shop />} /> 
          <Route path="/category/:categoryId" element={<CategoryPage />} />
          <Route path="/about" element={<About />} /> 
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/cart" element={<Cart />} /> 
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main> 
      <Footer /> 
    </HashRouter>
  ) 
} 

export default App
