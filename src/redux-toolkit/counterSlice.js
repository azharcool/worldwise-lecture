import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increaseCount: (state, action) => {
      state.count = state.count + 1;
    },
    descreaseCount: (state, action) => {
      state.count = state.count - 1;
    },
    increaseCountByValue: () => {},
  },
});

export const { increaseCount, descreaseCount, increaseCountByValue } =
  counterSlice.actions;
export default counterSlice.reducer;
