import { combineReducers, createStore } from "redux";
import { userReducer, citiesReducer } from "./reducers";

export const rootReducer = combineReducers({
  user: userReducer,
  cities: citiesReducer,
});

export const store = createStore(rootReducer, {});
