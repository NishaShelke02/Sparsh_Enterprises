import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="services-page">
      {/* Hero Section */}
      <div className="services-hero">
        <div className="overlay">
          <h1 className="hero-title">Services</h1>
        </div>
      </div>

      {/* Intro Section */}
      <div className="services-content">
        <section className="service-section">
          <h2>Welcome to SPARSH ENTERPRISES</h2>
          <p>
            At SPARSH ENTERPRISES, we bring you <strong>Lakadong Turmeric</strong> — 
            “Purity Cultivated, Potency Preserved.” Our turmeric is nurtured in 
            <strong> organic polyhouses</strong> under controlled conditions, free from pests and contaminants. 
            With a <strong>7–9% Curcumin</strong> content, it’s ideal for global industries that value 
            purity, quality, and sustainability.
          </p>
        </section>

        {/* Pharmaceuticals Section */}
        <section className="service-section image-left">
          <div className="service-text">
            <h2>Pharmaceuticals</h2>
            <p>
              Lakadong Turmeric is a natural powerhouse for the pharmaceutical industry. 
              Its high Curcumin content supports formulations for immunity, inflammation 
              control, and natural wellness. Our turmeric is processed with strict quality 
              standards, ensuring maximum potency and consistency.
            </p>
          </div>
          <div className="service-img">
            <img src="/images/prama.png" alt="Pharmaceuticals" />
          </div>
        </section>

        {/* Cosmetics & Food Industry Section */}
        <section className="service-section image-right">
          <div className="service-img">
            <img src="/images/cosmetic.png" alt="Cosmetics and Food" />
          </div>
          <div className="service-text">
            <h2>Cosmetics & Food Industry</h2>
            <p>
              From natural skincare products to health-focused foods, Lakadong Turmeric 
              offers vibrant color, natural antioxidants, and strong antibacterial properties. 
              It’s a preferred ingredient for brands focused on <strong>clean beauty</strong> and 
              <strong> organic foods</strong>.
            </p>
          </div>
        </section>

        {/* Ayurvedic Products Section */}
        <section className="service-section image-left">
          <div className="service-text">
            <h2>Ayurvedic Products</h2>
            <p>
              Rooted in India’s traditional healing systems, our turmeric is widely used 
              in <strong>Ayurvedic formulations</strong>. Its therapeutic qualities make it 
              a cornerstone ingredient for natural wellness, supporting holistic health.
            </p>
          </div>
          <div className="service-img">
            <img src="/images/Ayurvedic.png" alt="Ayurvedic Products" />
          </div>
        </section>

        {/* Why Our Clients Love Us Section */}
        <section className="service-section why-love">
          <h2>Why Our Clients Love Us</h2>
          <div className="features">
            <div className="feature-card">
              <img src="/images/premium.png" alt="Premium Quality" />
              <h3>Premium Quality</h3>
              <p>We maintain the highest standards from cultivation to packaging, ensuring purity and strength.</p>
            </div>
            <div className="feature-card">
              <img src="/images/organicIn.png" alt="Organic Integrity" />
              <h3>Organic Integrity</h3>
              <p>Our crops are grown using sustainable, chemical-free practices in controlled polyhouses.</p>
            </div>
            <div className="feature-card">
              <img src="/images/global.png" alt="Global Reach" />
              <h3>Global Reach</h3>
              <p>We supply premium Lakadong turmeric to industries around the world with reliable logistics.</p>
            </div>
            <div className="feature-card">
              <img src="/images/diviser.png" alt="Diverse Applications" />
              <h3>Diverse Applications</h3>
              <p>Pharmaceuticals, cosmetics, food, and Ayurvedic — one product, many solutions.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
