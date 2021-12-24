import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  isLogin: false,
  authUser: {},
};

export const userSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users = [...state.users, action.payload];
    },
    setIsLogin: (state, action) => {
      state.isLogin = action.payload;
    },
    setAuthUser: (state, action) => {
      state.authUser = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addUser, setAuthUser, setIsLogin } = userSlice.actions;

export default userSlice.reducer;
