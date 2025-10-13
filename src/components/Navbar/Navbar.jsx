import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/logo.png" alt="Logo" />
        <span>Sparsh Enterprises</span>
      </div>

      <div
        className="mobile-hamburger"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        ☰
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
  );
};

export default Navbar;
