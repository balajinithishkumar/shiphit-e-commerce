import React from 'react';
import ProductCard from './ProductCard';
import './Products.css';

function FoodProducts() {
  const products = [
    { id: 1, image: '/path/to/food1.jpg', price: 10, description: 'Food Product 1' },
    { id: 2, image: '/path/to/food2.jpg', price: 15, description: 'Food Product 2' },
    { id: 3, image: '/path/to/food3.jpg', price: 20, description: 'Food Product 3' },
    { id: 4, image: '/path/to/food4.jpg', price: 25, description: 'Food Product 4' }
  ];

  return (
    <div className="products">
      <h1>Food Products</h1>
      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}

export default FoodProducts;
