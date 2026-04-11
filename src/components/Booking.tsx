"use client";

import React, { memo, useState, useCallback, FormEvent } from 'react';
import { FiCalendar, FiUser, FiPhone, FiMail, FiCheck, FiChevronDown } from 'react-icons/fi';
import Toast from './Toast';

interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  selectedPlan: string;
  preferredStartDate: string;
  emergencyContact: string;
  fitnessGoals: string;
  medicalConditions: string;
}

interface ToastState {
  show: boolean;
  message: string;
  type: 'success' | 'error';
}

interface PlanOption {
  name: string;
  price: string;
  icon: string;
  features: string[];
}

const planOptions: PlanOption[] = [
  {
    name: 'BASIC',
    price: '₨2,500/month',
    icon: '💪',
    features: ['Gym Access (6AM-10PM)', 'Standard Equipment', 'Locker Facilities', 'Free WiFi', 'Community Support'],
  },
  {
    name: 'PREMIUM',
    price: '₨4,500/month',
    icon: '🔥',
    features: ['24/7 Gym Access', 'Full Equipment Access', 'Private Locker', 'Personal Trainer (2x/week)', 'Nutrition Consultation', 'Group Classes Included', 'Priority Support'],
  },
  {
    name: 'ELITE',
    price: '₨6,500/month',
    icon: '👑',
    features: ['Unlimited 24/7 Access', 'All Equipment + Specialty Areas', 'Private Locker & Changing Room', 'Personal Trainer (5x/week)', 'Custom Nutrition Plan', 'All Group Classes', 'Free Guest Passes (4/month)', 'Spa & Recovery Zone'],
  },
];

