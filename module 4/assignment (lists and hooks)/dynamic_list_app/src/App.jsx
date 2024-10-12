import React from 'react';
import Data from './components/data.jsx';
import { Container, Card, CardBody } from 'react-bootstrap';

export default function App() {
  return (
    <div>
      <nav className=" bg-danger p-5 navbar navbar-expand-md navbar-light mt-2">
        <div className="container-fluid">
        <button
  className="navbar-toggler text-white"
  type="button"
  data-bs-toggle="collapse"
  data-bs-target="#navbarNav"
  aria-controls="navbarNav"
  aria-expanded="false"
  aria-label="Toggle navigation"
>
  <span
    className="navbar-toggler-icon"
    style={{ filter: 'invert(1)' }}  // Inverts color to white
  ></span>
</button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-links navbar-nav">
              <li className="nav-item">
                <a href="" className="nav-link text-white fs-4">Designer</a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link">Categories</a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link">Attentions</a>
              </li>
              <li className="nav-item text-white fs-4">
                Total users are: <span className="bi bi-person"></span>
                <span className="badge bg-danger">{Data.length}</span>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-5">
        <div className="row">
          {Data.map((item) => (
            <div className="col-12 col-md-6 col-lg-12 mb-4" key={item.id}>
              <Card className="bg-danger text-white h-100">
                <CardBody className="p-4">
                  <div className="d-flex align-items-center">
                    <img
                      src={item.photo}
                      alt="img"
                      className="img-fluid rounded-circle me-3"
                      style={{ width: '75px' }}  // Adjust image size for larger screens
                    />
                    <div className="w-100">
                      <div className="row">
                        <div className="col-lg-3">
                          <h5 className="fs-4">{item.name}</h5>
                        </div>
                        <div className="col-lg-3">
                          <p className="mb-1">Age: {item.age}</p>
                        </div>
                        <div className="col-lg-3">
                          <p className="mb-1">Address: {item.address}</p>
                        </div>
                        <div className="col-lg-3">
                          <p className="mb-0">Phone: {item.phone}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
