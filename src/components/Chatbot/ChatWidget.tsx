"use client";

import React, { useState, useEffect } from 'react';
import ChatWindow from './ChatWindow';
import { FiMessageCircle } from 'react-icons/fi';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showBadge, setShowBadge] = useState(true);

  useEffect(() => {
    // Hide badge after 5 seconds
    const timer = setTimeout(() => {
      setShowBadge(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setShowBadge(false);
  };

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 md:bottom-24 md:right-6 w-[calc(100vw-2rem)] md:w-[400px] h-[600px] max-h-[calc(100vh-8rem)] bg-[#0a0a0a] rounded-2xl shadow-2xl border border-gray-800 z-[9999] animate-slideUp overflow-hidden">
          <ChatWindow onClose={toggleChat} />
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 rounded-full shadow-2xl flex items-center justify-center z-[9999] transition-all duration-300 hover:scale-110 group"
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {/* Pulsing Ring Animation */}
        <span className="absolute inset-0 rounded-full bg-orange-500 animate-ping opacity-75" />

        {/* Icon */}
        <FiMessageCircle className="text-white text-2xl md:text-3xl relative z-10 group-hover:rotate-12 transition-transform duration-300" />

        {/* Unread Badge */}
        {!isOpen && showBadge && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 border-2 border-[#0a0a0a] rounded-full flex items-center justify-center animate-bounce">
            <span className="text-white text-xs font-bold">1</span>
          </span>
        )}
      </button>
    </>
  );
};

export default ChatWidget;
