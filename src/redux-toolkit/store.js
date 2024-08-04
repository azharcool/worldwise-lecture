import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import citiesReducer from "./citiesSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cities: citiesReducer,
  },
});
