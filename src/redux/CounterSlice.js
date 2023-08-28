import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    incrementCount: (state, action) => {
      state.count = state.count + action.payload;
    },
    decrementCount: (state, action) => {
      state.count = state.count - action.payload;
    },
    resetCount: (state) => {
      state.count = 0;
    },
  },
});

export const { incrementCount, decrementCount, resetCount } =
  counterSlice.actions;

export default counterSlice.reducer;
