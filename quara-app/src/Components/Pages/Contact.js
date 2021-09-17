import Aos from "aos";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import "./styles/Contact.css";
const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="contact">
      <div className="contact__container">
        <div data-aos="fade-right" className="contact__info">
          <div className="user">
            <i className="fas fa-user">
              i am Abdul wajid as a front End developer
            </i>
          </div>
          <div className="email">
            <i className="fas fa-envelope">wajidafridi8554@gmail.com</i>
          </div>
          <div className="address">
            <i className="fas fa-map-marker-alt">
              peshawar near tablighy markaz basheer abad
            </i>
          </div>
          <div className="phone">
            <i className="fas fa-phone">03000131373</i>
          </div>
        </div>
        <div className="container__form">
          <form data-aos="fade-left">
            <h3>GET IN TOUCH</h3>
            <input placeholder="  YOUR NAME" />
            <input placeholder="YOUR EMAIl" />
            <textarea placeholder="YOUR MESSAGE" />

            <button className="contact__btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
