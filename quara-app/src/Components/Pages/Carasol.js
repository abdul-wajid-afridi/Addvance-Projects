import Aos from "aos";
import React, { useEffect } from "react";
import "./styles/Carasole.css";
import "aos/dist/aos.css";
const Carasol = ({ image, desc }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="carasole">
      <img src={image} className="image" />
      <h4>{desc}</h4>
      <h2 className="right">{">"}</h2>
      <h2 className="left">{"<"}</h2>
    </div>
  );
};

export default Carasol;
