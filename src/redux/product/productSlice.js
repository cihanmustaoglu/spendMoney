import { createSlice } from "@reduxjs/toolkit";
import products from "../../products.json";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    value: products,
  },
  reducers: {
    getProduct: (state) => {
          state.value = products;
    },
    setProduct: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { getProduct, setProduct } = productSlice.actions;

export default productSlice.reducer;
