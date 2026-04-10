"use client";

import React, { memo } from 'react';
import { FiClock, FiPhone, FiMapPin, FiMessageCircle } from 'react-icons/fi';

interface HourSlot {
  day: string;
  hours: string;
  isToday?: boolean;
}

const hours: HourSlot[] = [
  { day: 'Monday', hours: '6:00 AM - 10:00 PM' },
  { day: 'Tuesday', hours: '6:00 AM - 10:00 PM' },
  { day: 'Wednesday', hours: '6:00 AM - 10:00 PM' },
  { day: 'Thursday', hours: '6:00 AM - 10:00 PM' },
  { day: 'Friday', hours: '6:00 AM - 10:00 PM' },
  { day: 'Saturday', hours: '7:00 AM - 10:00 PM' },
  { day: 'Sunday', hours: '7:00 AM - 9:00 PM' },
];

const OpeningHours: React.FC = memo(() => {
  // Get current day to highlight it
  const currentDayIndex = new Date().getDay();
  const dayMap: Record<number, string> = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
  };
  const todayName = dayMap[currentDayIndex];

  return (
    <section id="hours" className="py-20 md:py-28 bg-gray-900 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-12 h-0.5 bg-yellow-400" />
            <span className="text-yellow-400 font-bold uppercase tracking-widest text-sm">Schedule</span>
            <span className="w-12 h-0.5 bg-yellow-400" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6">
            Opening <span className="text-yellow-400">Hours</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Plan your visit with our flexible schedule. Premium and Elite members enjoy 24/7 access.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Hours Grid */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <div className="flex items-center gap-3 mb-6">
              <FiClock className="text-yellow-400 text-2xl" />
              <h3 className="text-white font-bold text-xl">Weekly Schedule</h3>
            </div>

            <div className="space-y-3">
              {hours.map((slot) => {
                const isToday = slot.day === todayName;
                return (
                  <div
                    key={slot.day}
                    className={`flex justify-between items-center p-4 rounded-lg transition-all duration-300 ${
                      isToday
                        ? 'bg-yellow-400/10 border border-yellow-400/30'
                        : 'hover:bg-gray-700/50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {isToday && (
                        <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                      )}
                      <span className={`font-semibold ${isToday ? 'text-yellow-400' : 'text-white'}`}>
                        {slot.day}
                        {isToday && <span className="ml-2 text-xs bg-yellow-400 text-black px-2 py-0.5 rounded-full font-bold">TODAY</span>}
                      </span>
                    </div>
                    <span className={isToday ? 'text-yellow-400 font-bold' : 'text-gray-300'}>
                      {slot.hours}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Info & Contact */}
          <div className="space-y-6">
            {/* Quick Info Card */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-3">
                <span className="text-yellow-400">ℹ️</span>
                Quick Information
              </h3>
              <ul className="space-y-4">
                {[
                  {
                    icon: <FiClock className="text-yellow-400" />,
                    title: '24/7 Member Access',
                    desc: 'Premium and Elite members can access the gym anytime',
                  },
                  {
                    icon: <FiPhone className="text-yellow-400" />,
                    title: 'Staff Hours',
                    desc: '6:00 AM - 10:00 PM (All Days) for assistance and training',
                  },
                  {
                    icon: <FiMapPin className="text-yellow-400" />,
                    title: 'Location',
                    desc: 'Plot 25-A, Block-10, Korangi, Karachi, Pakistan',
                  },
                ].map((info, index) => (
                  <li key={index} className="flex items-start gap-4 p-4 bg-gray-900/50 rounded-lg">
                    <div className="flex-shrink-0 w-10 h-10 bg-yellow-400/10 rounded-lg flex items-center justify-center">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{info.title}</h4>
                      <p className="text-gray-400 text-sm">{info.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact CTA */}
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl p-8 shadow-xl">
              <h3 className="text-black font-bold text-xl mb-3">Have Questions?</h3>
              <p className="text-black/70 mb-6">
                Contact us now for more information about our hours, facilities, or membership plans.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://wa.me/923001234567?text=Hi!%20What%20are%20your%20exact%20opening%20hours?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-black text-yellow-400 font-bold px-6 py-3 rounded-xl uppercase tracking-wide transition-all duration-300 hover:bg-gray-900 hover:shadow-lg"
                >
                  <FiMessageCircle />
                  WhatsApp
                </a>
                <a
                  href="tel:+923001234567"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-white/20 text-black font-bold px-6 py-3 rounded-xl uppercase tracking-wide transition-all duration-300 hover:bg-white/30"
                >
                  <FiPhone />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

OpeningHours.displayName = 'OpeningHours';

export default OpeningHours;
