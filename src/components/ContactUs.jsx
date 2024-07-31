import "./ContactUs.css";
import Footer from "./Footer";
import Navbar from "./Navbar";

function ContactUs() {
  return (
    <>
      <Navbar />
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
          <img
            src={"contactus-image1.png"}
            alt="International Courier"
            className="courier-image"
          />
          <div className="courier-text">
            <h2>International Courier Services</h2>
            <p>
              At Petti Ecom, we offer international courier services designed to ensure your packages reach their destination efficiently and securely. Our extensive network and partnerships with leading logistics providers allow us to offer reliable, timely deliveries worldwide. Whether you need to send important documents, valuable merchandise, or personal items, we handle each shipment with the utmost care and professionalism.
            </p>
          </div>
        </div>
        <section className="service-details">
          <h2>Service Features</h2>
          <ul>
            <li><strong>Global Reach:</strong> We deliver to virtually any destination across the globe.</li>
            <li><strong>Real-Time Tracking:</strong> Stay updated with our advanced tracking system.</li>
            <li><strong>Customs Handling:</strong> We manage all customs paperwork to ensure smooth delivery.</li>
            <li><strong>Secure Packaging:</strong> Our team ensures that all items are securely packed for transit.</li>
          </ul>
        </section>
        <section className="faq">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <h3>How can I track my shipment?</h3>
            <p>You can track your shipment in real-time using our tracking system on the website. Simply enter your tracking number to get the latest updates.</p>
          </div>
          <div className="faq-item">
            <h3>What should I do if my shipment is delayed?</h3>
            <p>If your shipment is delayed, please contact our customer service team. We will investigate the issue and provide you with an update as soon as possible.</p>
          </div>
          <div className="faq-item">
            <h3>How do I contact customer service?</h3>
            <p>You can reach our customer service team through the contact form on this page, or by emailing us directly at support@pettiecom.com.</p>
          </div>
        </section>
        {/* <section className="map-section">
          <h2>Find Us Here</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.283067308521!2d-122.40117278468162!3d37.79065777975824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064d95b3f95%3A0x48e6d5e3b7ae6bcb!2sGoogle%20Plex!5e0!3m2!1sen!2sus!4v1624055642961!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
          ></iframe>
        </section> */}
      </div>
      <Footer />
    </>
  );
}

export default ContactUs;