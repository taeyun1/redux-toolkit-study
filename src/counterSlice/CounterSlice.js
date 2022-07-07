import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counterSliceTest",
  initialState: {
    value: 0,
  },
  reducers: {
    UP: (state, action) => {
      console.log(action);
      state.value = state.value + action.payload;
    },
    DOWN: (state, action) => {
      state.value = state.value - action.step;
    },
  },
});

export default counterSlice;
export const { UP } = counterSlice.actions;
