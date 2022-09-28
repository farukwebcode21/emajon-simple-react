import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const element = <FontAwesomeIcon icon={faCartPlus} />;

const Product = ({ product, handleAddToCart }) => {
  //   const { product, handleAddToCart } = props;
  const { name, img, seller, price, rating } = product;
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
      <button onClick={() => handleAddToCart(product)} className="button-cart">
        <p>Add to Cart</p>
        {element}
      </button>
    </div>
  );
};

export default Product;
