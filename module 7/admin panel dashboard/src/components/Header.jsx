import React from 'react'
import { MDBContainer,MDBRow,MDBBtn } from 'mdb-react-ui-kit'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
      <MDBContainer fluid className='p-5 shadow'>
        <MDBRow>
            <div className='col-md-3'>
                <strong className='ms-2'>Call Us <span className='fa fa-phone'></span>(+91)-998003879</strong>
            </div>
            <div className='col-md-6'>
                <div className='input-group'>
                    <input type='text' placeholder='search products items here ...' className='form-control' />
                    <MDBBtn className='btn btn-sm btn-dark text-white'>
                        <span className='fa fa-search'></span>
                    </MDBBtn>

                </div>
            </div>
            <div className='col-md-3'>
                <span className='ms-3 fs-4 bi bi-facebook'></span>
                <span className='ms-1 fs-4 bi bi-twitter'></span>
                <span className='ms-1 fs-4 bi bi-youtube'></span>
                <span className='ms-1 fs-4 bi bi-instagram'></span>
                <Link to="/view-cart"><MDBBtn className='btn btn-sm btn-dark ms-2 text-white'>Cart <span className='bi bi-cart'>0</span></MDBBtn></Link>
            </div>
        </MDBRow>
      </MDBContainer>
    </div>
  )
}