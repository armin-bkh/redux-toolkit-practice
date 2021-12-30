import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 0 };

const counterReducer = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.value += 1;
    },
    decrement: (state, action) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterReducer.actions;
export default counterReducer.reducer;
