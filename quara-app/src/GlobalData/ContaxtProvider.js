import React, { createContext, useContext, useReducer } from "react";
export const ContexApi = createContext();
const ContaxtProvider = ({ children, reducer, initialState }) => {
  return (
    <ContexApi.Provider value={useReducer(reducer, initialState)}>
      {children}
    </ContexApi.Provider>
  );
};
export const useGlobalContext = () => useContext(ContexApi);

export default ContaxtProvider;
