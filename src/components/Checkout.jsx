import { useContext, useState, useEffect } from "react";
import CartContext from "./CartContext";
import "./Checkout.css";

function Checkout() {
  const { cart } = useContext(CartContext);
  const [loading, setLoading] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [paymentError, setPaymentError] = useState('');
  const [billingDetails, setBillingDetails] = useState({
    name: "Rajesh Kumar",
    address: "1234 Bazaar Street, Market Area, Mumbai, Maharashtra, India",
    phone: "+91 98765 43210",
  });
  const [shippingDetails, setShippingDetails] = useState({
    sameAsBilling: true,
    address: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  const [paypalEmail, setPaypalEmail] = useState("");
  const [bankDetails, setBankDetails] = useState({
    accountNumber: "",
    ifscCode: "",
  });
  const [deliveryDate, setDeliveryDate] = useState("");

  useEffect(() => {
    // Calculate delivery date (3 days from now)
    const today = new Date();
    const delivery = new Date(today);
    delivery.setDate(today.getDate() + 3);
    setDeliveryDate(delivery.toLocaleDateString());
  }, []);

  const handlePayment = () => {
    // Validate payment details
    if (!validatePaymentDetails()) {
      setPaymentError('Please fill in all required payment details.');
      return;
    }
    setLoading(true);
    setPaymentError('');

    // Simulate payment processing delay
    setTimeout(() => {
      setLoading(false);
      setPaymentSuccess(true);
    }, 2000); // Simulate 2 seconds processing time
  };

  const validatePaymentDetails = () => {
    if (paymentMethod === 'credit-card') {
      return cardDetails.cardNumber && cardDetails.expiryDate && cardDetails.cvv;
    } else if (paymentMethod === 'paypal') {
      return paypalEmail;
    } else if (paymentMethod === 'bank-transfer') {
      return bankDetails.accountNumber && bankDetails.ifscCode;
    }
    return false;
  };

  const logistic_pre = 0.40;
  const itemTotal = cart.reduce((total, item) => total + item.price, 0);
  const logisticsPrice = itemTotal * logistic_pre; // 40% of item total as logistics price
  const deliveryPrice = 30.0; // Example fixed delivery price
  const totalPrice = itemTotal + logisticsPrice + deliveryPrice;

  return (
    <div className="checkout">
      <h1 className="checkout-text">Checkout</h1>
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
        <div className="checkout-prices">
          <div className="price-row">
            <p>Item Total:</p>
            <p>${itemTotal.toFixed(2)}</p>
          </div>
          <div className="price-row">
            <p>Logistics (40%):</p>
            <p>$100</p>
          </div>
          <div className="price-row">
            <p>Delivery:</p>
            <p>${deliveryPrice.toFixed(2)}</p>
          </div>
          <div className="checkout-total">
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
          </div>
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
        <label className="checkbox">
          <input
            type="checkbox"
            checked={shippingDetails.sameAsBilling}
            onChange={(e) =>
              setShippingDetails({
                ...shippingDetails,
                sameAsBilling: e.target.checked,
              })
            }
          />
          Same as billing address
        </label>
        {!shippingDetails.sameAsBilling && (
          <textarea
            style={{ width: "60%" }}
            value={shippingDetails.address}
            onChange={(e) =>
              setShippingDetails({
                ...shippingDetails,
                address: e.target.value,
              })
            }
            placeholder="Enter shipping address"
          />
        )}
      </div>
      <div className="customer-details">
        <h3>Estimated Delivery Date</h3>
        <p className="deliverydate">{deliveryDate}</p>
      </div>
      <div className="payment-method">
        <h3>Payment Method</h3>
        <label>
          <input
            type="radio"
            value="credit-card"
            checked={paymentMethod === "credit-card"}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          Credit Card
        </label>
        <label>
          <input
            type="radio"
            value="paypal"
            checked={paymentMethod === "paypal"}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          PayPal
        </label>
        <label>
          <input
            type="radio"
            value="bank-transfer"
            checked={paymentMethod === "bank-transfer"}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          Bank Transfer
        </label>
        {paymentMethod === "credit-card" && (
          <div className="card-details">
            <input
              type="text"
              placeholder="Card Number"
              value={cardDetails.cardNumber}
              onChange={(e) =>
                setCardDetails({ ...cardDetails, cardNumber: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Expiry Date (MM/YY)"
              value={cardDetails.expiryDate}
              onChange={(e) =>
                setCardDetails({ ...cardDetails, expiryDate: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="CVV"
              value={cardDetails.cvv}
              onChange={(e) =>
                setCardDetails({ ...cardDetails, cvv: e.target.value })
              }
            />
          </div>
        )}
        {paymentMethod === "paypal" && (
          <div className="paypal-details">
            <input
              type="email"
              placeholder="PayPal Email"
              value={paypalEmail}
              onChange={(e) => setPaypalEmail(e.target.value)}
            />
          </div>
        )}
        {paymentMethod === "bank-transfer" && (
          <div className="bank-details">
            <input
              type="text"
              placeholder="Account Number"
              value={bankDetails.accountNumber}
              onChange={(e) =>
                setBankDetails({
                  ...bankDetails,
                  accountNumber: e.target.value,
                })
              }
            />
            <input
              type="text"
              placeholder="IFSC Code"
              value={bankDetails.ifscCode}
              onChange={(e) =>
                setBankDetails({ ...bankDetails, ifscCode: e.target.value })
              }
            />
          </div>
        )}
      </div>
      {paymentError && <p className="error">{paymentError}</p>}
      {paymentSuccess && <p className="success">Payment Successful!</p>}
      <button onClick={handlePayment} disabled={loading}>
        {loading ? "Processing..." : "Pay"}
      </button>
    </div>
  );
}

export default Checkout;
