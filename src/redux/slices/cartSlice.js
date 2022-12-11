import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";
import { getCartFromLS } from "../utils/getCartFromLS";
import { CartItem, CartSliceState } from "./type";
import { calcTotalPrice } from "../utils/calcTotalPrice";
const initialState = getCartFromLS();

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
    removeItem(state, action) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      state.totalPrice = calcTotalPrice(state.items);
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
    minusItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      if (findItem && findItem.count > 0) {
        findItem.count--;
        state.totalPrice -= findItem.price;
      }
      if (findItem.count === 0) {
        state.items = state.items.filter((obj) => obj.id !== action.payload);
      }
    },
  },
});

export const selectCart = (state) => state.cartSlice;

export const { addItem, removeItem, clearItems, minusItem } = cartSlice.actions;

export default cartSlice.reducer;
