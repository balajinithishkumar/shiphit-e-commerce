import ProductCard from './ProductCard';
import './Products.css';

function Handcrafts() {
  const products = [
    { id: 1, image: '/path/to/handcraft1.jpg', price: 20, description: 'Handcraft 1' },
    { id: 2, image: '/path/to/handcraft2.jpg', price: 25, description: 'Handcraft 2' },
    { id: 3, image: '/path/to/handcraft3.jpg', price: 30, description: 'Handcraft 3' },
    { id: 4, image: '/path/to/handcraft4.jpg', price: 35, description: 'Handcraft 4' }
  ];

  return (
    <div className="products">
      <h1>Handcrafts</h1>
      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}

export default Handcrafts;