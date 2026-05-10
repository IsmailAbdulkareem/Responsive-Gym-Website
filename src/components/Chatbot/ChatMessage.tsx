"use client";

import React from 'react';
import { Message } from '@/types/chat';
import { FiUser } from 'react-icons/fi';
import { GiWeightLiftingUp } from 'react-icons/gi';

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.role === 'user';
  const timestamp = new Date(message.timestamp).toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });

  return (
    <div className={`flex gap-3 ${isUser ? 'flex-row-reverse' : 'flex-row'} mb-4 animate-fadeIn`}>
      {/* Avatar */}
      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
        isUser ? 'bg-gradient-to-br from-orange-500 to-red-500' : 'bg-gray-700'
      }`}>
        {isUser ? (
          <FiUser className="text-white text-sm" />
        ) : (
          <GiWeightLiftingUp className="text-orange-500 text-sm" />
        )}
      </div>

      {/* Message Bubble */}
      <div className={`flex flex-col ${isUser ? 'items-end' : 'items-start'} max-w-[75%]`}>
        <div className={`px-4 py-3 rounded-2xl ${
          isUser
            ? 'bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-br-sm'
            : 'bg-gray-800 text-gray-100 rounded-bl-sm'
        }`}>
          <p className="text-sm leading-relaxed whitespace-pre-wrap break-words">
            {message.content}
          </p>
        </div>
        <span className="text-xs text-gray-500 mt-1 px-1">{timestamp}</span>
      </div>
    </div>
  );
};

export default ChatMessage;
