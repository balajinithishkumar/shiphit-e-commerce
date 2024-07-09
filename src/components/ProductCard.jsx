import React from 'react';
import './ProductCard.css';

function ProductCard({ image, price, description }) {
  return (
    <div className="product-card">
      <img src={image} alt={description} />
      <p>{description}</p>
      <p>${price}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
