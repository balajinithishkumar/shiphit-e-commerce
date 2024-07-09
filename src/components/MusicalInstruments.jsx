import React from 'react';
import ProductCard from './ProductCard';
import './Products.css';

function MusicalInstruments() {
  const products = [
    { id: 1, image: '/path/to/instrument1.jpg', price: 100, description: 'Instrument 1' },
    { id: 2, image: '/path/to/instrument2.jpg', price: 150, description: 'Instrument 2' },
    { id: 3, image: '/path/to/instrument3.jpg', price: 200, description: 'Instrument 3' },
    { id: 4, image: '/path/to/instrument4.jpg', price: 250, description: 'Instrument 4' }
  ];

  return (
    <div className="products">
      <h1>Musical Instruments</h1>
      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}

export default MusicalInstruments;