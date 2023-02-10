import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Product } from "../../type";

const initialState: Product = {
  product: {},
  loading: false,
  error: null,
};

export const fetchProductById = createAsyncThunk(
  "product/fetchProductById",
  async (id: string) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    return await response.json();
  }
);

const productReducer = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProductById.fulfilled, (state, action) => {
      state.product = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchProductById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProductById.rejected, (state) => {
      state.error = "Something Went Wrong";
      state.loading = false;
    });
  },
});

export default productReducer.reducer;
