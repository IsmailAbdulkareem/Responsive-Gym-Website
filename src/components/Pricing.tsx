"use client";

import React, { memo } from 'react';
import { FiCheck, FiStar } from 'react-icons/fi';

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  features: string[];
  highlighted: boolean;
  popular?: boolean;
  icon: string;
}

const plans: PricingPlan[] = [
  {
    name: 'BASIC',
    price: '2,500',
    period: 'Per Month',
    features: [
      'Gym Access (6AM - 10PM)',
      'Standard Equipment',
      'Locker Facilities',
      'Free WiFi',
      'Community Support',
    ],
    highlighted: false,
    icon: '💪',
  },
  {
    name: 'PREMIUM',
    price: '4,500',
    period: 'Per Month',
    features: [
      '24/7 Gym Access',
      'Full Equipment Access',
      'Private Locker',
      'Personal Trainer (2x/week)',
      'Nutrition Consultation',
      'Group Classes Included',
      'Priority Support',
    ],
    highlighted: true,
    popular: true,
    icon: '🔥',
  },
  {
    name: 'ELITE',
    price: '6,500',
    period: 'Per Month',
    features: [
      'Unlimited 24/7 Access',
      'All Equipment + Specialty Areas',
      'Private Locker & Changing Room',
      'Personal Trainer (5x/week)',
      'Custom Nutrition Plan',
      'All Group Classes',
      'Free Guest Passes (4/month)',
      'Spa & Recovery Zone',
    ],
    highlighted: false,
    icon: '👑',
  },
];

const PricingCard: React.FC<{ plan: PricingPlan }> = memo(({ plan }) => {
  return (
    <div
      className={`relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 ${
        plan.highlighted
          ? 'bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-400 text-black shadow-2xl shadow-yellow-400/25 scale-105 z-10'
          : 'bg-gray-800 text-white border border-gray-700 hover:border-yellow-400/50 hover:shadow-xl'
      }`}
    >
      {/* Popular Badge */}
      {plan.popular && (
        <div className="absolute top-0 right-0 bg-black text-yellow-400 text-xs font-bold px-4 py-2 rounded-bl-xl uppercase tracking-wider flex items-center gap-1">
          <FiStar className="text-yellow-400" />
          Most Popular
        </div>
      )}

      {/* Header */}
      <div className="p-8 text-center border-b border-black/10">
        <div className="text-4xl mb-3">{plan.icon}</div>
        <h3 className="text-2xl font-black uppercase tracking-wide mb-2">{plan.name}</h3>
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-lg opacity-75">₨</span>
          <span className={`text-5xl font-black ${plan.highlighted ? 'text-black' : 'text-yellow-400'}`}>
            {plan.price}
          </span>
        </div>
        <p className={`text-sm mt-2 ${plan.highlighted ? 'text-black/70' : 'text-gray-400'}`}>
          {plan.period}
        </p>
      </div>

      {/* Features */}
      <ul className="p-8 space-y-4">
        {plan.features.map((feature, fIndex) => (
          <li key={fIndex} className="flex items-start gap-3">
            <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 ${
              plan.highlighted ? 'bg-black/20' : 'bg-yellow-400/20'
            }`}>
              <FiCheck className={`text-sm ${plan.highlighted ? 'text-black' : 'text-yellow-400'}`} />
            </div>
            <span className={`text-sm ${plan.highlighted ? 'text-black/90' : 'text-gray-300'}`}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <div className="p-8 pt-0">
        <button
          className={`w-full py-4 rounded-xl font-bold uppercase tracking-wide transition-all duration-300 ${
            plan.highlighted
              ? 'bg-black text-yellow-400 hover:bg-gray-900 hover:shadow-lg'
              : 'bg-yellow-400 text-black hover:bg-yellow-500 hover:shadow-lg hover:shadow-yellow-400/25'
          }`}
        >
          {plan.highlighted ? 'Get Started Now' : 'Choose Plan'}
        </button>
      </div>
    </div>
  );
});

PricingCard.displayName = 'PricingCard';

const Pricing: React.FC = memo(() => {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-gray-900 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-12 h-0.5 bg-yellow-400" />
            <span className="text-yellow-400 font-bold uppercase tracking-widest text-sm">Pricing Plans</span>
            <span className="w-12 h-0.5 bg-yellow-400" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6">
            Choose Your <span className="text-yellow-400">Membership</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Flexible plans designed to fit your budget and fitness goals. 
            All plans include access to our world-class facilities.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-6 flex-wrap justify-center bg-gray-800/50 backdrop-blur-sm rounded-xl px-8 py-6 border border-gray-700">
            <div className="flex items-center gap-2">
              <span className="text-yellow-400">✓</span>
              <span className="text-gray-300 text-sm">Annual plans available with 15-20% discount</span>
            </div>
            <div className="w-px h-6 bg-gray-700 hidden md:block" />
            <div className="flex items-center gap-2">
              <span className="text-yellow-400">✓</span>
              <span className="text-gray-300 text-sm">Corporate & group packages</span>
            </div>
            <div className="w-px h-6 bg-gray-700 hidden md:block" />
            <div className="flex items-center gap-2">
              <span className="text-yellow-400">✓</span>
              <span className="text-gray-300 text-sm">Free cancellation within 30 days</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Pricing.displayName = 'Pricing';

export default Pricing;
