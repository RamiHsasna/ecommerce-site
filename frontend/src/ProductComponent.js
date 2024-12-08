import React from "react";
import "./ProductComponent.css";

export default function ProductComponent({ title, image, price, rating }) {
  return (
    <div className="product">
      <h2 className="product--title">{title}</h2>
      <img src={`${image}`} className="product--image" />
      <p className="product--rating">
        {rating.rate}/5 ({rating.count})
      </p>
      <strong className="product--price">Price: ${price}</strong>
      <button className="product--button">Add to Cart</button>
    </div>
  );
}
