import React from "react";
import "./Footer.css";
import us from "../assets/United States of America (Us).png";
import star from "../assets/Star 1.png";
import instalink from "../assets/Frame 28.png";
import gpay from "../assets/gpay.png";
import master from "../assets/redor.png";
import pp from "../assets/pp.png";
import amex from "../assets/vector.png";
import apay from "../assets/apple.png";
import pay from "../assets/pay.png";



const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-top">
      <div className="newsletter">
        <h3>BE THE FIRST TO KNOW</h3>
        <p>Sign up for updates from mettā muse.</p>
        <div className="newsletter-input">
          <input type="email" placeholder="Enter your e-mail..." />
          <button>SUBSCRIBE</button>
        </div>
      </div>
      <div className="footer-column contact-currency">
          <div className="contact-info">
            <h4>CONTACT US</h4>
            <p>+44 221 133 5360</p>
            <p>customercare@mettamuse.com</p>
          </div>
          <div className="currency-info">
            <h4>CURRENCY</h4>
            <div className="currency-icon">
                <img src={us} alt="US" className="us-img" /> 
                <img src={star} alt="star" className="star-img" /> 
                 <p>USD</p>
            </div>
            <p>
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </p>
          </div>
        </div>
        </div>
      <div className="footer-divider" />

      <div className="footer-main">
        <div className="footer-column">
          <h4>mettā muse</h4>
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>QUICK LINKS</h4>
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>FOLLOW US</h4>
          <div className="social-icons">
            <img src={instalink} className="fa-brands fa-instagram" />
            
          </div>

          <h4>mettā muse ACCEPTS</h4>
          <div className="payment-icons">
            <img className="pay-img" src={gpay} alt="Google Pay" />
            <img className="pay-img" src={master} alt="Mastercard" />
            <img className="pay-img" src={pp} alt="Paypal" />
            <img className="amex" src={amex} alt="Amex" />
            <img className="pay-img" src={apay} alt="Apple Pay" />
            <img className="pay-img" src={pay} alt="Pay" />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2023 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
