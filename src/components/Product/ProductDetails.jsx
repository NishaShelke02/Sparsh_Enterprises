import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./ProductDetails.css";

const ProductDetail = () => {
  const { categorySlug, productSlug } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const slugify = (str = "") =>
    str.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch("/data/products.json");
        const data = await res.json();

        const category = data.find(
          (c) => (c.slug || slugify(c.category)) === categorySlug
        );

        if (category) {
          const prod = category.products.find(
            (p) => (p.slug || slugify(p.name)) === productSlug
          );
          if (prod) setProduct(prod);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [categorySlug, productSlug]);

  if (loading) return <p>Loading...</p>;
  if (!product) return <p>Product not found.</p>;

  return (
    <div className="product-detail-page">
      <div className="breadcrumb">
        <Link to="/">Home</Link> /{" "}
        <Link to={`/products/${categorySlug}`}>{categorySlug}</Link> /{" "}
        <span>{product.name}</span>
      </div>

      <div className="product-detail-container">
        <div className="product-images">
          <img src={product.image} alt={product.name} />
          <div className="product-gallery">
            {product.gallery?.map((img, i) => (
              <img key={i} src={img} alt={`${product.name}-${i}`} />
            ))}
          </div>
        </div>

        <div className="product-info">
          <h1>{product.name}</h1>

          {/* Render description preserving line breaks */}
          <div className="product-description">
            {product.description.split("\n").map((line, i) => (
              <React.Fragment key={i}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </div>

          <Link to="/products" className="back-btn">
            ← Back to All Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
