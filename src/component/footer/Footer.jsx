import "./footer.css";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <h3 className="website-logo textNaranja">PROSIGMA</h3>
        <div className="footer-content-container">
          <span className="footer-info">+58-424-2812010</span>
          <span className="footer-info">INFO@PROSIGMAUSA.COM</span>
        </div>
        <div className="footer-menus">
          <div className="footer-content-container">
            <a href="#home" className="menu-item-footer">
              Home
            </a>
            <a href="#about" className="menu-item-footer">
              About
            </a>
            <a href="#services" className="menu-item-footer">
              Services
            </a>
            <a href="#location" className="menu-item-footer">
              Location
            </a>
            <a href="#contact" className="menu-item-footer">
              Contact us
            </a>
          </div>
        </div>

        <div className="footer-content-container">
          <div className="social-container">
            <a href="" className="social-link">
              <FaFacebookF color="white" size={20} />
            </a>
            <a href="" className="social-link">
              <FaInstagram color="white" size={20} />
            </a>
            <a href="" className="social-link">
              <FaXTwitter color="white" size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="copyright-container">
        <span className="copyright">
          Copyright 2024, Prosigmausa.com. All rights reserved.
        </span>
      </div>
    </footer>
  );
};
