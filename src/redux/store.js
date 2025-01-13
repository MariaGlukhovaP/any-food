import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./UI/cart/cart-slice";

export const store = configureStore({
  reducer: {
    [cartSlice.name]: cartSlice.reducer,
  },
});
