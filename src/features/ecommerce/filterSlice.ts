import { createSlice } from "@reduxjs/toolkit";
import { Filters } from "../../type";

const initialState: Filters = {
  selectedCategories: [],
  searchInput: "",
};

const filterReducer = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSearchInput: (state, action) => {
      state.searchInput = action.payload;
    },
    setSelectedCategories: (state, action) => {
      state.selectedCategories = action.payload;
    },
  },
});

export const { setSearchInput, setSelectedCategories } = filterReducer.actions;

export default filterReducer.reducer;
