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
              Founded in 2023, Petti Ecom is dedicated to providing seamless
              international courier services. We specialize in delivering a wide
              range of products, ensuring safe and efficient transportation to
              customers worldwide. Our commitment to reliable and timely delivery
              sets us apart in the global logistics industry.
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
              At Petti Ecom, our mission is to revolutionize international
              shipping by providing dependable and efficient courier services.
              We are committed to enhancing global connectivity through superior
              logistics, ensuring every shipment is handled with the utmost care
              and delivered on time. Our goal is to support businesses and
              customers worldwide by making cross-border shipping as smooth as
              possible.
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
            Our dedicated team at Petti Ecom ensures excellence in international
            courier services. From logistics professionals to customer support
            experts, each member is committed to providing top-notch service and
            solutions for our global clientele. Our team's expertise and
            dedication are the driving forces behind our successful operations
            and customer satisfaction.
          </p>
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default AboutUs;
