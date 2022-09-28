import React from "react";
import "./Product.css";

const Product = (props) => {
  const { handleAddToCart } = props;
  const { name, img, seller, price, rating } = props.product;
  return (
    <div className="product">
      <img src={img} alt="product" />
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p>Price: ${price}</p>
        <p>
          <small>Seller: {seller}</small>
        </p>
        <p>
          <small>Ratings: {rating} stars</small>
        </p>
      </div>
      <button
        onClick={() => handleAddToCart(props.product)}
        className="button-cart"
      >
        <p>Add to Cart</p>
      </button>
    </div>
  );
};

export default Product;
