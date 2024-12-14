import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./UI/cart/cart-slice";
import { apiSlice } from "./services/api";

export const store = configureStore({
  reducer: {
    [cartSlice.name]: cartSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddliwares) =>
    getDefaultMiddliwares().concat(apiSlice.middleware),
});
