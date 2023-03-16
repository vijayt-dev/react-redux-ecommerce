import { createSlice } from "@reduxjs/toolkit";
import { Page } from "../../type";

const initialState: Page = {
  page: 1,
};

const paginationReducer = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { setPage } = paginationReducer.actions;

export default paginationReducer.reducer;
