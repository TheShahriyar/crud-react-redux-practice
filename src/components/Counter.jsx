import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementCount,
  incrementCount,
  resetCount,
} from "../redux/CounterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counterReducer.count);

  const dispatch = useDispatch();
  const handleIncrement = (value) => {
    dispatch(incrementCount(value));
  };
  const handleDecrement = (value) => {
    dispatch(decrementCount(value));
  };
  const handleReset = () => {
    dispatch(resetCount());
  };
  return (
    <div>
      <h1>Hello From Counter App</h1>
      <h2>Count: {count}</h2>
      <button
        type="button"
        onClick={() => handleIncrement(5)}
        className="positive"
      >
        Increment
      </button>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
      <button
        type="button"
        onClick={() => handleDecrement(2)}
        className="negetive"
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
