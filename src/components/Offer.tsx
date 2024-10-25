import React from "react";

const Offer: React.FC = () => {
  return (
    <section className="section-offer" id="offer">
      <div className="offer-box">
        <div className="offer" data-aos="fade-up">
          <h2 className="heading heading--2 margin-bottom">
            Special offer this summer: get full benefits for a year with a 20%
            discount.
          </h2>
          <p className="margin-bottom">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur exercitationem amet quas repellendus esse natus.
          </p>
          <button className="btn btn__primary">Become a member</button>
        </div>

        <div className="offer-img"></div>
      </div>
    </section>
  );
};

export default Offer;
