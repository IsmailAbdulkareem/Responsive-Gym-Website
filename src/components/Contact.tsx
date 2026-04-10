"use client";

import React, { memo, useState, useCallback, FormEvent } from 'react';
import { FiMapPin, FiPhone, FiMail, FiClock, FiSend } from 'react-icons/fi';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const Contact: React.FC = memo(() => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', phone: '', message: '' });
  }, [formData]);

  return (
    <section id="contact" className="py-20 md:py-28 bg-gray-950 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-12 h-0.5 bg-yellow-400" />
            <span className="text-yellow-400 font-bold uppercase tracking-widest text-sm">Contact Us</span>
            <span className="w-12 h-0.5 bg-yellow-400" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6">
            Get in <span className="text-yellow-400">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Have questions about our gym, membership plans, or programs? 
            Reach out and our team will get back to you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-400 text-sm mb-2 font-semibold">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-400 text-sm mb-2 font-semibold">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="phone" className="block text-gray-400 text-sm mb-2 font-semibold">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+92-300-1234567"
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-400 text-sm mb-2 font-semibold">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell us about your fitness goals or any questions you have..."
                  required
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-yellow-400 text-black font-bold px-8 py-4 rounded-xl uppercase tracking-wide transition-all duration-300 hover:bg-yellow-500 hover:shadow-2xl hover:shadow-yellow-400/25"
              >
                <FiSend />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact Details */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
              <ul className="space-y-4">
                {[
                  {
                    icon: <FiMapPin className="text-yellow-400" />,
                    title: 'Address',
                    content: 'Plot 25-A, Block-10, Korangi, Karachi, Pakistan',
                  },
                  {
                    icon: <FiPhone className="text-yellow-400" />,
                    title: 'Phone',
                    content: '+92-300-1234567',
                    href: 'tel:+923001234567',
                  },
                  {
                    icon: <FiMail className="text-yellow-400" />,
                    title: 'Email',
                    content: 'info@gymfitnesshub.pk',
                    href: 'mailto:info@gymfitnesshub.pk',
                  },
                  {
                    icon: <FiClock className="text-yellow-400" />,
                    title: 'Working Hours',
                    content: 'Mon-Fri: 6AM-10PM | Sat-Sun: 7AM-10PM',
                  },
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-yellow-400/10 rounded-lg flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{item.title}</p>
                      {item.href ? (
                        <a href={item.href} className="text-white font-semibold hover:text-yellow-400 transition-colors duration-300">
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-white font-semibold">{item.content}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-gray-700 shadow-xl">
              <iframe
                width="100%"
                height="300"
                frameBorder="0"
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.7766661215387!2d67.29168!3d24.81755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e1c1c1c1c1c%3A0x1c1c1c1c1c1c1c1c!2sKorangi%2C%20Karachi%2C%20Pakistan!5e0!3m2!1sen!2s!4v123456"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="GYM Fitness Hub Location - Korangi, Karachi"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Contact.displayName = 'Contact';

export default Contact;
