"use client";

import React, { useState, FormEvent } from 'react';
import { LeadFormData } from '@/types/chat';
import { FiSend } from 'react-icons/fi';

interface LeadFormProps {
  onSubmit: (data: LeadFormData) => void;
  isSubmitting: boolean;
}

const LeadForm: React.FC<LeadFormProps> = ({ onSubmit, isSubmitting }) => {
  const [formData, setFormData] = useState<LeadFormData>({
    fullName: '',
    phone: '',
    email: '',
    interestedIn: '',
    bestTimeToCall: '',
    questions: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof LeadFormData, string>>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof LeadFormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof LeadFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Name is required';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    if (!formData.interestedIn) {
      newErrors.interestedIn = 'Please select an option';
    }
    if (!formData.bestTimeToCall) {
      newErrors.bestTimeToCall = 'Please select a time';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
    }
  };

  return (
    <div className="bg-gray-900 border border-gray-700 rounded-2xl p-5 mb-4 animate-fadeIn">
      <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
        <span className="text-2xl">📋</span>
        Get Your Free Consultation
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-gray-400 text-sm mb-1.5 font-medium">
            Full Name *
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="John Doe"
            disabled={isSubmitting}
            className={`w-full bg-gray-800 border ${errors.fullName ? 'border-red-500' : 'border-gray-700'} rounded-lg px-3 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 disabled:opacity-50 text-sm`}
          />
          {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-gray-400 text-sm mb-1.5 font-medium">
            Phone / WhatsApp *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+92-300-1234567"
            disabled={isSubmitting}
            className={`w-full bg-gray-800 border ${errors.phone ? 'border-red-500' : 'border-gray-700'} rounded-lg px-3 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 disabled:opacity-50 text-sm`}
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-gray-400 text-sm mb-1.5 font-medium">
            Email (Optional)
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            disabled={isSubmitting}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 disabled:opacity-50 text-sm"
          />
        </div>

        {/* Interested In */}
        <div>
          <label htmlFor="interestedIn" className="block text-gray-400 text-sm mb-1.5 font-medium">
            Interested In *
          </label>
          <select
            id="interestedIn"
            name="interestedIn"
            value={formData.interestedIn}
            onChange={handleChange}
            disabled={isSubmitting}
            className={`w-full bg-gray-800 border ${errors.interestedIn ? 'border-red-500' : 'border-gray-700'} rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 disabled:opacity-50 text-sm`}
          >
            <option value="">Select an option</option>
            <option value="Monthly Membership">Monthly Membership</option>
            <option value="Quarterly Membership">Quarterly Membership</option>
            <option value="Half-Yearly Membership">Half-Yearly Membership</option>
            <option value="Annual Membership">Annual Membership</option>
            <option value="Personal Training">Personal Training</option>
            <option value="Group Classes">Group Classes</option>
            <option value="Just Exploring">Just Exploring</option>
          </select>
          {errors.interestedIn && <p className="text-red-500 text-xs mt-1">{errors.interestedIn}</p>}
        </div>

        {/* Best Time to Call */}
        <div>
          <label htmlFor="bestTimeToCall" className="block text-gray-400 text-sm mb-1.5 font-medium">
            Best Time to Call *
          </label>
          <select
            id="bestTimeToCall"
            name="bestTimeToCall"
            value={formData.bestTimeToCall}
            onChange={handleChange}
            disabled={isSubmitting}
            className={`w-full bg-gray-800 border ${errors.bestTimeToCall ? 'border-red-500' : 'border-gray-700'} rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 disabled:opacity-50 text-sm`}
          >
            <option value="">Select a time</option>
            <option value="Morning (6AM – 12PM)">Morning (6AM – 12PM)</option>
            <option value="Afternoon (12PM – 5PM)">Afternoon (12PM – 5PM)</option>
            <option value="Evening (5PM – 10PM)">Evening (5PM – 10PM)</option>
          </select>
          {errors.bestTimeToCall && <p className="text-red-500 text-xs mt-1">{errors.bestTimeToCall}</p>}
        </div>

        {/* Questions */}
        <div>
          <label htmlFor="questions" className="block text-gray-400 text-sm mb-1.5 font-medium">
            Any Questions? (Optional)
          </label>
          <textarea
            id="questions"
            name="questions"
            value={formData.questions}
            onChange={handleChange}
            placeholder="Tell us more about your fitness goals..."
            maxLength={200}
            rows={3}
            disabled={isSubmitting}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 disabled:opacity-50 text-sm resize-none"
          />
          <p className="text-gray-500 text-xs mt-1">{formData.questions?.length || 0}/200</p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-orange-500/50"
        >
          {isSubmitting ? (
            <>
              <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              <FiSend />
              🚀 Get My Free Consultation
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default LeadForm;
