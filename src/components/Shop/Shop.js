import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json"
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const handleAddToCart = (product) => {
    console.log(product);
  };
  const product = products.map((product) => (
    <Product
      key={product.id}
      product={product}
      handleAddToCart={handleAddToCart}
    />
  ));
  return (
    <div className="shop-container">
      <div className="products-container">{product}</div>
      <div className="card-container">
        <h4>Order Summary</h4>
      </div>
    </div>
  );
};

export default Shop;