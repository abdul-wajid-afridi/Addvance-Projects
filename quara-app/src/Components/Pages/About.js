import React from "react";
import "./styles/About.css";
const About = () => {
  return (
    <div className="about">
      <div className="about__container">
        <h3>PEAGONS</h3>
        <div className="peagons">
          <div className="span1"></div>
        </div>
        <h3>DUCKS</h3>
        <div className="ducks">
          <div className="span2"></div>
        </div>
        <div className="round1"></div>
        <h3>EAGLES</h3>
        <div className="eagles">
          <div className="span3"></div>
        </div>
        <h3>PARROTS</h3>
        <div className="parrotes">
          <div className="span4"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
