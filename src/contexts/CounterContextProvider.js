import React, { createContext, useState } from "react";

export const counterContext = createContext();

const CounterContextProvider = ({ children }) => {
  let [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  function decrement() {
    setCounter(counter - 1);
  }

  let values = {
    counter,
    decrement,
    increment,
  };

  return (
    <counterContext.Provider value={values}>{children}</counterContext.Provider>
  );
};

export default CounterContextProvider;
