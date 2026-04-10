"use client";

import React, { memo, useState, useCallback } from 'react';
import { FiArrowRight } from 'react-icons/fi';

interface Course {
  title: string;
  description: string;
  imgSrc: string;
  alt: string;
  level: string;
  duration: string;
}

const courses: Course[] = [
  {
    title: 'Body Building',
    description: 'Build muscle mass and strength with our comprehensive bodybuilding program designed for all levels.',
    imgSrc: 'https://raw.githubusercontent.com/Manoranjan-D/responsive-website-gym/master/img/courses-bodybuilding.jpg',
    alt: 'Body building course',
    level: 'All Levels',
    duration: '12 Weeks',
  },
  {
    title: 'Cross Fit',
    description: 'High-intensity functional movements combined with cardio for ultimate fitness conditioning.',
    imgSrc: 'https://raw.githubusercontent.com/Manoranjan-D/responsive-website-gym/master/img/courses-crossfit.jpg',
    alt: 'Cross fit course',
    level: 'Intermediate',
    duration: '8 Weeks',
  },
  {
    title: 'Gymnastic',
    description: 'Master bodyweight exercises and develop incredible strength, flexibility, and coordination.',
    imgSrc: 'https://raw.githubusercontent.com/Manoranjan-D/responsive-website-gym/master/img/courses-gymnastic.jpg',
    alt: 'Gymnastic course',
    level: 'Advanced',
    duration: '16 Weeks',
  },
  {
    title: 'Fitness',
    description: 'Complete fitness program combining cardio, strength training, and flexibility exercises.',
    imgSrc: 'https://raw.githubusercontent.com/Manoranjan-D/responsive-website-gym/master/img/courses-fitness.jpg',
    alt: 'Fitness course',
    level: 'Beginner',
    duration: '6 Weeks',
  },
  {
    title: 'TRX',
    description: 'Suspension training for functional strength, balance, and core stability using bodyweight.',
    imgSrc: 'https://raw.githubusercontent.com/Manoranjan-D/responsive-website-gym/master/img/courses-TRX.jpg',
    alt: 'TRX course',
    level: 'All Levels',
    duration: '8 Weeks',
  },
  {
    title: 'Boxing',
    description: 'Learn boxing techniques while getting an incredible full-body workout and stress relief.',
    imgSrc: 'https://raw.githubusercontent.com/Manoranjan-D/responsive-website-gym/master/img/courses-boxing.jpg',
    alt: 'Boxing course',
    level: 'All Levels',
    duration: '10 Weeks',
  },
];

const CourseCard: React.FC<{ course: Course; index: number }> = memo(({ course, index }) => {
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
      <div className="relative h-64 overflow-hidden">
        <img
          src={course.imgSrc}
          alt={course.alt}
          className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
          loading="lazy"
          width={550}
          height={400}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
        
        {/* Level Badge */}
        <div className="absolute top-4 left-4 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
          {course.level}
        </div>

        {/* Duration Badge */}
        <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/20">
          {course.duration}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">
          {course.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          {course.description}
        </p>
        <a
          href="#offer"
          className="inline-flex items-center gap-2 text-yellow-400 font-semibold text-sm uppercase tracking-wide group-hover:gap-3 transition-all duration-300"
        >
          <span>Learn More</span>
          <FiArrowRight className="transition-transform duration-300" />
        </a>
      </div>

      {/* Hover Overlay Effect */}
      <div className={`absolute inset-0 border-2 border-yellow-400 rounded-2xl transition-opacity duration-300 pointer-events-none ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
    </article>
  );
});

CourseCard.displayName = 'CourseCard';

const Courses: React.FC = memo(() => {
  return (
    <section id="courses" className="py-20 md:py-28 bg-gray-950 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-yellow-400/5 rounded-full blur-3xl -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-12 h-0.5 bg-yellow-400" />
            <span className="text-yellow-400 font-bold uppercase tracking-widest text-sm">Our Programs</span>
            <span className="w-12 h-0.5 bg-yellow-400" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6">
            Explore Our <span className="text-yellow-400">Courses</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Discover diverse training programs designed for all fitness levels. 
            Each program is crafted by experts to maximize results and keep you motivated.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseCard key={course.title} course={course} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
});

Courses.displayName = 'Courses';

export default Courses;
