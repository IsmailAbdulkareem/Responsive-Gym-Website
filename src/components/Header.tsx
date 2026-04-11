"use client";

import React, { useState, useCallback, useEffect, memo } from 'react';
import { FiMenu, FiX, FiActivity } from 'react-icons/fi';

interface NavLink {
  href: string;
  label: string;
  isCTA?: boolean;
}

const navLinks: NavLink[] = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#courses', label: 'Courses' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#booking', label: 'Booking' },
  { href: '#contact', label: 'Contact' },
  { href: '#booking', label: 'Join Now', isCTA: true },
];

const Header: React.FC = memo(() => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <header 
      id="home"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-gray-900/95 backdrop-blur-md shadow-2xl py-3' 
          : 'bg-gradient-to-b from-black/80 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="relative">
              <FiActivity className="text-yellow-400 text-3xl transition-transform duration-300 group-hover:rotate-12" />
              <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tight">
                <span className="text-yellow-400">GYM</span>
                <span className="text-white"> Fitness</span>
              </span>
              <span className="text-[0.6rem] uppercase tracking-[0.3em] text-gray-400 -mt-1">Hub</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-semibold uppercase tracking-wide transition-all duration-300 ${
                  link.isCTA
                    ? 'bg-yellow-400 text-black hover:bg-yellow-500 hover:shadow-lg hover:shadow-yellow-400/25 ml-2'
                    : 'text-white hover:text-yellow-400 hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden relative w-12 h-12 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            <div className="relative w-6 h-6">
              <span className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${isOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`}>
                <FiMenu className="text-white text-2xl" />
              </span>
              <span className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${isOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`}>
                <FiX className="text-yellow-400 text-2xl" />
              </span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="bg-gray-900/95 backdrop-blur-md rounded-xl p-4 border border-white/10" aria-label="Mobile navigation">
            <ul className="flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <li
                  key={link.href}
                  className={`transition-all duration-300 ${
                    isOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className={`block px-4 py-3 rounded-lg text-center font-semibold uppercase tracking-wide transition-all duration-300 ${
                      link.isCTA
                        ? 'bg-yellow-400 text-black hover:bg-yellow-500'
                        : 'text-white hover:text-yellow-400 hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
});

Header.displayName = 'Header';

export default Header;
