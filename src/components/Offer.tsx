import React from "react";

const Offer: React.FC = () => {
  return (
    <section className="section-offer" id="offer">
      <div className="offer-box">
        <div className="offer" data-aos="fade-up">
          <h2 className="heading heading--2 margin-bottom">
            Special offer this summer: Join now and get 3 months free personal training with any annual membership. Limited slots available!
          </h2>
          <p className="margin-bottom">
            Achieve your fitness goals with professional guidance and our complete range of services. Start your transformation today and become the best version of yourself.
          </p>
          <button className="btn btn__primary">Become a member</button>
        </div>

        <div className="offer-img"></div>
      </div>
    </section>
  );
};

export default Offer;
