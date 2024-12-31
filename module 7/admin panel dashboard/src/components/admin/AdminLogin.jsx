import React from 'react'
import { MDBContainer,MDBRow } from 'mdb-react-ui-kit'
import usr from '../../assets/admin/images/user.webp'
export default function AdminLogin() {
  return (
 <MDBContainer className='m-0 p-5 mt-2 col-md-8 mx-auto shadow-lg'>  
  <MDBRow>
    <div className="col-md-4 login-img">
      <img src={usr} className="img-fluid" alt="users" />
      <p style={{ fontSize: 12 }}>
        Don't have an account?{" "}
        <a
          href="#"
          data-bs-toggle="modal"
          data-bs-target="#reg"
          data-bs-dismiss="modal"
        >
          Create Account
        </a>
      </p>
    </div>
    <div className="col-md-8">
      <form
        name="frm"
        id="frm"
        encType="multipart/form-data"
        action="register.html"
      >
        <h3 className="ms-5">Sign In</h3>
        <div className="input-group border border-0 w-75 mx-auto mt-3">
          <span className="input-group-text border border-0">
            <i className="bi bi-person-add" />
          </span>
          <input
            type="text"
            name="email"
            id="email"
            data-bvalidator="required,email"
            placeholder="Email *"
            className="form-control border border-0 border-bottom border-dark"
          />
        </div>
        <div className="input-group border border-0 w-75 mx-auto mt-3">
          <span className="input-group-text border border-0">
            <i className="bi bi-lock" />
          </span>
          <input
            type="password"
            name="pwd"
            id="pwd"
            placeholder="Password *"
            data-bvalidator="required,minlen[4],maxlen[12]"
            className="form-control border border-0 border-bottom border-dark"
          />
        </div>
        <div className="input-group border border-0 w-75 mx-auto mt-3">
          <button
            type="button"
            name="login"
            className="btn btn-block m-0 p-3 w-75 mx-auto bg-dark text-white"
            onclick="lg()"
          >
            {" "}
            SignIn
          </button>
        </div>
        <div className="input-group border border-0 w-75 mx-auto mt-3">
          <p className="text-center">
            Like us On <i className="bi bi-facebook text-primary" />
            <i className="bi bi-twitter text-primary" />
            <i className="bi bi-google text-danger" />
          </p>
        </div>
      </form>
    </div>
</MDBRow>
</MDBContainer>
 
  )
}