import React from 'react';
import './Cart.css';

function Cart() {
  // Dummy data for demonstration
  const cartItems = [
    { id: 1, name: 'Handcraft Item 1', price: 20, quantity: 1 },
    { id: 2, name: 'Musical Instrument 1', price: 100, quantity: 1 }
  ];

  return (
    <div className="cart">
      <h1>Cart</h1>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price} x {item.quantity}
          </li>
        ))}
      </ul>
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Cart;
