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
    },
    Signout: (state, action) => {
      state.user = null;
    },
  },
});

export const { Signin, Signout } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
