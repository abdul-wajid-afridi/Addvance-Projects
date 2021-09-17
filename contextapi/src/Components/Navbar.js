import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Global/CartContext";
import "./Navbar.css";
const Navbar = () => {
  const cart = useContext(CartContext);
  return (
    <>
      <nav>
        <ul className="left">
          <li>
            <Link to="/" className="logo">
              Express
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/cart">
              <span className="cart">
                <i className="fas fa-cart-plus"></i>
              </span>
              <span className="add">
                <i>{cart.qty}</i>
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
