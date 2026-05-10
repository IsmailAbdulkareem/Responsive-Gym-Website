"use client";

import React, { useState, FormEvent } from 'react';
import { TrialFormData } from '@/types/chat';

interface TrialFormProps {
  onSubmit: (data: TrialFormData) => void;
  isSubmitting: boolean;
}

const TrialForm: React.FC<TrialFormProps> = ({ onSubmit, isSubmitting }) => {
  const [formData, setFormData] = useState<TrialFormData>({
    fullName: '',
    phone: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof TrialFormData, string>>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof TrialFormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof TrialFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Name is required';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
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
    <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border-2 border-orange-500/50 rounded-2xl p-5 mb-4 animate-fadeIn">
      <div className="text-center mb-4">
        <h3 className="text-white font-bold text-xl mb-2 flex items-center justify-center gap-2">
          <span className="text-3xl">🎁</span>
          Claim Your FREE 1-Day Trial Pass!
        </h3>
        <p className="text-gray-300 text-sm">No commitment. Just show up and transform.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full Name */}
        <div>
          <label htmlFor="trial-fullName" className="block text-gray-300 text-sm mb-1.5 font-medium">
            Full Name *
          </label>
          <input
            type="text"
            id="trial-fullName"
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
          <label htmlFor="trial-phone" className="block text-gray-300 text-sm mb-1.5 font-medium">
            Phone / WhatsApp *
          </label>
          <input
            type="tel"
            id="trial-phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+92-300-1234567"
            disabled={isSubmitting}
            className={`w-full bg-gray-800 border ${errors.phone ? 'border-red-500' : 'border-gray-700'} rounded-lg px-3 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 disabled:opacity-50 text-sm`}
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
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
              Claiming...
            </>
          ) : (
            <>
              <span className="text-xl">🎁</span>
              Claim Free Trial
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default TrialForm;
