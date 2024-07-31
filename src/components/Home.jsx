import "./Home.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="">
      <Navbar />
      <div className="home">
        <img
          style={{ width: "100%" }}
          src={"/banner.svg"}
          alt="Home"
          className="home-image"
        />
        <section className="intro">
          <div className="intro-content">
            <div className="intro-text">
              <h2>About Petti Ecom</h2>
              <p>
                Welcome to Petti-Ecom, your trusted partner for international
                courier services. We specialize in providing reliable and
                efficient shipping solutions to ensure your packages reach their
                destination safely and on time. Whether You're sending
                documents, parcels, or freight, our global network and expertise
                in logistics make us the perfect choice for all your
                international shipping needs. Experience seamless and
                hassle-free delivery with Petti-Ecom today!
              </p>
              <p className="tagline">Discover the Artistry in Every Product</p>
              <Link to="/products/handicrafts">
                <button className="shop-now-button">Shop Now</button>
              </Link>
            </div>
            <img
              style={{ borderRadius: "3px" }}
              src="home-about.png"
              alt="About Us"
              className="intro-image"
            />
          </div>
        </section>
        <section className="featured-products">
          <h2>Frequently Sold Products</h2>
          <div className="product-grid">
            <div className="product-card">
              <img src="thanjure.png" alt="Handcraft 1" />
              <h3>Tanjore</h3>
              <p className="product-description">
                Introducing the Thanjavur Painting – a masterpiece of beauty and
                cultural reverence for your home decor. Crafted with meticulous
                detail, this traditional artwork captures the sacred essence of
                Indian heritage, symbolizing prosperity and fulfillment.
              </p>
              <p className="product-price">$20</p>
            </div>
            <div className="product-card">
              <img src="home-product2.png" alt="Instrument 1" />
              <h3>Vailin</h3>
              <p className="product-description">
                Experience effortless elegance with the Vailin Dress, crafted
                from luxurious silk and featuring a timeless A-line silhouette.
                Perfect for any occasion, its delicate lace detailing and
                flowing sleeves add a touch of grace and sophistication to your
                wardrobe.
              </p>
              <p className="product-price">$100</p>
            </div>
            <div className="product-card">
              <img src="indian-product1.png" alt="Painting 1" />
              <h3>Taste & Nutrition Essentials</h3>
              <p className="product-description">
                Enhance your pantry with our selection of products from Amul,
                Parle, and Nutri Choice. Each item is crafted with quality
                ingredients, offering a blend of taste and nutrition that
                elevates your daily meals and snacks.
              </p>
              <p className="product-price">$200</p>
            </div>
            <div className="product-card">
              <img src="indian-handicraft1.png" alt="Food Product 1" />
              <h3>Graceful Elephants</h3>
              <p className="product-description">
                Explore the exotic charm of our Handcrafted Elephant collection.
                Adorn your space with these intricate artworks, meticulously
                crafted to embody the grace and majesty of elephants. Each piece
                showcases unique details, making it a captivating addition to
                your decor.
              </p>
              <p className="product-price">$10</p>
            </div>
          </div>
        </section>

        <section className="testimonials">
          <div>
            <h2>Customer Testimonials</h2>
            <div className="testimonial">
              <p>
                Petti-Ecom's international courier service is exceptional. My
                packages always arrive on time and in perfect condition. Highly
                recommended!
              </p>
              <span>- John</span>
            </div>
            <div className="testimonial">
              <p>
                I've been using Petti-Ecom for all my international shipments,
                and their service is unparalleled. They handle everything with
                great care.
              </p>
              <span>- Sarah</span>
            </div>
            <div className="testimonial">
              <p>
                Petti-Ecom made my international shipping experience seamless
                and stress-free. Fantastic service!
              </p>
              <span>- Alex</span>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}

export default Home;