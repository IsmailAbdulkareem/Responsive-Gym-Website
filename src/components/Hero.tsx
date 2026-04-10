"use client";

import React, { memo, useState, useEffect } from 'react';
import { FiArrowRight, FiPlay, FiChevronDown } from 'react-icons/fi';

interface StatItem {
  value: string;
  label: string;
  suffix?: string;
}

const stats: StatItem[] = [
  { value: '10', label: 'Years Experience', suffix: '+' },
  { value: '50', label: 'Expert Trainers', suffix: '+' },
  { value: '5K', label: 'Happy Members', suffix: '+' },
  { value: '20', label: 'Fitness Programs', suffix: '+' },
];

const Hero: React.FC = memo(() => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://wallpapercave.com/wp/wp7298323.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-gray-900" />
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 via-transparent to-transparent" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`text-center lg:text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
              <span className="text-yellow-400 text-sm font-semibold uppercase tracking-wider">Now Open 24/7</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
              Transform
              <span className="relative">
                <span className="text-yellow-400"> Your Body</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                  <path d="M2 10C50 4 100 4 150 6C200 8 250 4 298 2" stroke="hsl(56, 99%, 52%)" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
              <br />
              <span className="text-gray-300">Transform</span>
              <span className="text-yellow-400"> Your Life</span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Experience world-class facilities, expert personal training, and a supportive community. 
              Your fitness journey starts here at <span className="text-yellow-400 font-semibold">GYM Fitness Hub</span>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <a
                href="#offer"
                className="group relative inline-flex items-center justify-center gap-2 bg-yellow-400 text-black font-bold px-8 py-4 rounded-xl text-lg uppercase tracking-wide overflow-hidden transition-all duration-300 hover:bg-yellow-500 hover:shadow-2xl hover:shadow-yellow-400/25 hover:-translate-y-1"
              >
                <span className="relative z-10">Join Now</span>
                <FiArrowRight className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <button
                className="group inline-flex items-center justify-center gap-3 bg-white/5 backdrop-blur-sm border-2 border-white/20 text-white font-bold px-8 py-4 rounded-xl text-lg uppercase tracking-wide transition-all duration-300 hover:bg-white/10 hover:border-yellow-400/50 hover:-translate-y-1"
              >
                <span className="w-10 h-10 rounded-full bg-yellow-400/20 flex items-center justify-center group-hover:bg-yellow-400/40 transition-colors duration-300">
                  <FiPlay className="text-yellow-400 ml-0.5" />
                </span>
                <span>Watch Video</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`text-center lg:text-left transition-all duration-700 delay-${index * 100} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                >
                  <div className="text-2xl md:text-3xl font-black text-yellow-400">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-xs md:text-sm text-gray-400 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className={`hidden lg:block transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              {/* Main Image Card */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                <img
                  src="https://raw.githubusercontent.com/Manoranjan-D/responsive-website-gym/master/img/courses-bodybuilding.jpg"
                  alt="Professional training at GYM Fitness Hub"
                  className="w-full h-[500px] object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <p className="text-white font-bold text-lg">Start Your Transformation Today</p>
                    <p className="text-gray-300 text-sm">First week free trial for new members</p>
                  </div>
                </div>
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-yellow-400 rounded-xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-black/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🔥</span>
                  </div>
                  <div>
                    <p className="text-black font-bold text-lg">Summer Special</p>
                    <p className="text-black/70 text-sm">Get 3 Months Free!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll to about section" className="text-white/50 hover:text-yellow-400 transition-colors duration-300">
          <FiChevronDown className="text-3xl" />
        </a>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;
