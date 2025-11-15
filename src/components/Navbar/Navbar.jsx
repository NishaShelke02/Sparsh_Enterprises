import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // Desktop hover
  const handleMouseEnter = (menu) => {
    if (window.innerWidth > 768) setDropdownOpen(menu);
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 768) setDropdownOpen(null);
  };

  // Mobile click dropdown
  const toggleDropdown = (menu) => {
    if (window.innerWidth <= 768) {
      setDropdownOpen(dropdownOpen === menu ? null : menu);
    }
  };

  return (
    <header>

      {/* ------- TOP INFO BAR ------- */}
      <div className="top-bar">
        <div className="top-left">
          <span>Amravati, Maharashtra</span>
          <a href="mailto:sparshenterprise97@gmail.com">
            sparshenterprise97@gmail.com
          </a>
          
        </div>

       
      </div>

      {/* ------- MAIN NAVBAR ------- */}
      <nav className="navbar">
        <div className="nav-container">

          {/* Logo */}
          <div className="logo">
            <Link to="/">
              <img src="/logo1.png" alt="Logo" />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* LINKS */}
          <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>HOME</Link>
            </li>

            {/* PRODUCTS DROPDOWN */}
            <li
              className={`dropdown ${dropdownOpen === "products" ? "active" : ""}`}
              onMouseEnter={() => handleMouseEnter("products")}
              onMouseLeave={handleMouseLeave}
            >
              <span
                className="dropdown-toggle"
                onClick={() => toggleDropdown("products")}
              >
                PRODUCTS <span className="arrow">▼</span>
              </span>

              {dropdownOpen === "products" && (
                <ul className="dropdown-menu">

                  {/* Lakadong Turmeric */}
                  <li className="nested-dropdown">
                    <span>Lakadong Turmeric</span>
                    <ul className="nested-menu">
                      <li><Link to="/products/turmeric/turmeric-powder">Turmeric Powder</Link></li>
                      <li><Link to="/products/turmeric/turmeric-fingers">Turmeric Fingers</Link></li>
                      <li><Link to="/products/turmeric/turmeric-chips">Turmeric Chips</Link></li>
                      <li><Link to="/products/turmeric/curcumin-extract">Curcumin Extract</Link></li>
                      <li><Link to="/products/turmeric/turmeric-oil">Turmeric Oil</Link></li>
                    </ul>
                  </li>

                  {/* Processed Food */}
                  <li className="nested-dropdown">
                    <span>Processed Food</span>
                    <ul className="nested-menu">
                      <li><Link to="/products/processed-food/a2-cow-ghee">A2 Cow Ghee</Link></li>
                    </ul>
                  </li>

                  {/* Food & Vegetables */}
                  <li className="nested-dropdown">
                    <span>Food & Vegetables</span>
                    <ul className="nested-menu">
                      <li><Link to="/products/food-vegetables/capsicum">Capsicum</Link></li>
                      <li><Link to="/products/food-vegetables/dragon-fruit">Dragon Fruit</Link></li>
                    </ul>
                  </li>

                  {/* Bamboo */}
                  <li className="nested-dropdown">
                    <span>Bamboo</span>
                    <ul className="nested-menu">
                      <li><Link to="/products/bamboo/bamboo-pellets">Bamboo Pellets</Link></li>
                    </ul>
                  </li>

                </ul>
              )}
            </li>

            <li><Link to="/services" onClick={() => setMenuOpen(false)}>SERVICES</Link></li>
            <li><Link to="/about" onClick={() => setMenuOpen(false)}>ABOUT US</Link></li>
            <li><Link to="/about/certification" onClick={() => setMenuOpen(false)}>VERIFY US</Link></li>
            <li><Link to="/blogs" onClick={() => setMenuOpen(false)}>BLOG</Link></li>
            <li><Link to="/contact" onClick={() => setMenuOpen(false)}>CONTACT US</Link></li>

          </ul>

        </div>
      </nav>
    </header>
  );
};

export default Navbar;
