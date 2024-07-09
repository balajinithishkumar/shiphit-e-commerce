import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import "./Footer.css"
function Footer() {
  return (
    <footer className="footer">
    <div className="footer-content">
      <div className="footer-logo">
        <img src="logo.png" alt="ShipHit Logo" />
      </div>
      <div className="footer-info">
        <p>Address: 1234 ShipHit Lane, Transport City, Country</p>
        <p>Phone: (123) 456-7890</p>
      </div>
      <div className="footer-social">
        <FaFacebook className="social-icon" />
        <FaTwitter className="social-icon" />
        <FaInstagram className="social-icon" />
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; 2024 ShipHit. All rights reserved. | Terms of Service</p>
    </div>
  </footer>
  )
}

export default Footer