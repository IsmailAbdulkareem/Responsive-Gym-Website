import React from "react";

const Coaches: React.FC = () => {
  const coaches = [
    {
      name: "HASSAN KHAN",
      title: "Body Building",
      imgSrc:
        "https://raw.githubusercontent.com/Manoranjan-D/responsive-website-gym/master/img/coache-1.jpg",
      alt: "coach one",
    },
    {
      name: "AHMED ALI",
      title: "Cardio Expert",
      imgSrc: "https://wallpapercave.com/wp/wp8852211.jpg",
      alt: "coach two",
    },
    {
      name: "FAISAL AHMED",
      title: "Fitness Coach",
      imgSrc:
        "https://raw.githubusercontent.com/Manoranjan-D/responsive-website-gym/master/img/coache-3.jpg",
      alt: "coach three",
    },
  ];

  const socialIcons = [
    {
      src: "https://raw.githubusercontent.com/Manoranjan-D/responsive-website-gym/master/img/logo-whatsapp.svg",
      alt: "whatsapp-icon",
    },
    {
      src: "https://raw.githubusercontent.com/Manoranjan-D/responsive-website-gym/master/img/logo-facebook.svg",
      alt: "facebook-icon",
    },
    {
      src: "https://raw.githubusercontent.com/Manoranjan-D/responsive-website-gym/master/img/logo-instagram.svg",
      alt: "instagram-icon",
    },
    {
      src: "https://raw.githubusercontent.com/Manoranjan-D/responsive-website-gym/master/img/logo-twitter.svg",
      alt: "twitter-icon",
    },
  ];

  return (
    <section className="section-coaches" id="trainers">
      <div className="container coaches-box" data-aos="fade-up">
        <header className="coache-heading">
          <h2 className="heading heading--2 underline margin-bottom">
            OUR PROFESSIONAL <span className="yellow">TRAINERS</span>
          </h2>
          <p>
            Meet our certified and experienced fitness coaches dedicated to helping you achieve your goals. Each trainer brings years of expertise in weight training, cardio, and functional fitness disciplines.
          </p>
        </header>

        <article className="coache-content">
          {coaches.map((coach, index) => (
            <div className="c-card" key={index}>
              <img
                src={coach.imgSrc}
                alt={coach.alt}
                className="c-card__img"
                width="550"
                height="550"
              />
              <div className="overlay">
                {socialIcons.map((icon, i) => (
                  <img
                    key={i}
                    src={icon.src}
                    alt={icon.alt}
                    width="30"
                    height="30"
                  />
                ))}
              </div>
              <div className="c-card__content">
                <p className="c-name">{coach.name}</p>
                <p className="c-title">{coach.title}</p>
              </div>
            </div>
          ))}
        </article>
      </div>
    </section>
  );
};

export default Coaches;
