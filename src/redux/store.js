import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./BookSlice";
import counterReducer from "./CounterSlice";

const store = configureStore({
  reducer: {
    bookReducer: bookReducer,
    counterReducer: counterReducer,
  },
});

export default store;
