import { DECREMENT, INCREMENT, RESET } from "./actionTypes";

export const incrementCounter = (value) => {
  return {
    type: INCREMENT,
    payload: value,
  };
};
export const decrementCounter = (value) => {
  return {
    type: DECREMENT,
    payload: value,
  };
};
export const resetCounter = () => {
  return {
    type: RESET,
  };
};
