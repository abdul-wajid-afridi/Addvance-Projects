import React, { createContext, useContext, useReducer } from "react";
import CartReducer from "./CartReducer";
import Products from "./Products";
export const CartContext = createContext();
const CartContextProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(CartReducer, {
    ShoppingCart: [],
    qty: 0,
    totalPrice: 0,
  });
  return (
    <div>
      <CartContext.Provider value={{ ...cart, dispatch }}>
        {children}
      </CartContext.Provider>
    </div>
  );
};
export const useGlobalContext = () => {
  return useContext(CartContext);
};

export default CartContextProvider;
