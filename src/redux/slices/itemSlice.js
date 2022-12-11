import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchItems = createAsyncThunk(
  "item/fetchItemsStatus",
  async (params) => {
    const { categoryId } = params;
    const { data } = await axios.get(
      `https://637d04ca16c1b892ebc5bfcd.mockapi.io/Items?${
        categoryId > 0 ? `category=${categoryId}` : ""
      }`
    );
    return data;
  }
);

const initialState = {
  items: [],
  status: "loading", //load | usc |error
};

const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchItems.pending]: (state) => {
      state.status = "loading";
      state.items = [];
    },
    [fetchItems.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "success";
    },
    [fetchItems.rejected]: (state, action) => {
      state.status = "error";
      state.items = [];
    },
  },
});

export const { setItems } = itemSlice.actions;

export default itemSlice.reducer;
