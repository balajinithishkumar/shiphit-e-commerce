import './Home.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Footer from "./Footer";

function Home() {
  return (
    <div className="home">
      {/* <h1>Welcome to Petti Ecom</h1> */}
      {/* <p>Your one-stop shop for handcrafted items, musical instruments, paintings, and food products.</p> */}
      <img  style={{width:"100%"}} src={"/home-banner3.png"} alt="Home" className="home-image" />
      <section className="intro">
        <div className="intro-content">
          <img style={{borderRadius:"3px"}} src="home-about.png" alt="About Us" className="intro-image" />
          <div className="intro-text">
            <h2>About Petti Ecom</h2>
            <p>Welcome to Petti Ecom, your premier destination for exquisite handcrafted items, musical instruments, paintings, and gourmet food products. Our collection is a celebration of exceptional craftsmanship and cultural artistry, perfect for unique home decor or thoughtful gifts. Experience the beauty and quality of our curated selection today!</p>
            <p className="tagline">Discover the Artistry in Every Product</p>
            <button className="shop-now-button">Shop Now</button>
          </div>
        </div>
      </section>
      <section className="featured-products">
        <h2>Frequently Sold Products</h2>
        <div className="product-grid">
          <div className="product-card">
            <img src="thanjure.png" alt="Handcraft 1" />
            <h3>Tanjore</h3>
            <p className="product-description">Introducing the Thanjavur Painting – a masterpiece of beauty and cultural reverence for your home decor. Crafted with meticulous detail, this traditional artwork captures the sacred essence of Indian heritage, symbolizing prosperity and fulfillment.</p>
            <p className="product-price">$20</p>
          </div>
          <div className="product-card">
            <img src="home-product2.png" alt="Instrument 1" />
            <h3>Vailin</h3>
            <p className="product-description">Experience effortless elegance with the Vailin Dress, crafted from luxurious silk and featuring a timeless A-line silhouette. Perfect for any occasion, its delicate lace detailing and flowing sleeves add a touch of grace and sophistication to your wardrobe.</p>
            <p className="product-price">$100</p>
          </div>
          <div className="product-card">
            <img src="indian-product1.png" alt="Painting 1" />
            <h3>Taste & Nutrition Essentials</h3>
            <p className="product-description">Enhance your pantry with our selection of products from Amul, Parle, and Nutri Choice. Each item is crafted with quality ingredients, offering a blend of taste and nutrition that elevates your daily meals and snacks.</p>
            <p className="product-price">$200</p>
          </div>
          <div className="product-card">
            <img src="indian-handicraft1.png" alt="Food Product 1" />
           <h3>Graceful Elephants</h3>
            <p className="product-description">Explore the exotic charm of our Handcrafted Elephant collection. Adorn your space with these intricate artworks, meticulously crafted to embody the grace and majesty of elephants. Each piece showcases unique details, making it a captivating addition to your decor.</p>
            <p className="product-price">$10</p>
          </div>
        </div>
      </section>
      <section className="testimonials">
        <div>
        <h2>Customer Testimonials</h2>
        <div className="testimonial">
          <p>Petti Ecom provides an amazing selection of handcrafted items. Their service is top-notch!</p>
          <span>- Jane Doe</span>
        </div>
        <div className="testimonial">
          <p>I love the musical instruments I bought from Petti Ecom. Highly recommend!</p>
          <span>- John Smith</span>
        </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;


