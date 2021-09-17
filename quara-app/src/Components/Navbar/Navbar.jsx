import React, { useEffect, useState } from "react";
import "./Navbar.css";
export const Navbar = () => {
  const [Icon, setIcon] = useState(false);

  return (
    <>
      <nav className="nav-items">
        {/* ****************ICONS**************** */}
        <div className="close" onClick={() => setIcon(!Icon)}>
          <i>{Icon ? "x" : "@"}</i>
        </div>
        {/* ****************ICONS ENDS**************** */}

        {/* ****************NAV MENU**************** */}
        <div className={Icon ? "nav-menu active" : "nav-menu"}>
          <a href="#" className="cName">
            Home
          </a>

          <a href="#" className="cName">
            Gallary
          </a>

          <a href="#" className="cName">
            About us
          </a>

          <a href="#" className="cName">
            Contact us
          </a>
        </div>
        {/* ****************NAV MENU ENDS**************** */}
      </nav>
    </>
  );
};
export default Navbar;
