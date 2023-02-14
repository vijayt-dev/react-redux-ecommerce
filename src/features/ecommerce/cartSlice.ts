import { createSlice } from "@reduxjs/toolkit";
import { Cart } from "../../type";
const initialState: Cart = {
  cart: {
    quantity: 1,
  },
};

const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      state.cart = { ...state.cart, ...action.payload };
    },
    setQuantity: (state, action) => {
      state.cart = { ...state.cart, quantity: action.payload };
    },
    setPrice: (state, action) => {
      state.cart = { ...state.cart, total: action.payload };
    },
    cartReset: (state) => {
      state.cart = initialState.cart;
    },
  },
});
export const { setQuantity, setPrice, addCart, cartReset } =
  cartReducer.actions;
export default cartReducer.reducer;
