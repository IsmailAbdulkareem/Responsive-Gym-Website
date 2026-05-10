"use client";

import React from 'react';

const TypingIndicator: React.FC = () => {
  return (
    <div className="flex items-center gap-1 px-4 py-3 bg-gray-800 rounded-2xl rounded-bl-sm w-fit">
      <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
      <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
      <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
    </div>
  );
};

export default TypingIndicator;
