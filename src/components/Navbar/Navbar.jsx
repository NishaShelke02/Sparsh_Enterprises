import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* 🔹 Top Header */}
      <div className="top-header">
        <div className="top-header-left">
          <span>📍 Amravati, Maharashtra, India</span>
          <span>📧 sparshenterprise97@gmail.com</span>
        </div>
        <div className="top-header-right">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          <a href="https://wa.me/919021176438" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
        </div>
      </div>

      {/* 🔸 Main Navbar */}
      <nav className="navbar">
        <div className="navbar-logo">
          <img src="/logo.png" alt="Logo" />
          
        </div>

        <div
          className="mobile-hamburger"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >

        <span></span>
        <span></span>
        <span></span>


        </div>

        <ul className={`navbar-links ${mobileMenuOpen ? "open" : ""}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>

          {/* Our Products Dropdown */}
          <li
            className="dropdown"
            onMouseEnter={() => setProductsDropdownOpen(true)}
            onMouseLeave={() => setProductsDropdownOpen(false)}
          >
            <span className="dropdown-toggle">Our Products</span>
            {productsDropdownOpen && (
              <ul className="dropdown-menu">
                <li className="nested-dropdown">
                  <span>Lakadong Turmeric</span>
                  <ul className="nested-menu">
                    <li><Link to="/products/turmeric/turmeric-powder">Turmeric Powder</Link></li>
                    <li><Link to="/products/turmeric/turmeric-fingers">Turmeric Fingers</Link></li>
                    <li><Link to="/products/turmeric/turmeric-chips">Turmeric Chips</Link></li>
                    <li><Link to="/products/turmeric/curcumin-extract">Turmeric Curcumin Extract</Link></li>
                    <li><Link to="/products/turmeric/turmeric-oil">Turmeric Oil</Link></li>
                  </ul>
                </li>

                <li className="nested-dropdown">
                  <span>Processed Food</span>
                  <ul className="nested-menu">
                    <li><Link to="/products/processed-food/a2-cow-ghee">A2 Cow Ghee</Link></li>
                  </ul>
                </li>

                <li className="nested-dropdown">
                  <span>Food & Vegetables</span>
                  <ul className="nested-menu">
                    <li><Link to="/products/food-vegetables/capsicum">Capsicum</Link></li>
                    <li><Link to="/products/food-vegetables/dragon-fruit">Dragon Fruit</Link></li>
                  </ul>
                </li>

                <li className="nested-dropdown">
                  <span>Bamboo</span>
                  <ul className="nested-menu">
                    <li><Link to="/products/bamboo/bamboo-pellets">Bamboo Pellets</Link></li>
                  </ul>
                </li>
              </ul>
            )}
          </li>

          {/* About Us Dropdown */}
          <li
            className="dropdown"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <span className="dropdown-toggle">About Us</span>
            {dropdownOpen && (
              <ul className="dropdown-menu">
                <li><Link to="/about">Our Company</Link></li>
                <li><Link to="/about/certification">Certification</Link></li>
              </ul>
            )}
          </li>

          <li><Link to="/blogs">Blogs</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>

        <div className="navbar-contact">📞 +91 9021176438</div>
      </nav>
    </>
  );
};

export default Navbar;
