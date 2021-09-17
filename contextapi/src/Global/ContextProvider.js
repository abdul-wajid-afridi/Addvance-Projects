import React, { useState, createContext } from "react";
import canon from "../images/canon.jpg";
import facewash from "../images/facewash.jpg";
import game from "../images/game.jpg";
import handsfree from "../images/handsfree (1).jpg";
import perfume from "../images/perfume.jpg";
import pods from "../images/pods.jpg";
import sandals from "../images/sandals.jpg";
import showes from "../images/showes.jpg";
export const ProductsContext = createContext();
const ContextProvider = ({ children }) => {
  const [Products] = useState([
    { id: "1", name: "canon", price: 200, image: canon, status: "new" },
    { id: "2", name: "facewash", price: 40, image: facewash, status: "new" },
    { id: "3", name: "game pade", price: 300, image: game, status: "hot" },
    { id: "4", name: "handsfree", price: 400, image: handsfree, status: "hot" },
    { id: "5", name: "perfume", price: 500, image: perfume, status: "new" },
    { id: "6", name: "pods", price: 1200, image: pods, status: "new" },
    { id: "7", name: "sandals", price: 480, image: sandals, status: "new" },
    { id: "8", name: "showes", price: 2300, image: showes, status: "hot" },
  ]);
  return (
    <div>
      <ProductsContext.Provider value={{ Products: [...Products] }}>
        {children}
      </ProductsContext.Provider>
    </div>
  );
};

export default ContextProvider;
