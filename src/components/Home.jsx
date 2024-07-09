import './Home.css';
import homeImage from '../assets/images/home-image.png';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Footer from "./Footer"
function Home() {
  return (
    <div className="home">
      <h1>Welcome to ShipHit</h1>
      <p>Your one-stop shop for handcrafted items, musical instruments, paintings, and food products.</p>
      <img src={homeImage} alt="Home" className="home-image" />
      <section className="intro">
        <h2>About ShipHit</h2>
        <p>ShipHit is an international transporter of handcrafted items, musical instruments, paintings, and food products. We pride ourselves on delivering quality products with exceptional customer service.</p>
      </section>
      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-grid">
          <div className="product-card">
            <img src="home-product1.png" alt="Handcraft 1" />
            <p>Handcraft 1</p>
            <p>$20</p>
          </div>
          <div className="product-card">
            <img src="home-product2.png" alt="Instrument 1" />
            <p>Instrument 1</p>
            <p>$100</p>
          </div>
          <div className="product-card">
            <img src="home-product5.png" alt="Painting 1" />
            <p>Painting 1</p>
            <p>$200</p>
          </div>
          <div className="product-card">
            <img src="home-product4.png" alt="Food Product 1" />
            <p>Food Product 1</p>
            <p>$10</p>
          </div>
        </div>
      </section>
      <section className="testimonials">
        <h2>Customer Testimonials</h2>
        <div className="testimonial">
          <p>ShipHit provides an amazing selection of handcrafted items. Their service is top-notch!</p>
          <span>- Jane Doe</span>
        </div>
        <div className="testimonial">
          <p>I love the musical instruments I bought from ShipHit. Highly recommend!</p>
          <span>- John Smith</span>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