const Booking: React.FC = memo(() => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    email: '',
    phone: '',
    selectedPlan: '',
    preferredStartDate: '',
    emergencyContact: '',
    fitnessGoals: '',
    medicalConditions: '',
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [toast, setToast] = useState<ToastState>({ show: false, message: '', type: 'success' });
  const [showPlanDropdown, setShowPlanDropdown] = useState<boolean>(false);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);

  const handlePlanSelect = useCallback((planName: string) => {
    setFormData(prev => ({ ...prev, selectedPlan: planName }));
    setShowPlanDropdown(false);
  }, []);

  const handleCloseToast = useCallback(() => {
    setToast(prev => ({ ...prev, show: false }));
  }, []);

  const handleSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setToast({ show: true, message: 'Booking submitted! Check your email for confirmation details.', type: 'success' });
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          selectedPlan: '',
          preferredStartDate: '',
          emergencyContact: '',
          fitnessGoals: '',
          medicalConditions: '',
        });
      } else {
        setToast({ show: true, message: result.error || 'Failed to submit booking. Please try again.', type: 'error' });
      }
    } catch (error) {
      console.error('Error:', error);
      setToast({ show: true, message: 'Network error. Please check your connection and try again.', type: 'error' });
    } finally {
      setIsSubmitting(false);
    }
  }, [formData]);

  // Get minimum date (tomorrow)
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  return (
    <section id="booking" className="py-20 md:py-28 bg-gray-900 relative overflow-hidden">
      {/* Toast */}
      {toast.show && (
        <Toast message={toast.message} type={toast.type} onClose={handleCloseToast} />
      )}

      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-400/5 via-transparent to-yellow-400/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-400/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-12 h-0.5 bg-yellow-400" />
            <span className="text-yellow-400 font-bold uppercase tracking-widest text-sm">Join Now</span>
            <span className="w-12 h-0.5 bg-yellow-400" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6">
            Become a <span className="text-yellow-400">Member</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Ready to start your fitness journey? Fill out the form below and our team will contact you 
            within 24 hours to complete your membership registration.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Booking Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">Membership Registration</h3>

              {/* Personal Information */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-yellow-400 mb-4 flex items-center gap-2">
                  <FiUser />
                  Personal Information
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-gray-400 text-sm mb-2 font-semibold">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Ahmed Ali"
                      required
                      disabled={isSubmitting}
                      className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-400 text-sm mb-2 font-semibold">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="ahmed@example.com"
                      required
                      disabled={isSubmitting}
                      className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-gray-400 text-sm mb-2 font-semibold">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+92-300-1234567"
                      required
                      disabled={isSubmitting}
                      className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>
                  <div>
                    <label htmlFor="emergencyContact" className="block text-gray-400 text-sm mb-2 font-semibold">
                      Emergency Contact
                    </label>
                    <input
                      type="tel"
                      id="emergencyContact"
                      name="emergencyContact"
                      value={formData.emergencyContact}
                      onChange={handleChange}
                      placeholder="+92-333-9876543"
                      disabled={isSubmitting}
                      className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>
                </div>
              </div>

              {/* Plan Selection */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-yellow-400 mb-4 flex items-center gap-2">
                  <FiCheck />
                  Select Your Plan *
                </h4>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setShowPlanDropdown(!showPlanDropdown)}
                    disabled={isSubmitting}
                    className={`w-full bg-gray-900/50 border rounded-lg px-4 py-3 text-left flex items-center justify-between transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${
                      formData.selectedPlan ? 'border-yellow-400 ring-2 ring-yellow-400/20' : 'border-gray-700 hover:border-gray-600'
                    }`}
                  >
                    <span className={formData.selectedPlan ? 'text-white font-semibold' : 'text-gray-500'}>
                      {formData.selectedPlan ? `${planOptions.find(p => p.name === formData.selectedPlan)?.icon} ${formData.selectedPlan} Plan - ${planOptions.find(p => p.name === formData.selectedPlan)?.price}` : 'Choose a membership plan...'}
                    </span>
                    <FiChevronDown className={`text-gray-400 transition-transform duration-300 ${showPlanDropdown ? 'rotate-180' : ''}`} />
                  </button>

                  {showPlanDropdown && (
                    <div className="absolute z-20 w-full mt-2 bg-gray-800 border border-gray-700 rounded-lg shadow-2xl overflow-hidden">
                      {planOptions.map((plan) => (
                        <button
                          key={plan.name}
                          type="button"
                          onClick={() => handlePlanSelect(plan.name)}
                          className={`w-full px-4 py-4 text-left hover:bg-gray-700/50 transition-colors duration-200 border-b border-gray-700 last:border-b-0 ${
                            formData.selectedPlan === plan.name ? 'bg-yellow-400/10' : ''
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <span className="text-lg mr-2">{plan.icon}</span>
                              <span className="text-white font-bold">{plan.name}</span>
                              <span className="text-yellow-400 ml-2">{plan.price}</span>
                            </div>
                            {formData.selectedPlan === plan.name && (
                              <FiCheck className="text-yellow-400" />
                            )}
                          </div>
                          <ul className="mt-2 text-sm text-gray-400 pl-8">
                            {plan.features.slice(0, 3).map((feature, i) => (
                              <li key={i}>• {feature}</li>
                            ))}
                            {plan.features.length > 3 && (
                              <li className="text-yellow-400">+{plan.features.length - 3} more features</li>
                            )}
                          </ul>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Start Date */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-yellow-400 mb-4 flex items-center gap-2">
                  <FiCalendar />
                  Preferred Start Date *
                </h4>
                <input
                  type="date"
                  id="preferredStartDate"
                  name="preferredStartDate"
                  value={formData.preferredStartDate}
                  onChange={handleChange}
                  min={minDate}
                  required
                  disabled={isSubmitting}
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>

              {/* Additional Info */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-yellow-400 mb-4">Additional Information</h4>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="fitnessGoals" className="block text-gray-400 text-sm mb-2 font-semibold">
                      Fitness Goals
                    </label>
                    <textarea
                      id="fitnessGoals"
                      name="fitnessGoals"
                      value={formData.fitnessGoals}
                      onChange={handleChange}
                      rows={3}
                      placeholder="What are your fitness goals? (e.g., weight loss, muscle gain, endurance)"
                      disabled={isSubmitting}
                      className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>
                  <div>
                    <label htmlFor="medicalConditions" className="block text-gray-400 text-sm mb-2 font-semibold">
                      Medical Conditions (Optional)
                    </label>
                    <textarea
                      id="medicalConditions"
                      name="medicalConditions"
                      value={formData.medicalConditions}
                      onChange={handleChange}
                      rows={2}
                      placeholder="Any medical conditions or injuries we should be aware of?"
                      disabled={isSubmitting}
                      className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || !formData.selectedPlan}
                className="w-full inline-flex items-center justify-center gap-2 bg-yellow-400 text-black font-bold px-8 py-4 rounded-xl uppercase tracking-wide transition-all duration-300 hover:bg-yellow-500 hover:shadow-2xl hover:shadow-yellow-400/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-yellow-400"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <FiCheck />
                    Complete Registration
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Plan Cards */}
          <div className="lg:col-span-2 space-y-6">
            {planOptions.map((plan) => (
              <button
                key={plan.name}
                onClick={() => handlePlanSelect(plan.name)}
                className={`w-full text-left rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 ${
                  formData.selectedPlan === plan.name
                    ? 'bg-yellow-400/10 border-yellow-400 shadow-lg shadow-yellow-400/20'
                    : 'bg-gray-800/50 border-gray-700 hover:border-yellow-400/50'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl">{plan.icon}</span>
                  {formData.selectedPlan === plan.name && (
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                      <FiCheck className="text-black" />
                    </div>
                  )}
                </div>
                <h4 className="text-xl font-black text-white uppercase mb-1">{plan.name}</h4>
                <p className="text-yellow-400 font-bold text-lg mb-3">{plan.price}</p>
                <ul className="space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                      <FiCheck className="text-yellow-400 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </button>
            ))}

            {/* Contact CTA */}
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl p-6 shadow-xl">
              <h4 className="text-black font-bold text-lg mb-2">Need Help Choosing?</h4>
              <p className="text-black/70 text-sm mb-4">
                Our team is ready to help you pick the perfect plan for your goals.
              </p>
              <a
                href="https://wa.me/923279671138?text=Hi!%20I%20need%20help%20choosing%20a%20membership%20plan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-black text-yellow-400 font-bold px-4 py-2 rounded-lg text-sm transition-all duration-300 hover:bg-gray-900"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Booking.displayName = 'Booking';

export default Booking;
