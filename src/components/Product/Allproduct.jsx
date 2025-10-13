import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Allproduct.css";

const AllProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const slugify = (str = "") =>
    str.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/data/products.json");
        const data = await res.json();

        const list = [];
        const addProducts = (category) => {
          (category.products || []).forEach((p) =>
            list.push({
              ...p,
              categorySlug: category.slug || slugify(category.category),
              slug: p.slug || slugify(p.name),
            })
          );
          (category.subcategories || []).forEach(addProducts);
        };

        data.forEach(addProducts);
        setAllProducts(list);
      } catch (err) {
        console.error("Error loading products:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <p>Loading products...</p>;

  return (
    <div className="all-products-page container">
      <h1>All Products</h1>
      <div className="product-grid">
        {allProducts.map((p, i) => (
          <ProductCard key={i} product={p} />
        ))}
      </div>
    </div>
  );
};

const ProductCard = ({ product }) => {
  const [currentImage, setCurrentImage] = useState(product.image);
  const productUrl = `/products/${product.categorySlug}/${product.slug}`;

  return (
    <div className="product-card">
      <Link
        to={productUrl}
        onMouseEnter={() => {
          if (product.gallery?.length > 1) {
            let i = 1;
            product.hoverInterval = setInterval(() => {
              setCurrentImage(product.gallery[i]);
              i = (i + 1) % product.gallery.length;
            }, 1000);
          }
        }}
        onMouseLeave={() => {
          clearInterval(product.hoverInterval);
          setCurrentImage(product.image);
        }}
      >
        <div
          className="product-thumb"
          style={{ backgroundImage: `url(${currentImage})` }}
        />
        <h3>{product.name}</h3>
        <p>{product.shortDescription}</p>
      </Link>

      <Link to={productUrl} className="view-details-btn">
        View Details
      </Link>
    </div>
  );
};

export default AllProducts;
