import { Link } from 'react-router-dom';
import { useContext } from 'react';
import CartContext from './CartContext';
import './Navbar.css';

function Navbar() {
  const { cart } = useContext(CartContext);
  const cartItemCount = cart.length;

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img style={{ width: "200px", height: "auto" }} src="/logo.png" alt="Logo" />
        </Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li className="dropdown">
          <Link to="#">Products</Link>
          <ul className="dropdown-content">
            <li><Link to="/products/handicrafts">Handicrafts</Link></li>
            <li><Link to="/products/musical-instruments">Musical Instruments</Link></li>
            <li><Link to="/products/paintings">Paintings</Link></li>
            <li><Link to="/products/food-products">Food Products</Link></li>
          </ul>
        </li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li>
          <Link to="/cart">
            Cart 
          {cartItemCount > 0 && <span className="cart-count">({cartItemCount})</span>}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
