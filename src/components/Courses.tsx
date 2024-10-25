import React from "react";

const Courses: React.FC = () => {
  return (
    <section className="section-courses" id="courses">
      <div className="container courses-box" data-aos="fade-up">
        <header className="courses-heading">
          <h2 className="heading heading--2 underline">Our Courses</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
            ducimus illum corporis magni voluptas, ex eum dolorum quia
            officia! Deleniti quia ut.
          </p>
        </header>

        <article className="courses-content">
          {[
            {
              title: "Body Building",
              imgSrc:
                "https://raw.githubusercontent.com/Manoranjan-D/responsive-website-gym/master/img/courses-bodybuilding.jpg",
              alt: "body building course",
            },
            {
              title: "Cross Fit",
              imgSrc:
                "https://raw.githubusercontent.com/Manoranjan-D/responsive-website-gym/master/img/courses-crossfit.jpg",
              alt: "cross fit course",
            },
            {
              title: "Gymnastic",
              imgSrc:
                "https://raw.githubusercontent.com/Manoranjan-D/responsive-website-gym/master/img/courses-gymnastic.jpg",
              alt: "gymnastic course",
            },
            {
              title: "Fitness",
              imgSrc:
                "https://raw.githubusercontent.com/Manoranjan-D/responsive-website-gym/master/img/courses-fitness.jpg",
              alt: "fitness course",
            },
            {
              title: "TRX",
              imgSrc:
                "https://raw.githubusercontent.com/Manoranjan-D/responsive-website-gym/master/img/courses-TRX.jpg",
              alt: "TRX course",
            },
            {
              title: "Boxing",
              imgSrc:
                "https://raw.githubusercontent.com/Manoranjan-D/responsive-website-gym/master/img/courses-boxing.jpg",
              alt: "boxing course",
            },
          ].map((course, index) => (
            <div className="class-card" key={index}>
              <img
                className="class-card__img"
                src={course.imgSrc}
                alt={course.alt}
                width="550"
                height="550"
              />
              <div className="class-card__overlay">
                <div className="text">
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ratione culpa
                  </p>
                  <a href="#" className="link-button">
                    Read More →
                  </a>
                </div>
              </div>
              <div className="class-card__title">{course.title}</div>
            </div>
          ))}
        </article>
      </div>
    </section>
  );
};

export default Courses;
