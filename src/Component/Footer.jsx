import React from "react";
import "../Style/Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-about">
          <h2>SkillSwap</h2>
          <p>
            A global platform where people exchange skills,
            learn together, and grow professionally.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Explore Skills</li>
            <li>My Swaps</li>
            <li>Messages</li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>
          <p>Email: support@skillswap.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 SkillSwap. All rights reserved.</p>
      </div>

    </footer>
  );
}

export default Footer;