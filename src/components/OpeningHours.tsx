import React from 'react';

const OpeningHours: React.FC = () => {
  const hours = [
    { day: 'Monday', hours: '6:00 AM - 10:00 PM' },
    { day: 'Tuesday', hours: '6:00 AM - 10:00 PM' },
    { day: 'Wednesday', hours: '6:00 AM - 10:00 PM' },
    { day: 'Thursday', hours: '6:00 AM - 10:00 PM' },
    { day: 'Friday', hours: '6:00 AM - 10:00 PM' },
    { day: 'Saturday', hours: '7:00 AM - 10:00 PM' },
    { day: 'Sunday', hours: '7:00 AM - 9:00 PM' }
  ];

  return (
    <section className="section-hours bg-gray-950 py-16" id="hours">
      <div className="container max-w-4xl mx-auto">
        <div className="hours-content" data-aos="fade-up">
          <h2 className="heading heading--2 text-center margin-bottom text-white">
            Opening <span className="yellow">Hours</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="hours-grid">
              {hours.slice(0, 4).map((slot, index) => (
                <div key={index} className="hour-item flex justify-between items-center py-4 border-b border-gray-700 hover:bg-gray-900 px-4 rounded transition-colors">
                  <span className="font-bold text-yellow-400 text-lg">{slot.day}</span>
                  <span className="text-white text-lg">{slot.hours}</span>
                </div>
              ))}
            </div>

            <div className="hours-grid">
              {hours.slice(4).map((slot, index) => (
                <div key={index} className="hour-item flex justify-between items-center py-4 border-b border-gray-700 hover:bg-gray-900 px-4 rounded transition-colors">
                  <span className="font-bold text-yellow-400 text-lg">{slot.day}</span>
                  <span className="text-white text-lg">{slot.hours}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hours-info mt-12 bg-gray-900 p-8 rounded-lg border-l-4 border-yellow-400">
            <h3 className="text-yellow-400 font-bold mb-3">Quick Info:</h3>
            <ul className="text-gray-300 space-y-2">
              <li>✓ <strong>24/7 Member Access:</strong> Premium and Elite members can access the gym anytime</li>
              <li>✓ <strong>Staff Hours:</strong> 6:00 AM - 10:00 PM (All Days) for assistance and training</li>
              <li>✓ <strong>Closed:</strong> Every Eid and major holidays</li>
              <li>✓ <strong>Location:</strong> Plot 25-A, Block-10, Korangi, Karachi, Pakistan</li>
            </ul>
          </div>

          <div className="hours-contact mt-8 text-center">
            <p className="text-gray-300 mb-4">Have questions about our hours? Contact us now!</p>
            <div data-aos="fade-up" className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="https://wa.me/923001234567?text=Hi!%20What%20are%20your%20exact%20opening%20hours?" target="_blank" rel="noopener noreferrer" className="btn btn__primary">
                Message on WhatsApp
              </a>
              <span className="text-gray-400">or</span>
              <a href="tel:+923001234567" className="btn btn__secondary">
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpeningHours;
