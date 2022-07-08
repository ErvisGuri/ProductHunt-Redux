import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    Signin: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    Signout: (state, action) => {
      state.user = null;
      localStorage.setItem("user", JSON.stringify(state.user));
    },
  },
});

export const { Signin, Signout } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
