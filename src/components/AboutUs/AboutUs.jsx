import React from "react";
import "./AboutUs.css"; // Assume a separate CSS file for About page styling, or extend from Navbar.css

const AboutUs = () => {
  return (
    <div className="about-container">
      <section className="about-hero">
        <div className="hero-content">
          <h1 className="hero-title">About Sparsh Enterprises</h1>
          <p className="hero-subtitle">
            Dedicated to bringing the world closer to nature’s golden superfood – turmeric.
          </p>
        </div>
      </section>

      <section className="about-content">
        <div className="content-wrapper">
          <div className="about-text">
            <p>
              At Sparsh Enterprises, we are dedicated to bring the world closer to nature’s golden superfood – turmeric.
            </p>
            <p>
              As a producer of turmeric cultivated in polyhouses using 100% organic practices, we combine modern farming innovation with sustainable methods to ensure purity, potency, and consistency throughout the year.
            </p>
            <p>
              Our flagship product, Lakadong Turmeric, is produced in controlled polyhouse environments to achieve the highest quality using 100% organic practices. With an exceptionally high curcumin content of 7–9%, Lakadong Turmeric is globally recognized for its vibrant golden color, strong aroma, and powerful health benefits – making it a trusted choice for households, wellness enthusiasts, and industries alike.
            </p>
            <p>
              From domestic supply across India to exports in multiple international markets, Sparsh Enterprises is committed to delivering turmeric that embodies authenticity, wellness, and trust. Our journey is not just about spices – it’s about creating a healthier future, one shipment at a time.
            </p>
            <blockquote className="about-quote">
              ✨ With every harvest, we remain true to our promise: Touching Lives by delivering wellness and authenticity in every pack.
            </blockquote>
          </div>

          <div className="why-us-section">
            <h2 className="section-title">Why Us – The Sparsh Advantage</h2>
            <p className="section-subtitle">
              When you partner with Sparsh Enterprises, you choose more than turmeric – you choose quality, trust, and sustainability.
            </p>
            <ul className="advantages-list">
              <li>
                <span className="icon">🌱</span>
                <span>Producer-Owned & Organic – Cultivated in polyhouses using natural, chemical-free practices.</span>
              </li>
              <li>
                <span className="icon">💛</span>
                <span>Premium Lakadong Quality – High-curcumin (7–9%) turmeric, richer in health benefits than regular varieties.</span>
              </li>
              <li>
                <span className="icon">📜</span>
                <span>Certified & Reliable – FSSAI | APEDA | SGS approved.</span>
              </li>
              <li>
                <span className="icon">🌍</span>
                <span>Domestic & Global Reach – Serving India and exporting to multiple countries with trusted logistics.</span>
              </li>
              <li>
                <span className="icon">📦</span>
                <span>Flexible Packaging – Consumer packs, bulk supply, and export-ready solutions under FOB & CIF terms.</span>
              </li>
              <li>
                <span className="icon">🌿</span>
                <span>Sustainable & Ethical – Supporting farmers, fair trade, and eco-friendly cultivation.</span>
              </li>
            </ul>
            <blockquote className="why-us-quote">
              ✨ Sparsh Enterprises – Touching Lives through purity, quality, and global wellness.
            </blockquote>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;