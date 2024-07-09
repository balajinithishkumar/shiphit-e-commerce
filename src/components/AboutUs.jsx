import './AboutUs.css';
import Footer from './Footer';

function AboutUs() {
  return (
    <div className="about-us">
      <section className="company-overview">
        <h2>Company Overview</h2>
        <p>Founded in 2024, ShipHit is dedicated to bridging the gap between artisans and customers worldwide. We specialize in transporting handcrafted items, musical instruments, paintings, and food products, ensuring that each item is delivered safely and efficiently. Our commitment to quality and customer satisfaction is unmatched in the industry.</p>
        <img src="about-image2.png" alt="Our Team" className="overview-image" />
      </section>
      <section className="our-mission">
        <h2>Our Mission</h2>
        <p>Our mission at ShipHit is to empower local artisans and small businesses by providing a global platform to showcase and sell their unique products. We are dedicated to fostering sustainable practices and supporting communities through fair trade. By promoting cultural appreciation and economic growth, we aim to deliver high-quality, one-of-a-kind items to customers around the world.</p>
        <img src="about-image.png" alt="Our Mission" className="mission-image" />
      </section>
      <section className="our-team">
        <h2>Our Team</h2>
        <p>At ShipHit, our diverse team is the backbone of our success. From logistics experts to customer service representatives, each member is passionate about making a difference. Our team's extensive experience and dedication ensure smooth operations and exceptional service for our customers.</p>
      </section>
      <Footer/>
    </div>
  );
}

export default AboutUs;