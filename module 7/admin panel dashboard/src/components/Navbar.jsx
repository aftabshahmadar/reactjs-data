import React from 'react'
import { MDBNavbar } from 'mdb-react-ui-kit'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div>
      <MDBNavbar className='nav navbar navbar-expand-md bg-dark'>
        <Link  to='' className='navbar-brand text-white ms-5'>React js Routing - App</Link>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/our-services">Services</Link></li>
            <li><Link to="/about-us">About</Link></li>
            <li><Link to="/contact-us">Contact</Link></li>
            <li><Link to="/feedback-us">Feedback</Link></li>
            <li><Link to="/login">account</Link></li>
        </ul>
          
      </MDBNavbar>
    </div>
  )
}