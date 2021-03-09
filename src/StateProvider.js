import React, { createContext, useContext, useReducer } from "react";

// Prepaers the dataLayer
export const StateContext = createContext();
//Wrap app and provide the Data layer
export const StateProvaider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
</StateContext.Provider>
);

//Pull information from the Data layer
export const useStateValue = () => useContext(StateContext);
