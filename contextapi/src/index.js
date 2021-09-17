import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import CartContextProvider from "./Global/CartContext";
import ContextProvider, { ProductsContext } from "./Global/ContextProvider";

ReactDOM.render(
  <React.StrictMode>
    <CartContextProvider>
      <ContextProvider>
        <App />
      </ContextProvider>
    </CartContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
