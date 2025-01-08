import React, { useEffect } from "react";
import {
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaFacebook,
  FaTelegram,
} from "react-icons/fa";
import m1 from "./assets/images/m1.jpg";
import m3 from "./assets/images/m3.jpg";
import m5 from "./assets/images/m5.jpg";
import m6 from "./assets/images/m6.jpg";
import m4 from "./assets/images/m4.jpg";
import m2 from "./assets/images/m2.jpg";
import fm8 from "./assets/images/fm8.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Adjust duration as needed
  }, []);
  return (
    <div className="p-5">
      <h1 className="text-4xl text-gray-300 font-bold">About Us</h1>
      <hr className="text-gray-500 my-4" />

      <div className="text-gray-300">
        <p className="text-xl mb-4">
          Welcome to Prodify, your ultimate online shopping destination. We’re
          dedicated to making your shopping experience convenient, enjoyable,
          and secure. From the latest fashion and electronics to home appliances
          and lifestyle products, we offer a wide range of trusted brands and
          innovative sellers. Our user-friendly platform, tailored
          recommendations, detailed product descriptions, and secure payment
          options ensure effortless and informed shopping. With fast delivery,
          easy returns, and responsive customer support, we aim to exceed your
          expectations at every step. At Prodify, we’re more than a marketplace
          – we’re your trusted partner in exceptional online shopping.
          {/* Your paragraph content goes here */}
        </p>

        {/* Social Media Icons */}
        <div className="flex justify-end mr-5 mt-6 space-x-6">
          <FaTwitter
            size={30}
            className="text-blue-600 hover:text-blue-300 neon-icon"
          />
          <FaInstagram
            size={30}
            className="text-pink-600 hover:text-pink-300 neon-icon"
          />
          <FaWhatsapp
            size={30}
            className="text-green-600 hover:text-green-300 neon-icon"
          />
          <FaFacebook
            size={30}
            className="text-blue-600 hover:text-blue-300 neon-icon"
          />
          <FaTelegram
            size={30}
            className="text-teal-600 hover:text-teal-300 neon-icon"
          />
        </div>

        <h2 className="text-3xl font-semibold mb-3">Our Key Features:</h2>
        <ul className="list-disc pl-5">
          <li className="mb-2">
            A wide selection of products across various categories
          </li>
          <li className="mb-2">Fast and secure delivery options</li>
          <li className="mb-2">Customer support available 24/7</li>
          <li className="mb-2">Easy and secure payment options</li>
          <li className="mb-2">
            User-friendly interface for a seamless shopping experience
          </li>
        </ul>

        <h2 className="text-3xl font-semibold mt-6 mb-3">
          Why Choose Prodify?
        </h2>
        <p className="text-xl">
          At Prodify, we believe in making your shopping experience as enjoyable
          and efficient as possible. Whether you're looking for fashion,
          electronics, or home goods, we have it all. Our platform is designed
          to make shopping fast, easy, and secure.
        </p>
      </div>
      {/* advertising section */}
      <div className="p-5">
        <hr className="text-gray-500 my-4" />
        <h1 className="text-4xl text-gray-300 font-bold text-center">
          Inspiring Looks by Our Models
        </h1>
        <div className="container my-5">
          {/* Advertising Model 1 */}
          <div className="row align-items-center mb-5" data-aos="fade-up">
            <div className="col-md-6">
              <img
                src={m1}
                alt="Model Advertising Fashion"
                className="img-fluid rounded shadow w-150 h-150"
              />
            </div>
            <div className="col-md-6 text-gray-300">
              <h3 className="text-3xl font-bold mb-3">
                Explore a World of Accessories
              </h3>
              <p className="text-lg">
                At Prodify, we don’t just stop at clothing and essentials.
                Discover our extensive range of accessories, from elegant
                jewelry and stylish handbags to tech gadgets and trendy
                footwear. Whether you're looking to complement your outfit or
                find the perfect gift, our carefully curated accessory
                collections are designed to add flair and functionality to your
                everyday life.
              </p>
            </div>
          </div>

          {/* Advertising Model 2 */}
          <div className="row align-items-center mb-5" data-aos="fade-up">
            <div className="col-md-6 order-md-2">
              <img
                src={m3}
                alt="Model Advertising Accessories"
                className="img-fluid rounded shadow w-150 h-150"
              />
            </div>
            <div className="col-md-6 order-md-1 text-gray-300">
              <h3 className="text-3xl font-bold mb-3">
                Effortless Comfort with Black Hoodies for Women
              </h3>
              <p className="text-lg">
                Discover our collection of simple yet trendy black hoodies for
                women. Perfect for casual outings or cozy days at home, these
                hoodies offer a versatile style that pairs effortlessly with any
                look. Stay comfortable and fashionable with Prodify's classic
                black hoodie designs.
              </p>
            </div>
          </div>

          {/* Advertising Model 3 */}
          <div className="row align-items-center mb-5" data-aos="fade-up">
            <div className="col-md-6">
              <img
                src={m5}
                alt="Model Advertising Lifestyle Products"
                className="img-fluid rounded shadow w-150 h-150"
              />
            </div>
            <div className="col-md-6 text-gray-300">
              <h3 className="text-3xl font-bold mb-3">
                Stylish and Comfortable Black Hoodies for Men
              </h3>
              <p className="text-lg">
                Discover our collection of sleek and comfortable black hoodies
                for men. Perfect for casual outings or relaxed days at home,
                these hoodies offer a versatile and stylish addition to your
                wardrobe. Made with soft, high-quality fabrics, they provide
                all-day comfort while maintaining a trendy, minimalist look.
                Whether paired with jeans or shorts, our black hoodies are
                designed to keep you cozy and effortlessly stylish.
              </p>
            </div>
          </div>

          {/* Advertising Model 4 - Placeholder */}
          <div className="row align-items-center mb-5" data-aos="fade-up">
            <div className="col-md-6 order-md-2">
              <img
                src={m6}
                alt="Model Placeholder"
                className="img-fluid rounded shadow w-150 h-150"
              />
            </div>
            <div className="col-md-6 order-md-1 text-gray-300">
              <h3 className="text-3xl font-bold mb-3">Stylish New Arrivals</h3>
              <p className="text-lg">
                Elevate your wardrobe with our bold and stylish printed clothing
                for both men and women. From eye-catching patterns to unique
                designs, these pieces are perfect for those who want to make a
                statement. Whether you're looking for graphic tees, vibrant
                dresses, or patterned shirts, our collection offers a variety of
                styles to suit every personality. Made with comfortable,
                breathable fabrics, these printed clothes combine fashion with
                comfort, ensuring you stand out with every wear.
              </p>
            </div>
          </div>

          {/* Advertising Model 5 - Placeholder */}
          <div className="row align-items-center mb-5" data-aos="fade-up">
            <div className="col-md-6">
              <img
                src={m4}
                alt="Model Placeholder"
                className="img-fluid rounded shadow w-150 h-150"
              />
            </div>
            <div className="col-md-6 text-gray-300">
              <h3 className="text-3xl font-bold mb-3">
                Comfortable and Casual Hoodies for Men and Women
              </h3>
              <p className="text-lg">
                Stay cozy and stylish with our collection of simple hoodies for
                both men and women. Perfect for casual outings or lounging at
                home, these hoodies offer a relaxed fit and premium comfort.
                Available in a variety of colors and designs, they’re ideal for
                layering or wearing on their own. Whether you're heading out for
                a walk or enjoying a chill day, our hoodies are the go-to choice
                for a laid-back, effortless look.
              </p>
            </div>
          </div>

          {/* Advertising Model 6 - Placeholder */}
          <div className="row align-items-center mb-5" data-aos="fade-up">
            <div className="col-md-6 order-md-2">
              <img
                src={m2}
                alt="Model Placeholder"
                className="img-fluid rounded shadow w-150 h-150"
              />
            </div>
            <div className="col-md-6 order-md-1 text-gray-300">
              <h3 className="text-3xl font-bold mb-3">
                New and Premium Quality Printed Apparel
              </h3>
              <p className="text-lg">
                Explore our latest collection of high-quality printed apparel,
                designed to bring style and comfort together. Each piece
                features unique, eye-catching prints, crafted with premium
                materials for durability and long-lasting wear. Whether you're
                looking for bold statements or subtle patterns, our collection
                offers something for every style. Refresh your wardrobe with the
                perfect blend of fashion, quality, and creativity!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* offline store sections */}
      <div className="p-5">
  <hr className="text-gray-300" />
  <h2 className="text-4xl text-gray-300 font-bold text-center mb-5">
    Find us near you
  </h2>

  {/* Section with Full-Height Image on Left and Content on Right */}
  <div className="container-fluid">
    <div className="row" data-aos="fade-up">
      {/* Left Section - Image */}
      <div className="col-md-6 p-0">
        <img
          src={fm8}
          alt="Store Location"
          className="w-100 h-100 object-cover"
          style={{ height: "100%" }}
        />
      </div>

      {/* Right Section - Content */}
      <div className="col-md-6 d-flex align-items-center text-gray-300 p-5">
        <div>
          <h3 className="text-3xl font-bold mb-3">Welcome to Our Stores</h3>
          <p className="text-lg">
            Discover our flagship stores located in prime locations across the
            city. Offering a seamless shopping experience, our stores showcase
            the best of our products, exclusive collections, and personalized
            services. Whether you're shopping for fashion, electronics, or
            lifestyle products, you're guaranteed to find something you love.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  );
}
