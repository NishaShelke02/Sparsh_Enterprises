import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./Product.css";

const Product = () => {
  const { categorySlug, productSlug } = useParams();
  //const [data, setData] = useState([]);
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [loading, setLoading] = useState(true);

  const slugify = (str = "") =>
    str.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/data/products.json");
        const json = await res.json();
        //setData(json);

        // find product by category & slug
        const cat = json.find(
          (c) => (c.slug || slugify(c.category)) === categorySlug
        );
        if (cat) {
          const prod = cat.products.find(
            (p) => (p.slug || slugify(p.name)) === productSlug
          );
          if (prod) {
            setProduct(prod);
            setMainImage(prod.image);
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
                onClick={() => setMainImage(img)}
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
