import { createSlice } from "@reduxjs/toolkit";
import { Theme } from "../../type";

const initialState: Theme = {
  theme: "light",
};

const themeReducer = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = themeReducer.actions;
export default themeReducer.reducer;
