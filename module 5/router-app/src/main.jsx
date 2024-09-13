import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/style.css'
import Navbar from './navbar'
import Homepage from './homepage'
import About from './about'
import Contact from './contact'
import Learnmore from './learnmore'


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './footer'

createRoot(document.getElementById('root')).render(
<Router>
  <Navbar />
  <Routes>
    <Route path='/Home' element={<Homepage />} />
    <Route path='About' element={<About />} />
    <Route path='/Contact' element={<Contact />} />
    <Route path='/Learn-more' element={<Learnmore />} />



  </Routes>
  <Footer />
</Router>
)
