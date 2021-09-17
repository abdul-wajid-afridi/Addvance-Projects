import React from "react";
import "./Gallary.css";
const Gallary = ({ image, name, desc }) => {
  return (
    <>
      <div className="card">
        <img src={image} className="img" />
        <div className="desc">
          <h3>{name}</h3>
          <p>{desc}</p>
          <button className="bnt-gallary">BUY</button>
        </div>
      </div>
    </>
  );
};

export default Gallary;
