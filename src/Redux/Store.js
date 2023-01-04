import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./LoginReducer";

const store = configureStore({
  loginReducer: loginSlice,
});
export default store;
