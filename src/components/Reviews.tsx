import React from "react";

const Review: React.FC = () => {
  const reviews = [
    {
      name: "Cesar Rincon",
      imgSrc:
        "https://raw.githubusercontent.com/Manoranjan-D/responsive-website-gym/master/img/review-img-1.jpg",
      alt: "user Cesar Rincon",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente possimus aperiam",
    },
    {
      name: "Mathilde Langevin",
      imgSrc:
        "https://raw.githubusercontent.com/Manoranjan-D/responsive-website-gym/master/img/review-img-2.jpg",
      alt: "user Mathilde Langevin",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente possimus aperiam",
    },
  ];

  return (
    <section className="section-review" id="review">
      <div className="review-box container" data-aos="fade-up">
        <h2 className="heading heading--2 underline margin-bottom grid-center">
          what people say
        </h2>

        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <img
              src={review.imgSrc}
              alt={review.alt}
              className="review-card__image"
              width="100"
              height="100"
            />
            <blockquote className="review-card__content">
              <p className="text">{review.text}</p>
              <div className="name">{review.name}</div>
            </blockquote>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Review;
