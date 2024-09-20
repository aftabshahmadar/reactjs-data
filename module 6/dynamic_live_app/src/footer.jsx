import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-dark text-white text-center p-3 mt-5">
      <div className="container">
        <p>Made with love by aftab shahmadar.</p>
        <div>
          <a href="#" className="text-white mx-2">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#" className="text-white mx-2">
            <i className="bi bi-twitter"></i>
          </a>
          <a href="#" className="text-white mx-2">
            <i className="bi bi-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
