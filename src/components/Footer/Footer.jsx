import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer-content">
        
        {/* Left */}
        <div className="footer-section">
          <h2 className="footer-logo">Cravings</h2>
          <p className="footer-tagline">
            Where every bite, feels right.
          </p>
        </div>

        {/* Middle */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
          </ul>
        </div>

        {/* Right */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Your Address Here</p>
          <p>+1 (234) 567-8900</p>
          <p>hello@cravings.com</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Cravings. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;