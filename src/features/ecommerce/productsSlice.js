import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  loading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    return await response.json();
  }
);

const productsReducer = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.rejected, (state) => {
      state.error = "Something Went Wrong";
      state.loading = false;
    });
  },
});

export const { products } = productsReducer.actions;
export default productsReducer.reducer;
