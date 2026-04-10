import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaPaperPlane, FaGithub } from 'react-icons/fa';

const Footer: React.FC = () => {
  const footerLinks = [
    { href: "#home", text: "Home" },
    { href: "#about", text: "About" },
    { href: "#courses", text: "Courses" },
    { href: "#trainers", text: "Trainers" },
    { href: "#contact", text: "Contact" },
  ];

  return (
    <footer className="section-footer" id="footer">
      <div className="footer-box container">
        <div className="contact-details">
          <h2 className="margin-bottom">
            <span className="yellow">GYM</span> Fitness Hub
          </h2>

          <ul className="contact-data">
            <li className="location">Plot 25-A, Block-10, Korangi, Karachi, Pakistan</li>
            <li className="phone">+92-300-1234567</li>
            <li className="email">info@gymfitnessshub.pk</li>
            <li className="social flex space-x-4"> {/* Using Tailwind for spacing */}
              <a href="https://www.facebook.com/gymfitnessshub" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook className="text-blue-600 hover:text-blue-800 transition-colors duration-200" size={36} />
              </a>
              <a href="https://www.instagram.com/gymfitnessshub.pk" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram className="text-pink-600 hover:text-pink-800 transition-colors duration-200" size={36} />
              </a>
              <a href="https://www.twitter.com/gymfitnessshub" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter className="text-blue-400 hover:text-blue-600 transition-colors duration-200" size={36} />
              </a>
              <a href="https://wa.me/923001234567?text=Hi!%20I%20want%20to%20know%20more%20about%20your%20membership%20plans" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <FaWhatsapp className="text-green-500 hover:text-green-700 transition-colors duration-200" size={36} />
              </a>
            </li>
          </ul>
        </div>

        <nav className="footer-nav" aria-label="navigation">
          <div className="nav-name">Quick Links</div>
          <ul>
            {footerLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href}>{link.text}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="newsletter">
          <div className="newsletter__title">Newsletter</div>
          <div className="newsletter__text">
            Subscribe to our newsletter for fitness tips, workouts, and exclusive membership offers delivered to your inbox.
          </div>
          <form className="newsletter__input flex items-center">
            <input type="email" className="form" placeholder="example.com" />
            <FaPaperPlane className="text-blue-500 hover:text-blue-700 transition-colors duration-200 ml-2" size={36} /> {/* Using FaPaperPlane icon */}
          </form>
        </div>

        <div className="legal">
          <p className="text">Copyright © 2025 by GYM Fitness Hub. All rights reserved.</p>
          <a href="https://github.com/IsmailAbdulkareem" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-black hover:text-gray-700 transition-colors duration-200" size={36} /> {/* Using FaGithub icon */}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
