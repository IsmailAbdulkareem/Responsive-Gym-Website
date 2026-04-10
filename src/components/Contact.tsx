import React from 'react'

const Contact: React.FC = () => {
    return (
      <section className="section-contact" id="contact">
        <div className="container margin-bottom">
          <header className="text-center margin-bottom" data-aos="fade-up">
            <h2 className="heading heading--2 underline">
              Get in <span className="yellow">Touch</span>
            </h2>
            <p className="margin-top">
              Have questions about our gym, membership plans, or programs? Reach out to us and our team will get back to you within 24 hours.
            </p>
          </header>
        </div>
        
        <div className="contact-box">
          <form className="form-grp" data-aos="fade-up">
            <h3 className="heading heading--3 margin-bottom">Send us a Message</h3>
  
            <input type="text" className="form form__input" placeholder="Your Name" required />
            <input type="email" className="form form__input" placeholder="Your Email" required />
            <input type="tel" className="form form__input" placeholder="Your Phone Number" />
            <textarea
              name="message"
              cols={5}
              rows={5}
              className="form form__input"
              placeholder="Tell us more about your fitness goals or any questions you have..."
              required
            ></textarea>
            <button type="submit" className="btn btn__primary form-flex">Send Message</button>
          </form>
          
          <div className="map-container" data-aos="fade-up">
            <iframe
              width="100%"
              height="500"
              frameBorder="0"
              style={{ border: 0, borderRadius: '8px' }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.7766661215387!2d74.29168!3d24.81755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f0!1s0x3f0!5e0!3m2!1sen!2s!4v123456"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="GYM Fitness Hub Location - Korangi, Karachi"
            ></iframe>
            <div className="map-info mt-4 text-gray-300">
              <p><strong>📍 Location:</strong> Plot 25-A, Block-10, Korangi, Karachi, Pakistan</p>
              <p><strong>📞 Phone:</strong> +92-300-1234567</p>
              <p><strong>⏰ Hours:</strong> 6:00 AM - 10:00 PM (Mon-Fri), 7:00 AM - 10:00 PM (Sat-Sun)</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  

export default Contact;
