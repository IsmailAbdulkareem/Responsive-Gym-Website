"use client"; // Mark this component as a client component

import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage the mobile menu toggle

  return (
    <header className="header" id="home">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="logo text-white text-2xl"> {/* Increased logo size */}
          <span className="text-yellow-400">ISMAIL</span>Fitness
        </div>
        <nav className="md:flex hidden">
          <ul className="flex space-x-8 text-xl list-none font-bold"> {/* Increased text size */}
            <li><a href="#" className="text-white hover:text-yellow-400">Home</a></li>
            <li><a href="#about" className="text-white hover:text-yellow-400">About</a></li>
            <li><a href="#courses" className="text-white hover:text-yellow-400">Courses</a></li>
            <li><a href="#trainers" className="text-white hover:text-yellow-400">Trainers</a></li>
            <li><a href="#contact" className="text-white hover:text-yellow-400">Contact</a></li>
            <li><a href="#offer" className="text-yellow-400 hover:text-yellow-600">Become a Member</a></li>
          </ul>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white text-2xl"> {/* Increased button size */}
            {isOpen ? '✖' : '☰'} {/* Show an 'X' when menu is open */}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-gray-800">
          <ul className="flex flex-col space-y-4 p-4 text-xl"> {/* Increased text size for mobile menu */}
            <li><a href="#" className="text-white hover:text-yellow-400">Home</a></li>
            <li><a href="#about" className="text-white hover:text-yellow-400">About</a></li>
            <li><a href="#courses" className="text-white hover:text-yellow-400">Courses</a></li>
            <li><a href="#trainers" className="text-white hover:text-yellow-400">Trainers</a></li>
            <li><a href="#contact" className="text-white hover:text-yellow-400">Contact</a></li>
            <li><a href="#offer" className="text-yellow-400 hover:text-yellow-600">Become a Member</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
