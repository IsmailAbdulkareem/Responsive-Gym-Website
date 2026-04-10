"use client";

import React, { memo } from 'react';
import { FiCheckCircle, FiAward, FiUsers, FiHeart } from 'react-icons/fi';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <FiAward className="text-yellow-400" />,
    title: 'Certified Trainers',
    description: 'Professional coaches with international certifications',
  },
  {
    icon: <FiUsers className="text-yellow-400" />,
    title: 'Community',
    description: 'Join a supportive fitness community of 5000+ members',
  },
  {
    icon: <FiHeart className="text-yellow-400" />,
    title: 'Holistic Approach',
    description: 'Complete wellness with nutrition guidance and mental health support',
  },
];

const About: React.FC = memo(() => {
  const images = [
    {
      src: 'https://raw.githubusercontent.com/Manoranjan-D/responsive-website-gym/master/img/about-img-1.jpg',
      alt: 'Modern gym equipment',
      className: 'rounded-2xl shadow-xl w-full h-48 md:h-56 object-cover',
    },
    {
      src: 'https://raw.githubusercontent.com/Manoranjan-D/responsive-website-gym/master/img/about-img-2.jpg',
      alt: 'Personal training session',
      className: 'rounded-2xl shadow-xl w-full h-48 md:h-56 object-cover',
    },
    {
      src: 'https://raw.githubusercontent.com/Manoranjan-D/responsive-website-gym/master/img/about-img-3.jpg',
      alt: 'Group fitness class',
      className: 'rounded-2xl shadow-xl w-full h-48 md:h-56 object-cover md:col-span-2',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-gray-900 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image Grid */}
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              {images.map((img, index) => (
                <div key={index} className={`${index === 2 ? 'md:col-span-2' : ''}`}>
                  <img
                    src={img.src}
                    alt={img.alt}
                    className={img.className}
                    loading="lazy"
                    width={img.className.includes('col-span-2') ? 600 : 350}
                    height={img.className.includes('col-span-2') ? 400 : 250}
                  />
                </div>
              ))}
            </div>

            {/* Experience Badge */}
            <div className="mt-6 bg-yellow-400 rounded-xl p-6 inline-block shadow-xl">
              <div className="flex items-center gap-4">
                <div className="text-5xl font-black text-black">10+</div>
                <div className="text-black/80 font-semibold text-sm uppercase leading-tight">
                  Years of<br />Excellence
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2">
            {/* Section Label */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-12 h-0.5 bg-yellow-400" />
              <span className="text-yellow-400 font-bold uppercase tracking-widest text-sm">About Us</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
              Welcome to
              <span className="text-yellow-400"> GYM Fitness</span>
              <br />Hub
            </h2>

            {/* Description */}
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Your premier destination for complete fitness transformation. We combine 
              state-of-the-art equipment with expert guidance to help you achieve your goals.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Whether you&apos;re a beginner or an experienced athlete, our professional trainers 
              are dedicated to creating personalized fitness plans that deliver real results. 
              Transform your body, mind, and lifestyle with us.
            </p>

            {/* Features List */}
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-yellow-400/10 rounded-lg flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">{feature.title}</h3>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <a
              href="#courses"
              className="group inline-flex items-center gap-2 bg-yellow-400 text-black font-bold px-8 py-4 rounded-xl uppercase tracking-wide transition-all duration-300 hover:bg-yellow-500 hover:shadow-2xl hover:shadow-yellow-400/25 hover:-translate-y-1"
            >
              Explore Our Programs
              <FiCheckCircle className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
});

About.displayName = 'About';

export default About;
