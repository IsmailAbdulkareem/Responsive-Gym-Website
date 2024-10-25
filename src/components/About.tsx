import { url } from 'inspector';
import React from 'react';

const About: React.FC = () => {
  return (
    <section className="section-about" id="about">
      <div className="about-box container">
        <div className="about-box__content" data-aos="fade-up">
          <h2 className="heading heading--2">
            About <span className="yellow">ISMAIL </span>Fitness
          </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
            dolor perferendis repellat ipsam fugiat dolorum possimus, modi ut
            est saepe tempora earum. Consectetur blanditiis voluptatibus,
            molestias explicabo tempora quae facilis.
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
