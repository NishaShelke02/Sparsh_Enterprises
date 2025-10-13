import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="blogs-container">
      {/* Hero Section */}
      <section className="blogs-hero">
        <div className="container">
          <h1>🌿 Lakadong Turmeric – Grown in Organic Polyhouses</h1>
          <p className="tagline">“Purity Cultivated, Potency Preserved”</p>
          <p>
            Our Lakadong turmeric is nurtured in state-of-the-art organic
            polyhouses. This controlled environment ensures optimal growth
            conditions — free from pests, chemicals, and contaminants — while
            preserving the natural potency of turmeric’s most powerful compound,
            <strong> curcumin (7–9%)</strong>.
          </p>
        </div>
      </section>

      {/* Video Section */}
      <section className="blog-video-section">
        <div className="container">
          <h2>🎥 A Glimpse of Our Farm</h2>
          <div className="video-wrapper">
            {/* Replace with your actual farm video file path or YouTube embed */}
            <video
              src="/images/video.mp4"
              controls
              muted
              autoPlay={false}
              className="farm-video"
            >
              Your browser does not support the video tag.
            </video>
            
          </div>
          <p className="video-caption">
            Watch how our Lakadong turmeric is grown with care and precision in
            our modern organic polyhouses.
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="blog-content">
        <div className="container">
          <h2>🌱 Sustainable Farming, Authentic Results</h2>
          <p>
            Every step — from planting to harvesting — follows organic
            practices. The result is turmeric that retains its deep golden
            color, earthy aroma, and exceptional curcumin content, making it one
            of India’s most potent varieties.
          </p>

          <p>
            Our farm integrates eco-friendly irrigation and natural composting,
            ensuring that every rhizome embodies purity and sustainability. We
            believe in nurturing nature, not exploiting it.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
