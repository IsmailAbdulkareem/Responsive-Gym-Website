"use client";

import React, { memo } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { FiMessageCircle } from 'react-icons/fi';

const WhatsAppButton: React.FC = memo(() => {
  const whatsappNumber = '923279671138';
  const message = 'Hi! I want to know more about GYM Fitness Hub membership plans.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      {/* Pulse Animation */}
      <span className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-25" />
      
      {/* Button */}
      <div className="relative w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-green-500/50">
        <FaWhatsapp className="text-white text-3xl" />
      </div>
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-gray-900 text-white text-sm px-4 py-2 rounded-lg whitespace-nowrap shadow-lg">
          <div className="flex items-center gap-2">
            <FiMessageCircle />
            <span>Chat with us!</span>
          </div>
          {/* Arrow */}
          <div className="absolute top-full right-6 w-3 h-3 bg-gray-900 rotate-45 transform -translate-y-1.5" />
        </div>
      </div>
    </a>
  );
});

WhatsAppButton.displayName = 'WhatsAppButton';

export default WhatsAppButton;
