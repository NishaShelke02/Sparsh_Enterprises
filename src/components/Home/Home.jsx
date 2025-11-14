// Home.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//import Footer from "../Footer/Footer"; // Import the footer component
import "./Home.css"; // Slider, features, welcome section CSS

const Home = () => {
  const slides = [
    {
      id: 1,
      image: "/images/plant.png",
      title: "100% Natural From Farm",
      subtitle: "Freshly harvested turmeric straight from our organic farms.",
      cta: "Discover Our Farms"
    },
    {
      id: 2,
      image: "/images/turmeric.jpg",
      title: "Turmeric Exporter",
      subtitle: "Global leaders in premium turmeric export with quality assurance.",
      cta: "Explore Exports"
    },
    {
      id: 3,
      image: "/images/dragon.jpg",
      title: "Dragon Fruit",
      subtitle: "Nutritious and delicious dragon fruit, naturally sweet and healthy.",
      cta: "Buy Dragon Fruit"
    },
    {
      id: 4,
      image: "/images/capsicum.png",
      title: "Capsicum - Red, Green, Yellow, Orange",
      subtitle: "Vibrant and crunchy capsicums in red, green, yellow, and orange — full of flavor and freshness.",
      cta: "Buy Capsicum"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const nextSlide = () => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const intervalTime = currentSlide === 1 ? 15000 : 5000; // 15 seconds for second slide, 5 for others
    const interval = setInterval(nextSlide, intervalTime);

    return () => clearInterval(interval);
  }, [currentSlide, slides.length]);

  const goToSlide = (index) => setCurrentSlide(index);

  const features = [
    {
      id: 1,
      icon: "🌿",
      title: "100% Natural",
      description:
        "Pure nature turmeric, organic curcumin powder, responsibly grown, pesticide-free, and delivered fresh for ultimate purity."
    },
    {
      id: 2,
      icon: "⭐",
      title: "High Quality",
      description:
        "Premium turmeric rich in curcumin, ensuring superior flavor, potency, and health benefits in every batch."
    },
    {
      id: 3,
      icon: "💰",
      title: "Fair Price",
      description:
        "Best turmeric to buy, offering fair prices where quality meets value and integrity for global buyers."
    }
  ];

  return (
    <div className="home-container">
      {/* Hero Slider */}
      <div className="hero-slider">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === currentSlide ? "active" : ""}`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat"
            }}
          >
            <div className="slide-overlay"></div>
            <div className="slide-content">
              <h1 className="slide-title">{slide.title}</h1>
              <p className="slide-subtitle">{slide.subtitle}</p>
              <Link
                to="/products"
                className="slide-cta"
              >
                {slide.cta}
              </Link>
            </div>
          </div>
        ))}

        {/* Slide Indicators */}
        <div className="slide-indicators">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`indicator ${index === currentSlide ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </div>
      

      {/* Welcome Section */}
      <section className="welcome-section">
        <div className="container">
          <h2>Welcome to Sparsh Enterprises</h2>
          <p>
            Your trusted partner in premium turmeric products. From farm to table, we deliver quality and purity.
          </p>

          <h3>Lakadong Turmeric Powder (Curcumin 7–10%)</h3>
          
          {/* Features Section */}
          <section className="features-section">
            <h4>Why Choose Us?</h4>
            <div className="features-grid">
              {features.map((feature) => (
                <div key={feature.id} className="feature-card">
                  <div className="feature-icon">{feature.icon}</div>
                  <h5 className="feature-title">{feature.title}</h5>
                  <p className="feature-description">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>
          {/* Explore Products Button */}

          <Link to="/products" className="explore-btn">
            Explore Our Products
          </Link>
        </div>
      </section>

      {/* Footer */}
      {/* <Footer /> */} {/* Uncomment if you want to include the footer */}
    </div>
  );
};

export default Home;
