import React from 'react'
import { MDBContainer,MDBRow,MDBCard,MDBCardBody } from 'mdb-react-ui-kit'
import { Link } from 'react-router-dom'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'

export default function PageNotFound() {
  return (
    <div>
     <Header />
    <Navbar />
      <MDBContainer className='p-5 mt-5'>
        <MDBRow>
            <div className='col-md-4'>
             <h3>Errors to load Page</h3>
             <hr />

             <img src='https://cdn.svgator.com/images/2024/04/detective-animation-404-error-page.gif' className='img-fluid' />

            </div>
          
            <div className='col-md-8'>
                <MDBCard>
                    <MDBCardBody className='p-1'>
                    <h2 className='text-center'>Page Not found (404 errors)</h2>
                    <h4 className='text-center mt-5'><Link to="/" className='mt-5 ms-5'>Click to redirect on <button className='btn btn-sm btn-dark text-white'>Home Page</button></Link></h4>
                    </MDBCardBody>   
                </MDBCard>
            </div>

        </MDBRow>
      </MDBContainer>

      <Footer />

    </div>
  )
}