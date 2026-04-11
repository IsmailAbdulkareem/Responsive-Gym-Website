"use client";

import React, { memo } from 'react';
import { FiArrowRight, FiClock, FiGift, FiTrendingUp } from 'react-icons/fi';

const Offer: React.FC = memo(() => {
  return (
    <section id="offer" className="py-20 md:py-28 bg-gray-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-transparent to-yellow-400/5" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            {/* Limited Time Badge */}
            <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-2 mb-6">
              <FiClock className="text-red-400 animate-pulse" />
              <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">Limited Time Offer</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
              Summer Special:
              <span className="text-yellow-400"> Get 3 Months</span>
              <br />
              <span className="text-yellow-400">Free</span>
              <span className="text-white"> Personal Training</span>
            </h2>

            {/* Description */}
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Join now with any annual membership and receive complimentary personal training sessions 
              for 3 months. Transform your body with professional guidance from our expert trainers.
            </p>

            {/* Offer Benefits */}
            <div className="space-y-4 mb-8">
              {[
                { icon: <FiGift />, title: '3 Months Free Personal Training', desc: 'One-on-one sessions with certified trainers' },
                { icon: <FiTrendingUp />, title: 'Customized Workout Plan', desc: 'Personalized program tailored to your goals' },
                { icon: <FiArrowRight />, title: 'Nutrition Guidance', desc: 'Complete meal plans and dietary support' },
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-yellow-400/30 transition-colors duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-yellow-400/10 rounded-lg flex items-center justify-center">
                    <span className="text-yellow-400 text-xl">{benefit.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold">{benefit.title}</h3>
                    <p className="text-gray-400 text-sm">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#booking"
                className="group inline-flex items-center justify-center gap-2 bg-yellow-400 text-black font-bold px-8 py-4 rounded-xl text-lg uppercase tracking-wide transition-all duration-300 hover:bg-yellow-500 hover:shadow-2xl hover:shadow-yellow-400/25 hover:-translate-y-1"
              >
                Claim This Offer
                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#booking"
                className="inline-flex items-center justify-center gap-2 bg-white/5 border-2 border-white/20 text-white font-bold px-8 py-4 rounded-xl text-lg uppercase tracking-wide transition-all duration-300 hover:bg-white/10 hover:border-yellow-400/50 hover:-translate-y-1"
              >
                Become a Member
              </a>
            </div>
          </div>

          {/* Right - Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://raw.githubusercontent.com/Manoranjan-D/responsive-website-gym/master/img/offer-img.jpg"
                alt="Special summer fitness offer"
                className="w-full h-[500px] object-cover"
                loading="lazy"
                width={600}
                height={500}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-yellow-400 rounded-xl p-6 shadow-2xl">
              <div className="text-center">
                <div className="text-4xl font-black text-black mb-1">₨0</div>
                <div className="text-black/70 text-sm font-semibold uppercase">Personal Training</div>
                <div className="text-black/60 text-xs mt-1">For 3 Months</div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400/20 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-yellow-400/10 rounded-full blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
});

Offer.displayName = 'Offer';

export default Offer;
