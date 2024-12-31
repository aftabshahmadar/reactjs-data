import React from 'react'
import { MDBContainer,MDBRow,MDBCard,MDBCardBody } from 'mdb-react-ui-kit'
import { Link } from 'react-router-dom'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
export default function Login() {
  return (
    <div>
    <Header />
    <Navbar />
      <MDBContainer className='p-5 mt-5'>
        <MDBRow>
            <div className='col-md-4'>
             <h3>Create Your Account</h3>
             <hr />
             <p>Don't have an account ? <Link to='/create-account'><button className='btn btn-sm btn-dark text-white mt-4'>Create Your Account!</button></Link></p>
             
            </div>
          
            <div className='col-md-8'>
                <MDBCard>
                    <MDBCardBody className='p-1'>

                    <h2 className='text-center'>Login Form</h2>
                    <form className='w-75 p-5 mx-auto'>
                    <div className='form-group mt-2'>
                        <input type='text' placeholder='Email *' className='form-control' />
                    </div>

                    
                    <div className='form-group mt-2'>
                        <input type='text' placeholder='Password *' className='form-control' />
                    </div>

                    
                    <div className='form-group mt-2'>
                        <input type='submit' placeholder='Email *' className='btn btn-sm btn-dark text-white' value="SignIn" /> 
                        <b className='ms-3'>Forget Password ?</b>
                    </div>
                    </form>
                    </MDBCardBody>   
                </MDBCard>
            </div>

        </MDBRow>
      </MDBContainer>

      <Footer />

    </div>
  )
}