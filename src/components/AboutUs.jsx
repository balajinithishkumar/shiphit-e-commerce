import { Link } from "react-router-dom";
import "./AboutUs.css";
import Footer from "./Footer";
import Navbar from "./Navbar";

function AboutUs() {
  return (
    <div className="">
      <Navbar/>
      <div className="about-us">
        <section className="company-overview">
          <div className="content-text">
            <h2>Company Overview</h2>
            <p className="content">
              Founded in 2023, Petti Ecom is dedicated to bridging the gap
              between artisans and customers worldwide. We specialize in
              transporting handcrafted items, musical instruments, paintings,
              and food products, ensuring that each item is delivered safely and
              efficiently. Our commitment to quality and customer satisfaction
              is unmatched in the industry.
            </p>
            <Link to="/contact">
            <button className="shop-now-button">Know more</button>
            </Link>
          </div>
          <div>
            <img
              src="about-image2.png"
              alt="Our Team"
              className="overview-image"
            />
          </div>
        </section>
        <section className="our-mission company-overview">
          <div className="content-text">
            <h2>Our Mission</h2>
            <p className="content">
              Our mission at Petti Ecom is to empower local artisans and small
              businesses by providing a global platform to showcase and sell
              their unique products. We are dedicated to fostering sustainable
              practices and supporting communities through fair trade. By
              promoting cultural appreciation and economic growth, we aim to
              deliver high-quality, one-of-a-kind items to customers around the
              world.
            </p>
            <Link to="/contact">
            <button className="shop-now-button">Contact us</button>
            </Link>
          </div>
          <div>
            <img
              src="about-image.png"
              alt="Our Mission"
              className="mission-image"
            />
          </div>
        </section>
        <section className="our-team">
          <h2>Our Team</h2>
          <p className="text">
            At Petti Ecom, our diverse team is the backbone of our success. From
            logistics experts to customer service representatives, each member
            is passionate about making a difference. Our team's extensive
            experience and dedication ensure smooth operations and exceptional
            service for our customers.
          </p>
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default AboutUs;