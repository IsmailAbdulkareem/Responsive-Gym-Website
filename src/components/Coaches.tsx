"use client";

import React, { memo, useState, useCallback } from 'react';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';

interface Coach {
  name: string;
  title: string;
  specialty: string;
  imgSrc: string;
  alt: string;
  social: { icon: React.ReactNode; href: string }[];
}

const coaches: Coach[] = [
  {
    name: 'Hassan Khan',
    title: 'Head Coach',
    specialty: 'Body Building Expert',
    imgSrc: 'https://raw.githubusercontent.com/Manoranjan-D/responsive-website-gym/master/img/coache-1.jpg',
    alt: 'Coach Hassan Khan',
    social: [
      { icon: <FiFacebook />, href: '#' },
      { icon: <FiInstagram />, href: '#' },
      { icon: <FiTwitter />, href: '#' },
    ],
  },
  {
    name: 'Ahmed Ali',
    title: 'Senior Trainer',
    specialty: 'Cardio & HIIT Specialist',
    imgSrc: 'https://wallpapercave.com/wp/wp8852211.jpg',
    alt: 'Coach Ahmed Ali',
    social: [
      { icon: <FiFacebook />, href: '#' },
      { icon: <FiInstagram />, href: '#' },
      { icon: <FiLinkedin />, href: '#' },
    ],
  },
  {
    name: 'Faisal Ahmed',
    title: 'Fitness Coach',
    specialty: 'Functional Training Expert',
    imgSrc: 'https://raw.githubusercontent.com/Manoranjan-D/responsive-website-gym/master/img/coache-3.jpg',
    alt: 'Coach Faisal Ahmed',
    social: [
      { icon: <FiFacebook />, href: '#' },
      { icon: <FiTwitter />, href: '#' },
      { icon: <FiLinkedin />, href: '#' },
    ],
  },
];

const CoachCard: React.FC<{ coach: Coach }> = memo(({ coach }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  return (
    <article
      className="group relative rounded-2xl overflow-hidden bg-gray-800 shadow-lg transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-400/10 hover:-translate-y-2"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Image */}
      <div className="relative h-80 overflow-hidden">
        <img
          src={coach.imgSrc}
          alt={coach.alt}
          className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
          loading="lazy"
          width={400}
          height={400}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent" />

        {/* Social Icons Overlay */}
        <div
          className={`absolute inset-0 bg-yellow-400/90 flex items-center justify-center gap-4 transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {coach.social.map((social, index) => (
            <a
              key={index}
              href={social.href}
              className="w-12 h-12 bg-black/20 rounded-full flex items-center justify-center text-black hover:bg-black/40 transition-colors duration-300"
              aria-label={`${coach.name}'s social link`}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 text-center relative">
        {/* Decorative Triangle */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-yellow-400 rotate-45" />
        
        <h3 className="text-xl font-black text-white uppercase tracking-wide group-hover:text-yellow-400 transition-colors duration-300">
          {coach.name}
        </h3>
        <p className="text-yellow-400 font-semibold text-sm mt-1">{coach.title}</p>
        <p className="text-gray-400 text-sm mt-2">{coach.specialty}</p>
      </div>
    </article>
  );
});

CoachCard.displayName = 'CoachCard';

const Coaches: React.FC = memo(() => {
  return (
    <section id="trainers" className="py-20 md:py-28 bg-gray-900 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-12 h-0.5 bg-yellow-400" />
            <span className="text-yellow-400 font-bold uppercase tracking-widest text-sm">Expert Team</span>
            <span className="w-12 h-0.5 bg-yellow-400" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6">
            Meet Our <span className="text-yellow-400">Professional</span> Trainers
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Our certified trainers bring years of expertise in weight training, cardio, 
            and functional fitness. Get personalized guidance to reach your goals faster.
          </p>
        </div>

        {/* Coaches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coaches.map((coach) => (
            <CoachCard key={coach.name} coach={coach} />
          ))}
        </div>
      </div>
    </section>
  );
});

Coaches.displayName = 'Coaches';

export default Coaches;
