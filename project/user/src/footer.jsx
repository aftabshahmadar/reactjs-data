import React from 'react';
import { Button, Form } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-3">
      <div className="container">
        <div className="row">
          {/* About Us Section */}
          <div className="col-md-3 mb-4">
            <h5 className="text-uppercase mb-3">About Us</h5>
            <p>
              We are an online store offering a variety of products including
              clothing, gadgets, and more. Our goal is to provide the best
              shopping experience for our customers.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="col-md-3 mb-4">
            <h5 className="text-uppercase mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/products" className="text-white">products</a></li>
              <li><a href="/about" className="text-white">About Us</a></li>
              <li><a href="/contact" className="text-white">Contact</a></li>
              <li><a href="/faq" className="text-white">FAQ</a></li>
            </ul>
          </div>

          {/* Contact Information Section */}
          <div className="col-md-3 mb-4">
            <h5 className="text-uppercase mb-3">Contact Info</h5>
            <ul className="list-unstyled">
              <li>Email: aftabshahmadar924@gmail.com</li>
              <li>Mo: (+91) 63548 70886</li>
              <li>Address: Bada bajrang road, Bag-e-asra BA6, Upleta, India</li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="col-md-3 mb-4">
            <h5 className="text-uppercase mb-3">Newsletter</h5>
            <p>Sign up for our newsletter to receive updates and promotions.</p>
            <Form action="#" method="POST">
              <Form.Group>
                <Form.Control type="email" placeholder="Enter your email" />
                <Button variant="" className="mt-3 text-white"
                style={{ backgroundColor: "#08314A" }}
                >Subscribe</Button>
              </Form.Group>
            </Form>
          </div>
        </div>

        <div className="text-center mt-4">
          <p>&copy; Aftab Shahmadar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
