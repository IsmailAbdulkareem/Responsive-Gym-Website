"use client";

import React, { useState, useRef, useEffect, FormEvent } from 'react';
import { Message, QuickAction, LeadFormData, TrialFormData, Lead, ChatResponse } from '@/types/chat';
import ChatMessage from './ChatMessage';
import QuickActions from './QuickActions';
import LeadForm from './LeadForm';
import TrialForm from './TrialForm';
import ActionCard from './ActionCard';
import TypingIndicator from './TypingIndicator';
import { FiX, FiSend } from 'react-icons/fi';
import { GiWeightLiftingUp } from 'react-icons/gi';

interface ChatWindowProps {
  onClose: () => void;
}

const QUICK_ACTIONS: QuickAction[] = [
  { label: 'Membership Pricing', icon: '💰', message: 'Tell me about membership pricing' },
  { label: 'Gym Timings', icon: '⏰', message: 'What are your gym timings?' },
  { label: 'Our Coaches', icon: '🏋️', message: 'Tell me about your coaches' },
  { label: 'Group Classes', icon: '🏃', message: 'What group classes do you offer?' },
  { label: 'Location & Map', icon: '📍', message: 'Where are you located?' },
  { label: 'Free Trial Pass', icon: '🎁', message: 'I want a free trial pass' },
  { label: 'Contact Us', icon: '📞', message: 'How can I contact you?' },
];

const WELCOME_MESSAGE: Message = {
  id: '0',
  role: 'assistant',
  content: "Hey there! 💪 Welcome to GYM Fitness Hub! I'm here to help you find the perfect membership, answer questions about our facilities, or book your FREE trial pass. What would you like to know?",
  timestamp: new Date(),
};

const ChatWindow: React.FC<ChatWindowProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [showQuickActions, setShowQuickActions] = useState(true);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [showTrialForm, setShowTrialForm] = useState(false);
  const [isSubmittingLead, setIsSubmittingLead] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, showLeadForm, showTrialForm]);

  const sendMessage = async (content: string) => {
    if (!content.trim() || isSending) return;

    // Hide quick actions after first user message
    setShowQuickActions(false);

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: content.trim(),
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsSending(true);
    setIsTyping(true);

    try {
      // Prepare messages for API (exclude action field)
      const apiMessages = messages.map(msg => ({
        role: msg.role,
        content: msg.content
      }));

      apiMessages.push({
        role: 'user',
        content: content.trim()
      });

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: apiMessages }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data: ChatResponse = await response.json();

      // Add assistant message
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.message,
        action: data.action,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, assistantMessage]);

      // Handle actions
      if (data.action === 'SHOW_LEAD_FORM') {
        setShowLeadForm(true);
        setShowTrialForm(false);
      } else if (data.action === 'SHOW_TRIAL') {
        setShowTrialForm(true);
        setShowLeadForm(false);
      } else {
        setShowLeadForm(false);
        setShowTrialForm(false);
      }

    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: "Sorry, I'm having a technical issue right now. Please WhatsApp us directly for immediate assistance! 💬",
        action: 'SHOW_CONTACT',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
      setIsSending(false);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    sendMessage(inputValue);
  };

  const handleQuickAction = (message: string) => {
    sendMessage(message);
  };

  const handleLeadSubmit = async (data: LeadFormData) => {
    setIsSubmittingLead(true);

    const lead: Lead = {
      ...data,
      type: 'MEMBERSHIP_INQUIRY',
      timestamp: new Date().toISOString(),
      source: 'Gym Website Chatbot'
    };

    try {
      const response = await fetch('/api/send-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lead }),
      });

      const result = await response.json();

      if (result.success) {
        setShowLeadForm(false);
        const successMessage: Message = {
          id: Date.now().toString(),
          role: 'assistant',
          content: `✅ Done! Our team will contact you within a few hours. You can also WhatsApp us directly at +92-300-1234567.`,
          action: 'SHOW_CONTACT',
          timestamp: new Date(),
        };
        setMessages(prev => [...prev, successMessage]);
      } else {
        throw new Error(result.error || 'Failed to submit');
      }
    } catch (error) {
      console.error('Lead submission error:', error);
      const errorMessage: Message = {
        id: Date.now().toString(),
        role: 'assistant',
        content: "Something went wrong sending your details. Please WhatsApp us at +92-300-1234567 directly.",
        action: 'SHOW_CONTACT',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsSubmittingLead(false);
    }
  };

  const handleTrialSubmit = async (data: TrialFormData) => {
    setIsSubmittingLead(true);

    const lead: Lead = {
      fullName: data.fullName,
      phone: data.phone,
      interestedIn: 'Free Trial Pass',
      bestTimeToCall: 'Anytime',
      type: 'FREE_TRIAL',
      timestamp: new Date().toISOString(),
      source: 'Gym Website Chatbot'
    };

    try {
      const response = await fetch('/api/send-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lead }),
      });

      const result = await response.json();

      if (result.success) {
        setShowTrialForm(false);
        const successMessage: Message = {
          id: Date.now().toString(),
          role: 'assistant',
          content: `🎉 Awesome! Your FREE trial pass is confirmed! Our team will contact you shortly to schedule your visit. Get ready to transform! 💪`,
          timestamp: new Date(),
        };
        setMessages(prev => [...prev, successMessage]);
      } else {
        throw new Error(result.error || 'Failed to submit');
      }
    } catch (error) {
      console.error('Trial submission error:', error);
      const errorMessage: Message = {
        id: Date.now().toString(),
        role: 'assistant',
        content: "Something went wrong. Please WhatsApp us at +92-300-1234567 to claim your free trial.",
        action: 'SHOW_CONTACT',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsSubmittingLead(false);
    }
  };

  return (
    <div className="flex flex-col h-full bg-[#0a0a0a]">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 bg-gradient-to-r from-orange-500 to-red-500 shadow-lg">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <GiWeightLiftingUp className="text-white text-xl" />
          </div>
          <div>
            <h2 className="text-white font-bold text-lg">Gym Assistant</h2>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white/90 text-xs">Online</span>
            </div>
          </div>
        </div>
        <button
          onClick={onClose}
          className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors duration-300"
          aria-label="Close chat"
        >
          <FiX className="text-white text-xl" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
        {messages.map((message) => (
          <div key={message.id}>
            <ChatMessage message={message} />
            {message.action && (message.action === 'SHOW_MAP' || message.action === 'SHOW_CONTACT') && (
              <ActionCard action={message.action} />
            )}
          </div>
        ))}

        {isTyping && (
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
              <GiWeightLiftingUp className="text-orange-500 text-sm" />
            </div>
            <TypingIndicator />
          </div>
        )}

        {showQuickActions && (
          <QuickActions actions={QUICK_ACTIONS} onActionClick={handleQuickAction} />
        )}

        {showLeadForm && (
          <LeadForm onSubmit={handleLeadSubmit} isSubmitting={isSubmittingLead} />
        )}

        {showTrialForm && (
          <TrialForm onSubmit={handleTrialSubmit} isSubmitting={isSubmittingLead} />
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="px-4 py-4 bg-gray-900 border-t border-gray-800">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your message..."
            disabled={isSending}
            className="flex-1 bg-gray-800 border border-gray-700 rounded-full px-5 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={!inputValue.trim() || isSending}
            className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-orange-500/50"
            aria-label="Send message"
          >
            <FiSend className="text-white" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatWindow;
