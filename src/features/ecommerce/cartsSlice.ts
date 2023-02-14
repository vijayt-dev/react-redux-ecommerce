import { createSlice } from "@reduxjs/toolkit";
import { Carts } from "../../type";

const initialState: Carts = {
  carts: [],
};

const cartsReducer = createSlice({
  name: "carts",
  initialState,
  reducers: {
    addCarts: (state, action) => {
      state.carts.push(action.payload);
    },
    setQuantity: (state, action) => {
      state.carts = state.carts.filter((cart) =>
        cart.id === action.payload.id
          ? (cart.quantity = action.payload.quantity)
          : cart.quantity
      );
    },
    setPrice: (state, action) => {
      state.carts = state.carts.filter((cart) =>
        cart.id === action.payload.id
          ? (cart.total = action.payload.total)
          : cart.total
      );
    },
    removeCarts: (state, action) => {
      state.carts = state.carts.filter((cart) => cart.id !== action.payload.id);
    },
  },
});
export const { addCarts, setQuantity, setPrice, removeCarts } =
  cartsReducer.actions;
export default cartsReducer.reducer;
