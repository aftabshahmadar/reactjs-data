import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-3 mt-1">
      <Container>
        <h1 className="navbar-brand mb-0 h1">
          <i className='bi bi-list'></i>
          <span className='ms-2'>Task Manager</span>
        </h1>
        <div className="ml-auto">
          <Link to="/view-task">
            <button className="btn btn-dark">View Task</button>
          </Link>
        </div>
      </Container>
    </nav>
  );
}
