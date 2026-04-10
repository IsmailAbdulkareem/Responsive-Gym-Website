"use client";

import React, { memo, useState, useCallback } from 'react';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';

interface Review {
  name: string;
  role: string;
  imgSrc: string;
  alt: string;
  text: string;
  rating: number;
}

const reviews: Review[] = [
  {
    name: 'Ali Hassan',
    role: 'Member for 2 years',
    imgSrc: 'https://raw.githubusercontent.com/Manoranjan-D/responsive-website-gym/master/img/review-img-1.jpg',
    alt: 'Ali Hassan review',
    text: "GYM Fitness Hub completely transformed my fitness journey. The trainers are extremely knowledgeable and the equipment is top-notch. Best decision I made for my health in Korangi! I've lost 20kg and gained so much confidence.",
    rating: 5,
  },
  {
    name: 'Fatima Khan',
    role: 'Member for 1 year',
    imgSrc: 'https://raw.githubusercontent.com/Manoranjan-D/responsive-website-gym/master/img/review-img-2.jpg',
    alt: 'Fatima Khan review',
    text: "Outstanding experience! The female trainers are professional and supportive. Clean facilities, perfect location, and affordable pricing. The group classes are amazing. Highly recommend to anyone serious about fitness.",
    rating: 5,
  },
  {
    name: 'Muhammad Saeed',
    role: 'Member for 6 months',
    imgSrc: 'https://raw.githubusercontent.com/Manoranjan-D/responsive-website-gym/master/img/coache-1.jpg',
    alt: 'Muhammad Saeed review',
    text: "I've been a member for 6 months and already see amazing results. The variety of courses and personalized guidance from Hassan Khan has been incredible. Worth every rupee! The nutrition plan was a game changer.",
    rating: 5,
  },
];

const StarRating: React.FC<{ rating: number }> = memo(({ rating }) => (
  <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
    {[...Array(5)].map((_, i) => (
      <FiStar
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`}
      />
    ))}
  </div>
));

StarRating.displayName = 'StarRating';

const Reviews: React.FC = memo(() => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  }, []);

  const currentReview = reviews[currentIndex];

  return (
    <section id="review" className="py-20 md:py-28 bg-gray-950 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-400/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-12 h-0.5 bg-yellow-400" />
            <span className="text-yellow-400 font-bold uppercase tracking-widest text-sm">Testimonials</span>
            <span className="w-12 h-0.5 bg-yellow-400" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6">
            What Our <span className="text-yellow-400">Members</span> Say
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Real stories from real people who transformed their lives with us. 
            Join thousands of satisfied members on their fitness journey.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-yellow-400/30 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Quote Mark */}
              <div className="text-6xl text-yellow-400/20 font-serif leading-none mb-4">&ldquo;</div>
              
              {/* Rating */}
              <StarRating rating={review.rating} />
              
              {/* Testimonial Text */}
              <p className="text-gray-300 leading-relaxed mt-4 mb-6 italic">
                {review.text}
              </p>
              
              {/* Author Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-700">
                <img
                  src={review.imgSrc}
                  alt={review.alt}
                  className="w-14 h-14 rounded-full object-cover border-2 border-yellow-400"
                  loading="lazy"
                  width={56}
                  height={56}
                />
                <div>
                  <h4 className="text-white font-bold">{review.name}</h4>
                  <p className="text-gray-400 text-sm">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            {/* Quote Mark */}
            <div className="text-6xl text-yellow-400/20 font-serif leading-none mb-4">&ldquo;</div>
            
            {/* Rating */}
            <StarRating rating={currentReview.rating} />
            
            {/* Testimonial Text */}
            <p className="text-gray-300 leading-relaxed mt-4 mb-6 italic">
              {currentReview.text}
            </p>
            
            {/* Author Info */}
            <div className="flex items-center gap-4 pt-6 border-t border-gray-700">
              <img
                src={currentReview.imgSrc}
                alt={currentReview.alt}
                className="w-14 h-14 rounded-full object-cover border-2 border-yellow-400"
                loading="lazy"
                width={56}
                height={56}
              />
              <div>
                <h4 className="text-white font-bold">{currentReview.name}</h4>
                <p className="text-gray-400 text-sm">{currentReview.role}</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={goToPrevious}
              className="w-12 h-12 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-yellow-400 hover:bg-gray-700 transition-colors duration-300"
              aria-label="Previous review"
            >
              <FiChevronLeft className="text-xl" />
            </button>
            
            {/* Dots Indicator */}
            <div className="flex gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-yellow-400 w-8' : 'bg-gray-600'
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={goToNext}
              className="w-12 h-12 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-yellow-400 hover:bg-gray-700 transition-colors duration-300"
              aria-label="Next review"
            >
              <FiChevronRight className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
});

Reviews.displayName = 'Reviews';

export default Reviews;
