import { url } from 'inspector';
import React from 'react';

const About: React.FC = () => {
  return (
    <section className="section-about" id="about">
      <div className="about-box container">
        <div className="about-box__content" data-aos="fade-up">
          <h2 className="heading heading--2">
            About <span className="yellow">GYM Fitness</span> Hub
          </h2>
          <p>
            Welcome to GYM Fitness Hub - your premier destination for complete fitness transformation. We combine state-of-the-art equipment with expert guidance to help you achieve your goals. Whether you're a beginner or an experienced athlete, our professional trainers are dedicated to creating personalized fitness plans that deliver real results.
          </p>
          <a href="#" className="link-button">Read More →</a>
        </div>
        <figure className="about-box__image" data-aos="fade-up">
          <img
            src={"https://raw.githubusercontent.com/Manoranjan-D/responsive-website-gym/master/img/about-img-1.jpg"}
            alt="about-image-one"
            width={350}
            height={233}
          />
          <img
            src="https://raw.githubusercontent.com/Manoranjan-D/responsive-website-gym/master/img/about-img-2.jpg"
            alt="about-image-two"
            width={350}
            height={233}
          />
          <img
            src="https://raw.githubusercontent.com/Manoranjan-D/responsive-website-gym/master/img/about-img-3.jpg"
            alt="about-image-three"
            width={420}
            height={280}
          />
        </figure>
      </div>
    </section>
  );
};

export default About;
