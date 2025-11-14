import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMobileDropdown = (type) => {
    console.log(`Toggling dropdown for ${type}`);  // Debugging log
    if (type === "products") {
      setProductsDropdownOpen((prev) => !prev);
    } else if (type === "about") {
      setDropdownOpen((prev) => !prev);
    }
  };

  const closeAllMenus = () => {
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
    setDropdownOpen(false);
  };

  return (
    <>

      {/* 🏠 Top Header */}
      <div className="top-header">
        <div className="top-left">
          📍 <span>Amravati, Maharashtra, India</span>
          ✉️ <a href="mailto:sparshenterprise97@gmail.com">sparshenterprise97@gmail.com</a>
        </div>
      </div>
      
      
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-logo">
          <img src="/logo1.png" alt="Logo" />
        </div>

        <div
          className={`mobile-hamburger ${mobileMenuOpen ? "active" : ""}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`navbar-links ${mobileMenuOpen ? "open" : ""}`}>
          <li><Link to="/" onClick={closeAllMenus}>Home</Link></li>
          <li><Link to="/services" onClick={closeAllMenus}>Services</Link></li>

          <li 
            className={`dropdown ${productsDropdownOpen ? "open" : ""}`}
            onMouseEnter={!isMobile ? () => setProductsDropdownOpen(true) : undefined}
            onMouseLeave={!isMobile ? () => setProductsDropdownOpen(false) : undefined}
          >
            <span
              className="dropdown-toggle"
              onClick={isMobile ? () => toggleMobileDropdown("products") : undefined}
            >
              Our Products
            </span>
            {productsDropdownOpen && (
              <ul className="dropdown-menu">
                <li className="nested-dropdown">
                  <span>Lakadong Turmeric</span>
                  <ul className="nested-menu">
                    <li><Link to="/products/turmeric/turmeric-powder" onClick={closeAllMenus}>Turmeric Powder</Link></li>
                    <li><Link to="/products/turmeric/turmeric-fingers" onClick={closeAllMenus}>Turmeric Fingers</Link></li>
                    <li><Link to="/products/turmeric/turmeric-chips" onClick={closeAllMenus}>Turmeric Chips</Link></li>
                    <li><Link to="/products/turmeric/curcumin-extract" onClick={closeAllMenus}>Curcumin Extract</Link></li>
                    <li><Link to="/products/turmeric/turmeric-oil" onClick={closeAllMenus}>Turmeric Oil</Link></li>
                  </ul>
                </li>
                <li className="nested-dropdown">
                  <span>Processed Food</span>
                  <ul className="nested-menu">
                    <li><Link to="/products/processed-food/a2-cow-ghee" onClick={closeAllMenus}>A2 Cow Ghee</Link></li>
                  </ul>
                </li>
                <li className="nested-dropdown">
                  <span>Food & Vegetables</span>
                  <ul className="nested-menu">
                    <li><Link to="/products/food-vegetables/capsicum" onClick={closeAllMenus}>Capsicum</Link></li>
                    <li><Link to="/products/food-vegetables/dragon-fruit" onClick={closeAllMenus}>Dragon Fruit</Link></li>
                  </ul>
                </li>
                <li className="nested-dropdown">
                  <span>Bamboo</span>
                  <ul className="nested-menu">
                    <li><Link to="/products/bamboo/bamboo-pellets" onClick={closeAllMenus}>Bamboo Pellets</Link></li>
                  </ul>
                </li>
              </ul>
            )}
          </li>

          <li className={`dropdown ${dropdownOpen ? "open" : ""}`}
            onMouseEnter={!isMobile ? () => setDropdownOpen(true) : undefined}
            onMouseLeave={!isMobile ? () => setDropdownOpen(false) : undefined}
          >
            <span
              className="dropdown-toggle"
              onClick={isMobile ? () => toggleMobileDropdown("about") : undefined}
            >
              About Us
            </span>
            {dropdownOpen && (
              <ul className="dropdown-menu">
                <li><Link to="/about" onClick={closeAllMenus}>Our Company</Link></li>
                <li><Link to="/about/certification" onClick={closeAllMenus}>Certification</Link></li>
              </ul>
            )}
          </li>

          <li><Link to="/blogs" onClick={closeAllMenus}>Blogs</Link></li>
          <li><Link to="/contact" onClick={closeAllMenus}>Contact Us</Link></li>
        </ul>

        <div className="navbar-contact">📞<a href="tel:+919021176438">+91 9021176438 </a></div>
      </nav>
    </>
  );
};

export default Navbar;