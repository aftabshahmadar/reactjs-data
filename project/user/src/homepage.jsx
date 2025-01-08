import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import slide1 from "./assets/images/slide1.jpg";
import slide2 from "./assets/images/slide2.jpg";
import slide3 from "./assets/images/slide3.jpg";
import prodify3 from './assets/images/prodify3.png'; 
// import { motion } from 'framer-motion';
import { ReactTyped } from "react-typed";

export default function Homepage() {
  
  return (
    <div className="flex flex-col mb-10" style={{ height: "80%" }}>
      {/* Bootstrap Carousel Section */}
      <div
        id="carouselExampleCaptions"
        className="carousel slide mt-1"
        data-bs-ride="carousel"
      >
        {/* Carousel Indicators */}
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        {/* Carousel Items */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={slide1}
              className="d-block w-100 h-50"
              alt="First Slide"
            />
            <div className="carousel-caption d-none d-md-block text-gray-500">
              <h5>Prodify. where quality meets style</h5>
              <p>Find what you love, love what you find.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={slide2} className="d-block w-100" alt="Second Slide" />
            <div className="carousel-caption d-none d-md-block text-gray-500">
              <h5>Unbelievable discounts</h5>
              <p>
                Get upto 50% OFF on every social events and special moments of
                you .
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={slide3} className="d-block w-100" alt="Third Slide" />
            <div className="carousel-caption d-none d-md-block text-black">
              <h5>Fullfill your dream products with us</h5>
              <p>We provide you the best quality of your desired products.</p>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Two sections after the slider */}

      <div className="ms-40 mt-5 ">
        <div className="row">
          {/* Left Section - Takes more space */}
          <div className="col-7 custom-margin-top text-white">
            <h2 className="text-5xl heading">
              Prodify :){" "}
              {/* Dynamic Text Change */}
              <ReactTyped
                className="" style={{color:"#74C69D"}}
                strings={["Shop now.", "Save big.", "Live better."]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </h2>
            <p className=" paragraph">
              Welcome to Our World of Amazing Products! Discover a curated
              collection of premium products designed to elevate your lifestyle.
              From fashion and electronics to home essentials, we bring you the
              best at unbeatable prices. Explore our wide range of categories
              and enjoy a seamless shopping experience with fast delivery,
              secure payment options, and exceptional customer support. Whether
              you're shopping for yourself or finding the perfect gift for
              someone special, we have something for everyone.
            </p>
          </div>

          {/* Right Section - Takes less space */}
          <div className="col-5 text-white mt-3 ">
            <div
              style={{
                backgroundImage: `url(${prodify3})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "600px",
                width: "600px",
              }}
            >
          
            </div>
          </div>
        </div>
      </div>

          
    </div>
  );
}
