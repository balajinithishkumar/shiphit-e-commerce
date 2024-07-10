import { useState } from 'react';
import './Checkout.css';

function Checkout() {
  const [loading, setLoading] = useState(false);

  const handlePayment = () => {
    setLoading(true);
    // Simulate payment processing delay
    setTimeout(() => {
      setLoading(false);
      // Payment success can be handled here, e.g., redirect to a thank you page
    }, 2000); // Simulate 2 seconds processing time
  };

  return (
    <div className="checkout">
      <h1>Checkout</h1>
      <button onClick={handlePayment} disabled={loading}>
        {loading ? 'Processing...' : 'Pay'}
      </button>
    </div>
  );
}

export default Checkout;