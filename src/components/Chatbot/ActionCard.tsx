"use client";

import React from 'react';
import { ActionType } from '@/types/chat';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

interface ActionCardProps {
  action: ActionType;
}

const ActionCard: React.FC<ActionCardProps> = ({ action }) => {
  const gymPhone = '+92-300-1234567';
  const gymWhatsApp = '923001234567';
  const gymEmail = 'info@gymfitnesshub.pk';
  const gymAddress = 'Plot 25-A, Block-10, Korangi, Karachi, Pakistan';
  const gymMapsLink = 'https://www.google.com/maps/search/?api=1&query=Plot+25-A+Block-10+Korangi+Karachi';

  if (action === 'SHOW_MAP') {
    return (
      <div className="bg-gray-900 border border-gray-700 rounded-2xl overflow-hidden mb-4 animate-fadeIn">
        <div className="p-4 bg-gray-800 border-b border-gray-700">
          <h3 className="text-white font-bold flex items-center gap-2">
            <FiMapPin className="text-orange-500" />
            Visit Our Gym
          </h3>
          <p className="text-gray-400 text-sm mt-1">{gymAddress}</p>
        </div>
        <div className="relative w-full h-48">
          <iframe
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.7766661215387!2d67.29168!3d24.81755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e1c1c1c1c1c%3A0x1c1c1c1c1c1c1c1c!2sKorangi%2C%20Karachi%2C%20Pakistan!5e0!3m2!1sen!2s!4v123456`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="GYM Fitness Hub Location"
          />
        </div>
        <div className="p-4">
          <a
            href={gymMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-orange-500/50"
          >
            <FiMapPin />
            📍 Get Directions
          </a>
        </div>
      </div>
    );
  }

  if (action === 'SHOW_CONTACT') {
    return (
      <div className="bg-gray-900 border border-gray-700 rounded-2xl p-5 mb-4 animate-fadeIn">
        <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
          <span className="text-2xl">📞</span>
          Contact Us Directly
        </h3>
        <div className="space-y-3">
          <a
            href={`tel:${gymPhone}`}
            className="w-full bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-orange-500 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-3"
          >
            <FiPhone className="text-orange-500 text-xl" />
            <span>📞 Call Now</span>
          </a>
          <a
            href={`https://wa.me/${gymWhatsApp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-3"
          >
            <FaWhatsapp className="text-xl" />
            <span>💬 WhatsApp</span>
          </a>
          <a
            href={`mailto:${gymEmail}`}
            className="w-full bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-orange-500 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-3"
          >
            <FiMail className="text-orange-500 text-xl" />
            <span>📧 Email Us</span>
          </a>
        </div>
      </div>
    );
  }

  return null;
};

export default ActionCard;
