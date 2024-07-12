import React, { useContext } from 'react';
import CartContext from './CartContext';
import Footer from './Footer';
import './Cart.css';
import { Link } from 'react-router-dom';

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  // Calculate total price
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  // Handle removing an item from cart
  const handleRemove = (itemId) => {
    removeFromCart(itemId);
  };

  console.log(cart)

  return (
    <div>
      <div className="cart">
        <div className='cart_container'>
          <h1>Your Cart</h1>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              <ul className="cart-items">
                {cart.map((item) => (
                  <li key={item.id} className="cart-item">
                    <img src={item.image} alt={item.description} />
                    <div className="item-details">
                      <p className="item-price">{item.title}</p>
                      <p className="item-description">{item.description}</p>
                      <p className="item-price">${item.price}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="cart-total">
                <p>Total: ${totalPrice}</p>
                <Link style={{ textDecoration: "none" }} to="/checkout">
                  <button className="pay-button">Checkout</button>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;