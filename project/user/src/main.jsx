import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './assets/style.css';
import Navbar from './navbar';
import Homepage from './homepage';
import About from './about';
import Contact from './contact';
import Products from './Products';
import Pagenotfound from './pagenotfound';
import ProductDetails from './ProductDetails';
import Cart from './Cart';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './footer';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/Cart" element={<Cart/>} />
        <Route path="*" element={<Pagenotfound />} />
        <Route path="/product-details" element={<ProductDetails />} />

      </Routes>
      <Footer />
    </Router>
  </StrictMode>
);
