import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userSlice from "../reducer/UserReducer";
import cartSlice from "../reducer/CartReducer";

const reducers = combineReducers({
  User: userSlice,
  Cart: cartSlice,
});

export const store = configureStore({
  reducer: reducers,
});
