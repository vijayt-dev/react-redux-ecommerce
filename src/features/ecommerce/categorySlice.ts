import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Categories } from "../../type";

const initialState: Categories = {
  categories: [],
  error: null,
};

export const fetchCategories = createAsyncThunk(
  "category/fetchCategories",
  async () => {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
    return await response.json();
  }
);

const categoryReducer = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
    builder.addCase(fetchCategories.rejected, (state) => {
      state.error = "Something Went Wrong";
    });
  },
});

export default categoryReducer.reducer;
