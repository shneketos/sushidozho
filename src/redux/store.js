import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./slices/filterSlice";
import cartSlice from "./slices/cartSlice";
import itemSlice from "./slices/itemSlice";

export const store = configureStore({
  reducer: {
    filterSlice,
    cartSlice,
    itemSlice,
  },
});
