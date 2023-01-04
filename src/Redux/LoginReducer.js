import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "loginReducer",
  initialState: {
    name: "sagar",
    email: "sagarabbasi7786@gmail.com",
    password: "abc",
  },
  reducers: {
    edit(state, action) {
      console.log(action.payload);
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
  },
});
export const { edit } = loginSlice.actions;
export default loginSlice.reducer;
