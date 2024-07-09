import React from 'react';
import './ContactUs.css';

function ContactUs() {
  return (
    <div className="contact-us">
      <h1>Contact Us</h1>
      <form>
        <label>Name:</label>
        <input type="text" name="name" />
        <label>Email:</label>
        <input type="email" name="email" />
        <label>Message:</label>
        <textarea name="message"></textarea>
        <button type="submit">Submit</button>
      </form>
      <address>
        <p>123 ShipHit Street, Transport City, Country</p>
        <p>Email: contact@shiphit.com</p>
      </address>
      <footer>© 2024 ShipHit</footer>
    </div>
  );
}

export default ContactUs;