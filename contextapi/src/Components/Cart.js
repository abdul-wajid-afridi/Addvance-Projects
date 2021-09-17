import React, { useContext } from "react";
import CartContextProducts, { CartContext } from "../Global/CartContext";
import "./Cart.css";
const Cart = () => {
  const { ShoppingCart, totalPrice, qty } = useContext(CartContext);
  return (
    <div className="cart-container">
      {ShoppingCart.map((cart) => {
        return (
          <div className="cart-card" key={cart.id}>
            <img src={cart.image} className="image" />
            <p>{cart.price}</p>
            <p>{cart.name}</p>
            <p>{cart.qty}</p>
            <span className="plus">+</span>
            <span className="minus">-</span>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
