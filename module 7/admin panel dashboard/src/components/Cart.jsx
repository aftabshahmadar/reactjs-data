import React from 'react'
import { MDBContainer,MDBRow,MDBCard,MDBCardBody, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit'
import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import crt from '../assets/images/cart.webp'
export default function Cart() {
  return (
    <div>
     <Header />
      <MDBContainer className='p-5 mt-5'>
      <MDBCard>
        <MDBCardImage src={crt} alt='cart' className='img-fluid' style={{width:"30%",marginLeft:"35%"}}/>
        <p className='text-center fs-4'>Missing Cart items?</p>
        <p className='text-center'>Login to see the items you added previously</p>
        <p className='text-center'><Link to="/login"><MDBBtn>Login</MDBBtn></Link></p>
      </MDBCard>
      </MDBContainer>

      <Footer />

    </div>
  )
}