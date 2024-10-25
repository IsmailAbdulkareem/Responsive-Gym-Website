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
            <span className="yellow">M</span>Fitness
          </h2>

          <ul className="contact-data">
            <li className="location">100 Nallin Street, New York</li>
            <li className="phone">+00 000 000 00</li>
            <li className="email">MFitness@domain.com</li>
            <li className="social flex space-x-4"> {/* Using Tailwind for spacing */}
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook className="text-blue-600 hover:text-blue-800 transition-colors duration-200" size={36} />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram className="text-pink-600 hover:text-pink-800 transition-colors duration-200" size={36} />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter className="text-blue-400 hover:text-blue-600 transition-colors duration-200" size={36} />
              </a>
              <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, nisi!
          </div>
          <form className="newsletter__input flex items-center">
            <input type="email" className="form" placeholder="example.com" />
            <FaPaperPlane className="text-blue-500 hover:text-blue-700 transition-colors duration-200 ml-2" size={36} /> {/* Using FaPaperPlane icon */}
          </form>
        </div>

        <div className="legal">
          <p className="text">Copyright © by ISMAIL ABDUL KAREEM</p>
          <a href="https://github.com/IsmailAbdulkareem" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-black hover:text-gray-700 transition-colors duration-200" size={36} /> {/* Using FaGithub icon */}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
