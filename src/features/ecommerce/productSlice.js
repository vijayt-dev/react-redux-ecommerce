import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  product: {},
  loading: false,
  productError: null,
  productsError: null
};

export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    return await response.json();
  }
);
export const fetchProductById = createAsyncThunk(
  "product/fetchProductById",
  async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    return await response.json();
  }
);

const productsReducer = createSlice({
  name: "product",
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
      state.productsError = "Something Went Wrong";
      state.loading = false;
    });
    builder.addCase(fetchProductById.fulfilled, (state, action) => {
      state.product = action.payload;
      state.loading = false;
      
    });
    builder.addCase(fetchProductById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProductById.rejected, (state) => {
      state.productError = "Something Went Wrong";
      state.loading = false;
    });
  },
});

export const { products } = productsReducer.actions;
export default productsReducer.reducer;
