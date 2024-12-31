import React from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Content from './components/Content'
import Footer from './components/Footer'
export default function Layout() {
  return (
    <div>
      <Header />
      <Navbar />
      <Content />
      <Footer />
    </div>
  )
}