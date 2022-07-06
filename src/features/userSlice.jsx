import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    Login: (state, action) => {
      state.user = action.payload;
    },
    LogOut: (state, action) => {
      state.user = null;
    },
  },
});

export const { Login, LogOut } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
