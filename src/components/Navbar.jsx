import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
      <Link to="/">
      <img style={{width:"200px", height:"auto"}} src="/logo.png" alt="" />
      </Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li className="dropdown">
          <Link >Products</Link>
          <ul className="dropdown-content">
            <li><Link to="/products/handicrafts">Handicrafts</Link></li>
            <li><Link to="/products/musical-instruments">Musical Instruments</Link></li>
            <li><Link to="/products/paintings">Paintings</Link></li>
            <li><Link to="/products/food-products">Food Products</Link></li>
          </ul>
        </li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/cart">Cart</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;