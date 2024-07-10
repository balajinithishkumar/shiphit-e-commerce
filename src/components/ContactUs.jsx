import './ContactUs.css';
import Footer from './Footer';
function ContactUs() {
  return (
    <div className="contact-us">
      <h1>Contact Us</h1>
      <form className="contact-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message"></textarea>
        <button type="submit">Submit</button>
      </form>
      <div className="international-courier-section">
        <img src={"contactus-image1.png"} alt="International Courier" className="courier-image" />
        <div className="courier-text">
          <h2>International Couriers</h2>
          <p>
            At Petti Ecom, we specialize in international courier services, ensuring that your packages reach their destination quickly and safely. Whether you're sending handcrafted items, musical instruments, paintings, or food products, our team is dedicated to providing reliable and efficient service. We partner with top logistics providers to guarantee timely deliveries worldwide.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactUs;