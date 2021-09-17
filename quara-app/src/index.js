import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ContaxtProvider from "./GlobalData/ContaxtProvider";
import reducer, { initialState } from "./GlobalData/reducer";

ReactDOM.render(
  <React.StrictMode>
    <ContaxtProvider initialState={initialState} reducer={reducer}>
      <App />
    </ContaxtProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
