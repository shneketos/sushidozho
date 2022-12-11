import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setFilters(state, action) {
      state.categoryId = Number(action.payload.categoryId);
    },
  },
});

export const { setCategoryId, setFilters } = filterSlice.actions;

export default filterSlice.reducer;
