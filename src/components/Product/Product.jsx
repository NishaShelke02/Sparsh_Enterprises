import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./Product.css"; // Ensure this matches the CSS we updated earlier

const Product = () => {
  const { categorySlug, productSlug } = useParams();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [loading, setLoading] = useState(true);
  const [intervalId, setIntervalId] = useState(null); // To store and clear the interval

  const slugify = (str = "") =>
    str.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/data/products.json");
        const json = await res.json();

        // Find product by category & slug
        const cat = json.find(
          (c) => (c.slug || slugify(c.category)) === categorySlug
        );
        if (cat) {
          const prod = cat.products.find(
            (p) => (p.slug || slugify(p.name)) === productSlug
          );
          if (prod) {
            setProduct(prod);
            setMainImage(prod.image); // Set initial main image
          }
        }
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [categorySlug, productSlug]);

  useEffect(() => {
    if (product && product.gallery && product.gallery.length > 0) {
      // Start the interval only after product is loaded and has a gallery
      const id = setInterval(() => {
        const currentIndex = product.gallery.indexOf(mainImage);
        const nextIndex =
          currentIndex + 1 < product.gallery.length ? currentIndex + 1 : 0; // Cycle to next or back to 0
        setMainImage(product.gallery[nextIndex]); // Update main image
      }, 1500); // 0.5 seconds interval

      setIntervalId(id); // Store the interval ID

      return () => clearInterval(id); // Cleanup on unmount or when dependencies change
    }
  }, [product, mainImage]); // Re-run if product or mainImage changes

  // Function to handle thumbnail click and reset interval
  const handleThumbnailClick = (img) => {
    setMainImage(img); // Update main image
    if (intervalId) {
      clearInterval(intervalId); // Stop the interval on click
      // Optionally, restart the interval after a delay or on some event
    }
  };

  if (loading) return <p>Loading...</p>;
  if (!product) return <p>Product not found.</p>;

  return (
    <div className="product-page">
      <nav className="breadcrumb">
        <Link to="/">Home</Link> /{" "}
        <Link to={`/products/${categorySlug}`}>{categorySlug}</Link> /{" "}
        <span>{product.name}</span>
      </nav>

      <div className="product-detail">
        <div className="product-image-container">
          <img src={mainImage} alt={product.name} className="product-image" />
          <div className="product-gallery">
            {product.gallery.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`${product.name} ${i}`}
                className={mainImage === img ? "active" : ""}
                onClick={() => handleThumbnailClick(img)} // Use updated handler
              />
            ))}
          </div>
        </div>
        <div className="product-description">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
