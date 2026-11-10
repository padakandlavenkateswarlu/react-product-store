import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* About */}
        <div className="footer-section">

          <h2>PV Store</h2>

          <p>
            Welcome to PV Store. Find quality
            products at affordable prices with
            a simple and secure shopping experience.
          </p>

        </div>


        {/* Quick Links */}
        <div className="footer-section">

          <h3>Quick Links</h3>

          <Link to="/">
            Home
          </Link>

          <Link to="/products">
            Products
          </Link>

          <Link to="/blog">
            Blog
          </Link>

          <Link to="/cart">
            Cart
          </Link>

        </div>


        {/* Useful Links */}
        <div className="footer-section">

          <h3>Useful Links</h3>

          <Link to="/profile">
            Profile
          </Link>

          <Link to="/checkout">
            Checkout
          </Link>

          <Link to="/contact">
            Contact Us
          </Link>

        </div>


        {/* Contact */}
        <div className="footer-section">

          <h3>Contact Us</h3>

          <p>
            📧 venkatesh@example.com
          </p>

          <p>
            📱 +91 9876543210
          </p>

          <p>
            📍 Hyderabad, India
          </p>

        </div>

      </div>


      {/* Social Media */}

      <div className="footer-social">

        <h3>Follow Us</h3>

        <div className="social-links">

          <a href="#" target="_blank">
            Facebook
          </a>

          <a href="#" target="_blank">
            Instagram
          </a>

          <a href="#" target="_blank">
            LinkedIn
          </a>

          <a href="#" target="_blank">
            GitHub
          </a>

        </div>

      </div>


      {/* Bottom */}

      <div className="footer-bottom">

        <p>
          © 2026 PV Store. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;