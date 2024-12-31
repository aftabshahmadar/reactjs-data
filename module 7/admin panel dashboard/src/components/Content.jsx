import React from 'react'
import img from '../assets/images/routing.png'
import { MDBContainer,MDBRow,MDBCard,MDBCardImage, MDBCardBody } from 'mdb-react-ui-kit'

export default function Content() {
  return (
    <div>
      <MDBContainer className='p-5 mt-5'>
        <MDBRow>
            <div className='col-md-4'>
             <img src={img} alt='images' className='img-fluid' />
            </div>
            <div className='col-md-8'>
                <MDBCard>
                    <MDBCardBody className='p-5'>
                    <h2 className='text-center'>Welcome to Home Page</h2>
                    </MDBCardBody>
                </MDBCard>
            </div>

        </MDBRow>
      </MDBContainer>
    </div>
  )
}