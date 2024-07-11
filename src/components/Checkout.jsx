import { useContext, useState } from 'react';
import CartContext from './CartContext';
import './Checkout.css';

function Checkout() {
  const { cart } = useContext(CartContext);
  const [loading, setLoading] = useState(false);
  const [billingDetails, setBillingDetails] = useState({
    name: 'Rajesh Kumar',
    address: '1234 Bazaar Street, Market Area, Mumbai, Maharashtra, India',
    phone: '+91 98765 43210',
  });
  const [shippingDetails, setShippingDetails] = useState({
    sameAsBilling: true,
    address: '',
  });
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });
  const [paypalEmail, setPaypalEmail] = useState('');
  const [bankDetails, setBankDetails] = useState({
    accountNumber: '',
    ifscCode: '',
  });

  const handlePayment = () => {
    setLoading(true);
    // Simulate payment processing delay
    setTimeout(() => {
      setLoading(false);
      // Payment success can be handled here, e.g., redirect to a thank you page
      alert('Payment successful!');
    }, 22000); // Simulate 2 seconds processing time
  };

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="checkout">
      <h1>Checkout</h1>
      <div className="checkout-products">
        {cart.map((item, index) => (
          <div key={index} className="checkout-product">
            <img src={item.image} alt={item.description} />
            <div>
              <p>{item.description}</p>
              <p className="price">${item.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
        <div className="checkout-total">
          <h3>Total: ${totalPrice.toFixed(2)}</h3>
        </div>
      </div>
      <div className="customer-details">
        <h3>Billing Details</h3>
        <p><strong>Name:</strong> {billingDetails.name}</p>
        <p><strong>Address:</strong> {billingDetails.address}</p>
        <p><strong>Phone:</strong> {billingDetails.phone}</p>
      </div>
      <div className="customer-details">
        <h3>Shipping Details</h3>
        <>
          <label>
            <input
              type="checkbox"
              checked={shippingDetails.sameAsBilling}
              onChange={(e) => setShippingDetails({ ...shippingDetails, sameAsBilling: e.target.checked })}
            />
            Same as billing address
          </label>
          {!shippingDetails.sameAsBilling && (
            <textarea
              style={{ width: "60%" }}
              value={shippingDetails.address}
              onChange={(e) => setShippingDetails({ ...shippingDetails, address: e.target.value })}
              placeholder="Enter shipping address"
            />
          )}
        </>
      </div>
      <div className="payment-method">
        <h3>Payment Method</h3>
        <label>
          <input
            type="radio"
            value="credit-card"
            checked={paymentMethod === 'credit-card'}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          Credit Card
        </label>
        <label>
          <input
            type="radio"
            value="paypal"
            checked={paymentMethod === 'paypal'}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          PayPal
        </label>
        <label>
          <input
            type="radio"
            value="bank-transfer"
            checked={paymentMethod === 'bank-transfer'}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          Bank Transfer
        </label>
        {paymentMethod === 'credit-card' && (
          <div className="card-details">
            <input
              type="text"
              placeholder="Card Number"
              value={cardDetails.cardNumber}
              onChange={(e) => setCardDetails({ ...cardDetails, cardNumber: e.target.value })}
            />
            <input
              type="text"
              placeholder="Expiry Date (MM/YY)"
              value={cardDetails.expiryDate}
              onChange={(e) => setCardDetails({ ...cardDetails, expiryDate: e.target.value })}
            />
            <input
              type="text"
              placeholder="CVV"
              value={cardDetails.cvv}
              onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
            />
          </div>
        )}
        {paymentMethod === 'paypal' && (
          <div className="paypal-details">
            <input
              type="email"
              placeholder="PayPal Email"
              value={paypalEmail}
              onChange={(e) => setPaypalEmail(e.target.value)}
            />
          </div>
        )}
        {paymentMethod === 'bank-transfer' && (
          <div className="bank-details">
            <input
              type="text"
              placeholder="Account Number"
              value={bankDetails.accountNumber}
              onChange={(e) => setBankDetails({ ...bankDetails, accountNumber: e.target.value })}
            />
            <input
              type="text"
              placeholder="IFSC Code"
              value={bankDetails.ifscCode}
              onChange={(e) => setBankDetails({ ...bankDetails, ifscCode: e.target.value })}
            />
          </div>
        )}
      </div>
      <button onClick={handlePayment} disabled={loading}>
        {loading ? 'Processing...' : 'Pay'}
      </button>
    </div>
  );
}

export default Checkout;