import React from 'react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'BASIC',
      price: '2,500',
      period: 'Per Month',
      features: [
        'Gym Access (24/7)',
        'Basic Equipment',
        'Locker Facilities',
        'Community Support',
        'Phone Support'
      ],
      highlighted: false
    },
    {
      name: 'PREMIUM',
      price: '4,500',
      period: 'Per Month',
      features: [
        'Gym Access (24/7)',
        'Full Equipment Access',
        'Private Locker',
        'Personal Trainer (2x/week)',
        'Nutrition Consultation',
        'Priority Support'
      ],
      highlighted: true
    },
    {
      name: 'ELITE',
      price: '6,500',
      period: 'Per Month',
      features: [
        'Unlimited Gym Access',
        'All Equipment + Specialty Areas',
        'Private Locker & Changing Room',
        'Personal Trainer (5x/week)',
        'Nutrition Planning & Tracking',
        '24/7 Premium Support',
        'Free Guest Passes (4/month)'
      ],
      highlighted: false
    }
  ];

  return (
    <section className="section-pricing" id="pricing">
      <div className="container">
        <header className="pricing-header text-center margin-bottom" data-aos="fade-up">
          <h2 className="heading heading--2 underline margin-bottom">
            Membership <span className="yellow">Plans</span>
          </h2>
          <p>
            Choose the perfect plan that fits your fitness goals. All plans include access to our world-class facilities and expert support.
          </p>
        </header>

        <div className="pricing-grid grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card rounded-lg overflow-hidden transition-transform duration-300 ${
                plan.highlighted
                  ? 'bg-yellow-400 text-black transform scale-105 shadow-2xl'
                  : 'bg-gray-900 text-white border-2 border-gray-700'
              }`}
              data-aos="fade-up"
            >
              <div className="pricing-card-header p-8 text-center border-b-4 border-yellow-400">
                <h3 className="heading heading--3 margin-bottom font-bold text-2xl">{plan.name}</h3>
                <div className="price-section">
                  <span className="text-5xl font-bold">₨{plan.price}</span>
                  <span className="block text-sm mt-2 opacity-75">{plan.period}</span>
                </div>
              </div>

              <ul className="pricing-features p-8 space-y-4">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start">
                    <span className="text-yellow-400 mr-3 text-lg">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="pricing-footer p-8">
                <button
                  className={`w-full py-3 rounded-lg font-bold transition-all duration-300 ${
                    plan.highlighted
                      ? 'bg-black text-yellow-400 hover:bg-gray-900'
                      : 'bg-yellow-400 text-black hover:bg-yellow-500'
                  }`}
                >
                  {plan.highlighted ? 'Get Started' : 'Select Plan'}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="pricing-note text-center mt-12 text-gray-400" data-aos="fade-up">
          <p>
            <strong>Note:</strong> Prices are in Pakistani Rupees (PKR). Annual plans available with 15-20% discount. 
            Contact us for corporate and group packages.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
