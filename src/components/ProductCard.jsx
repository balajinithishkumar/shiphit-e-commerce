import { useContext } from 'react';
import CartContext from './CartContext';
import './ProductCard.css';

function ProductCard({ id, title, image, price, description }) {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart({ id, title, image, price, description });
  };

  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p className="description">{description}</p>
      <p className="price">${price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;