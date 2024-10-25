import React from 'react'

const Hero = () => {
    return (
      <section className="section-hero">
        <div className="container hero-box">
          <div className="hero-content margin-bottom">
            <h1 className="heading heading--1 margin-bottom">A place for your fitness goals</h1>
            <p className="description">We Offer Functional Training, Plyometric Boxes, Aerobics classes, TRX And Much More</p>
          </div>
          <div className="btn-group">
            <button className="btn btn__primary margin-right margin-bottom">Join us</button>
            <button className="btn btn__secondary">Our services</button>
          </div>
        </div>
      </section>
    );
  };
  
  export default Hero;
  