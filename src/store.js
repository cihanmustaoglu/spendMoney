import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./redux/product/productSlice";
import basketReducer from "./redux/basket/basketSlice";

export default configureStore({
  reducer: {
        product: productReducer,
        basket: basketReducer,
  },
});
