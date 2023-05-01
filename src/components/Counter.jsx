import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import { counterContext } from "../contexts/CounterContextProvider";

const Counter = () => {
  const { counter, increment, decrement } = useContext(counterContext);

  return (
    <div>
      <div>
        <h1>{counter}</h1>
        <Button onClick={decrement}>Minus</Button>
        <Button onClick={increment}>Plus</Button>
      </div>
    </div>
  );
};

export default Counter;
