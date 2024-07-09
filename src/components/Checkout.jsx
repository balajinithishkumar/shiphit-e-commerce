import React, { useState } from 'react';
import './Checkout.css';

function Checkout() {
  const [loading, setLoading] = useState(false);

  const handlePayment = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert('Payment successful!');
    }, 2000);
  };

  return (
    <div className="checkout">
      <h1>Checkout</h1>
      <button onClick={handlePayment}>
        {loading ? 'Processing...' : 'Pay'}
      </button>
    </div>
  );
}

export default Checkout;
