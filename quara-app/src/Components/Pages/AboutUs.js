import React, { useEffect } from "react";
import "./styles/AboutUs.css";
import profile from "../../Images/profile.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
const AboutUs = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="aboutus__container">
      <div data-aos="slide-right" className="aboutus__section">
        <h2>ABOUT US</h2>
        <p>
          Ad amet sint sunt reprehenderit nostrud ex pariatur elit exercitation
          non mollit non. Eu proident aliquip sint minim Lorem consequat minim
          laboris. Aliqua sunt non nostrud id anim magna velit. Do consequat do
          eu irure reprehenderit quis. Occaecat magna excepteur ipsum labore.
          Exercitation dolore nostrud ullamco Lorem do enim eu cillum labore ea
          ad magna. Tempor esse duis velit adipisicing dolor duis reprehenderit
          labore.
        </p>
      </div>
      <div className="aboutus__image">
        <img data-aos="slide-left" src={profile} />
        <div className="aboutus__icons">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
        </div>
      </div>
      <div className="dot1"></div>
      <div className="dot2" data-aos="fade-down"></div>
    </div>
  );
};

export default AboutUs;
