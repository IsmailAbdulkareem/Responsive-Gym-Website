import React from "react";

const Review: React.FC = () => {
  const reviews = [
    {
      name: "Ali Hassan",
      imgSrc:
        "https://raw.githubusercontent.com/Manoranjan-D/responsive-website-gym/master/img/review-img-1.jpg",
      alt: "user Ali Hassan",
      text: "GYM Fitness Hub completely transformed my fitness journey. The trainers are extremely knowledgeable and the equipment is top-notch. Best decision I made for my health in Korangi!",
    },
    {
      name: "Fatima Khan",
      imgSrc:
        "https://raw.githubusercontent.com/Manoranjan-D/responsive-website-gym/master/img/review-img-2.jpg",
      alt: "user Fatima Khan",
      text: "Outstanding experience! The female trainers are professional and supportive. Clean facilities, perfect location, and affordable pricing. Highly recommend to anyone serious about fitness.",
    },
    {
      name: "Muhammad Saeed",
      imgSrc:
        "https://raw.githubusercontent.com/Manoranjan-D/responsive-website-gym/master/img/coache-1.jpg",
      alt: "user Muhammad Saeed",
      text: "I've been a member for 6 months and already see amazing results. The variety of courses and personalized guidance from Hassan Khan has been incredible. Worth every rupee!",
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
