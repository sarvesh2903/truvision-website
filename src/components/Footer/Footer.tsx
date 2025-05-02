import "./Footer.scss";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h2 className="logo">TruVision</h2>
          <p>See the world in Tru Style</p>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>
            {" "}
            Shop no 06, thakarshi complex, beside national jewelers, Wada,
            Maharashtra 421303
          </p>
          <p>
            Email: <a href="mailto:info@truvision.com">info@truvision.com</a>
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#categories">Categories</a>
            </li>
            <li>
              <a href="#reviews">Reviews</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="icons">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} TruVision. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
