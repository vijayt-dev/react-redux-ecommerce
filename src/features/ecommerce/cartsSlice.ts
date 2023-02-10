import { createSlice } from "@reduxjs/toolkit";
import { Carts } from "../../type";

const initialState: Carts = {
  carts: [],
  loading: true,
  error: null,
};


const cartsReducer = createSlice({
  name: "carts",
  initialState,
  reducers: {
    addCart: (state,action) => {
        state.carts.push(action.payload)
    },
    setQuantity: (state,action) => {
    }

  },
});
export default cartsReducer.reducer;
