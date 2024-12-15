import React from "react";
import "./ProductComponent.css";

export default function ProductComponent({
  title,
  image,
  price,
  rating,
  addToCart,
}) {
  return (
    <div className="product">
      <h2 className="product--title">{title}</h2>
      <img className="product--image" src={image} alt={title} />
      <p className="product--rating">
        {rating.rate}/5 ({rating.count})
      </p>
      <strong className="product--price">Price: ${price}</strong>
      <button
        className="product--button"
        onClick={() => addToCart({ title, image, price })}
      >
        Add to Cart
      </button>
    </div>
  );
}
