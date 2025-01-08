import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <section
      id="navbar"
      className="text-white navbar"
      style={{ backgroundColor: "#08314A" }}
    >
      <div className="container d-flex flex-column flex-sm-row align-items-center gap-3 gap-sm-5 justify-content-between py-3">
        {/* Navigation Links */}
        <ul className="d-flex flex-column flex-sm-row align-items-center gap-4 m-0 p-0 list-unstyled">
          <li className="nav-item">
            <Link
              to="/"
              className="nav-link text-white"
              style={{ textDecoration: "none" }}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about"
              className="nav-link text-white"
              style={{ textDecoration: "none" }}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Products"
              className="nav-link text-white"
              style={{ textDecoration: "none" }}
            >
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className="nav-link text-white"
              style={{ textDecoration: "none" }}
            >
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Neon Cart Button */}
        <div className="d-flex align-items-center gap-3">
          <Link to="/Cart" style={{ textDecoration: "none" }}>
            <button
              className="btn d-flex align-items-center gap-2 px-3 py-2"
              style={{
                backgroundColor: "#0DCAF0",
                color: "#08314A",
                border: "none",
                borderRadius: "30px",
                fontWeight: "bold",
                textShadow:
                  "0 0 5px #0DCAF0, 0 0 10px #0DCAF0, 0 0 20px #0DCAF0",
                boxShadow:
                  "0 0 10px #0DCAF0, 0 0 20px #0DCAF0, 0 0 40px #0DCAF0",
                transition: "all 0.3s ease-in-out",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 0 20px #0DCAF0, 0 0 40px #0DCAF0, 0 0 60px #0DCAF0";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 0 10px #0DCAF0, 0 0 20px #0DCAF0, 0 0 40px #0DCAF0";
              }}
            >
              <i
                className="fas fa-shopping-cart"
                style={{
                  fontSize: "1.2rem",
                  textShadow: "0 0 5px #0DCAF0, 0 0 10px #0DCAF0",
                }}
              ></i>
              Cart
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
