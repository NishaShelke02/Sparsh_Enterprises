import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-top">
        <div className="footer-about">
          <h3>Sparsh Enterprises</h3>
          <p>Premium turmeric products from India.</p>
          <p> Committed to quality, purity, and sustainable farming.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/services">Services</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p> Amravati, Maharashtra, India</p>
          <p>📧 sparshenterprise97@gmail.com</p>
          <p>📞 +91 9021176438</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Sparsh Enterprises. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
