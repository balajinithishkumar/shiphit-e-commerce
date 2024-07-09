import React from 'react';
import ProductCard from './ProductCard';
import './Products.css';

function Paintings() {
  const products = [
    { id: 1, image: '/path/to/painting1.jpg', price: 200, description: 'Painting 1' },
    { id: 2, image: '/path/to/painting2.jpg', price: 300, description: 'Painting 2' },
    { id: 3, image: '/path/to/painting3.jpg', price: 400, description: 'Painting 3' },
    { id: 4, image: '/path/to/painting4.jpg', price: 500, description: 'Painting 4' }
  ];

  return (
    <div className="products">
      <h1>Paintings</h1>
      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}

export default Paintings;
