import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok, FaYoutube } from 'react-icons/fa';
import logo from "../assest/_logo_footer.svg";
import appstore from "../assest/appstore.svg";
import googleplay from "../assest/googleplay.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__left">
          <img src={logo} alt='logo'/>
          <p>
            Gelato has created the world’s largest network for local production
            and distribution of customized products. Together we bring creativity to life – and into business.
          </p>
          <button className="btn">Get started</button>
          <div className="app-links">
            <img src={appstore} alt="App Store" />
            <img src={googleplay} alt="Google Play" />
          </div>
        </div>
        <div className="footer__right">
          <div className="footer__column">
            <h3>Print on demand</h3>
            <ul>
              <li>What is print on demand?</li>
              <li>Product catalog</li>
              <li>Shipping and delivery</li>
              <li>Pro sellers</li>
              <li>Sustainability</li>
            </ul>
          </div>
          <div className="footer__column">
            <h3>Integrations</h3>
            <ul>
              <li>Shopify</li>
              <li>Etsy</li>
              <li>WooCommerce</li>
              <li>Squarespace</li>
              <li>API</li>
            </ul>
          </div>
          <div className="footer__column">
            <h3>Start selling</h3>
            <ul>
              <li>Embroidery</li>
              <li>Print on demand t-shirts</li>
              <li>Custom merchandise</li>
              <li>Print on demand mugs</li>
              <li>Custom products</li>
            </ul>
          </div>
          <div className="footer__column">
            <h3>Company</h3>
            <ul>
              <li>About Gelato</li>
              <li>Careers</li>
              <li>Partners</li>
              <li>Customer Stories</li>
              <li>Affiliate program</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
      <div className="social-media">
          <a href="/"><FaInstagram /></a>
          <a href="/"><FaFacebookF /></a>
          <a href="/"><FaTiktok /></a>
          <a href="/"><FaLinkedinIn /></a>
          <a href="/"><FaYoutube /></a>
        </div>
        <div className="legal">
          <a href="/">Contact us</a>
          <a href="/">Legal</a>
          <a href="/">Privacy policy</a>
          <a href="/">Cookie policy</a>
        </div>
        <div className="language-selector">
          <select>
            <option value="en">English (India)</option>
            <option value="en-US">English (US)</option>
          </select>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
