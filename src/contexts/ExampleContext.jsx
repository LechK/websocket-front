import React, { createContext, useState } from "react";

export const ExampleContext = createContext();

//DONT FORGET TO CHANGE EXAMPLE NAME IN  main file ======> index.js
export const ExampleProvider = ({ children }) => {
  const [example, setExample] = useState("example");

  const value = {
    example,
    setExample,
  };

  return (
    <ExampleContext.Provider value={value}>{children}</ExampleContext.Provider>
  );
};
