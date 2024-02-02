import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: contact@example.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          {/* Add social media icons or links */}
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2023 Your Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
