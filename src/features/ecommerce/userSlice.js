import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  loading: true,
  error: null,
};

const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userReducer.actions;
export default userReducer.reducer;
