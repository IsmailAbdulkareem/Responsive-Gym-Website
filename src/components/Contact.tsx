import React from 'react'

const Contact: React.FC = () => {
    return (
      <section className="section-contact" id="contact">
        <div className="contact-box">
          <form className="form-grp" data-aos="fade-up">
            <h2 className="heading heading--2 margin-bottom">
              Get in <span className="yellow">Touch</span>
            </h2>
  
            <input type="text" className="form form__input" placeholder="Name" />
            <input type="email" className="form form__input" placeholder="Email" />
            <input type="tel" className="form form__input" placeholder="Phone" />
            <textarea
              name="message"
              cols={5}
              rows={3}
              className="form form__input"
              placeholder="Message"
            ></textarea>
            <button type="submit" className="btn btn__primary form-flex">Send</button>
          </form>
          <div id="mapid" data-aos="fade-up"></div>
        </div>
      </section>
    );
  };
  

export default Contact;
