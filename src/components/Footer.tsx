"use client";

import React, { memo, useState, useCallback, FormEvent } from 'react';
import { 
  FiFacebook, 
  FiInstagram, 
  FiTwitter, 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiSend,
  FiActivity,
  FiArrowUp
} from 'react-icons/fi';
import { FaWhatsapp, FaGithub } from 'react-icons/fa';

interface FooterLink {
  href: string;
  label: string;
}

const footerLinks: FooterLink[] = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#courses', label: 'Courses' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#booking', label: 'Booking' },
  { href: '#contact', label: 'Contact' },
];

const socialLinks = [
  { icon: <FiFacebook />, href: 'https://www.facebook.com/gymfitnessshub', label: 'Facebook', color: 'hover:text-blue-600' },
  { icon: <FiInstagram />, href: 'https://www.instagram.com/gymfitnessshub.pk', label: 'Instagram', color: 'hover:text-pink-600' },
  { icon: <FiTwitter />, href: 'https://www.twitter.com/gymfitnessshub', label: 'Twitter', color: 'hover:text-blue-400' },
  { icon: <FaWhatsapp />, href: 'https://wa.me/923279671138', label: 'WhatsApp', color: 'hover:text-green-500' },
];

const Footer: React.FC = memo(() => {
  const [email, setEmail] = useState<string>('');

  const handleSubscribe = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Subscribed with:', email);
    setEmail('');
  }, [email]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <footer id="footer" className="bg-gray-900 relative">
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-black shadow-lg hover:bg-yellow-500 transition-all duration-300 hover:-translate-y-1"
        aria-label="Scroll to top"
      >
        <FiArrowUp className="text-xl" />
      </button>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-2 mb-6">
              <FiActivity className="text-yellow-400 text-3xl" />
              <div>
                <span className="text-2xl font-black">
                  <span className="text-yellow-400">GYM</span>
                  <span className="text-white"> Fitness</span>
                </span>
                <span className="block text-[0.6rem] uppercase tracking-[0.3em] text-gray-400 -mt-1">Hub</span>
              </div>
            </a>
            <p className="text-gray-400 leading-relaxed mb-6">
              Your premier destination for complete fitness transformation in Korangi, Karachi. 
              Join our community of 5000+ members today.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 ${social.color} hover:bg-gray-700 transition-all duration-300`}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wide">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-yellow-400 transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wide">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FiMapPin className="text-yellow-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">Plot 25-A, Block-10, Korangi, Karachi, Pakistan</span>
              </li>
              <li className="flex items-center gap-3">
                <FiPhone className="text-yellow-400 flex-shrink-0" />
                <a href="tel:+923001234567" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                  +92-300-1234567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FiMail className="text-yellow-400 flex-shrink-0" />
                <a href="mailto:info@gymfitnesshub.pk" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                  info@gymfitnesshub.pk
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wide">Newsletter</h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Subscribe for fitness tips, workouts, and exclusive membership offers.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
              />
              <button
                type="submit"
                className="bg-yellow-400 text-black px-4 py-3 rounded-lg hover:bg-yellow-500 transition-colors duration-300"
                aria-label="Subscribe to newsletter"
              >
                <FiSend className="text-xl" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              Copyright © {new Date().getFullYear()} GYM Fitness Hub. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/IsmailAbdulkareem"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors duration-300 flex items-center gap-2"
              >
                <FaGithub className="text-xl" />
                <span className="text-sm">Developed by Ismail Abdulkareem</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;
