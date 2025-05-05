import React, { useEffect, useState } from "react";
import heartOutline from "../assets/heart.png";
import heartFilled from "../assets/heartfilled.svg";
import "./ProductGrid.css";
import "./mobile.css";

const ProductGrid = ({ selectedCategories, selectedSort }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        const enriched = data.map((product) => ({
          ...product,
          liked: false,
        }));
        setProducts(enriched);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch products", err);
        setLoading(false);
      });
  }, []);

  const toggleLike = (index) => {
    setProducts((prev) =>
      prev.map((product, i) =>
        i === index ? { ...product, liked: !product.liked } : product
      )
    );
  };

  const filtered = selectedCategories.length
    ? products.filter((p) => selectedCategories.includes(p.category))
    : products;

  const sorted = [...filtered].sort((a, b) => {
    switch (selectedSort) {
      case "Price High to Low":
        return b.price - a.price;
      case "Price Low to High":
        return a.price - b.price;
      case "Newest First":
        return b.id - a.id;
      case "Popular":
        return a.rating?.count < b.rating?.count ? 1 : -1;
      default:
        return 0;
    }
  });

  if (loading) return <div className="loader">Loading...</div>;

  return (
    <section className="product-grid">
      {sorted.map((product, index) => (
        <div key={product.id} className="product-card">
          <div className="image-wrapper">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="product-details">
            <p className="title">{product.title}</p>
            <p className="subtext">
              <a href="/login">Sign in</a> or Create an account to see pricing
            </p>
          </div>
          <img
            src={product.liked ? heartFilled : heartOutline}
            className={`heart-icon ${product.liked ? "liked" : ""}`}
            alt="Like"
            onClick={() => toggleLike(index)}
          />
        </div>
      ))}
    </section>
  );
};

export default ProductGrid;
