import React from "react";
import ReactTyped from "react-typed";
const MainPage = () => {
  return (
    <div className="container-wraper">
      <div className="inside-text">
        <h1>WELLCOME TO THE THE BILLO SHOP</h1>
        <ReactTyped
          strings={[
            "WELLCOME HERE",
            "OUR ONLINE SHOP",
            "GOOD TO SEE YOU HERE LETS JUST SHOP",
          ]}
          className="typed-text"
          typeSpeed={60}
          backSpeed={40}
          loop
        />
      </div>
    </div>
  );
};

export default MainPage;
