// src/core/slices/saleListSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const saleListSlice = createSlice({
  name: "saleList",
  initialState: {
    sales: [],
    loading: false,
    error: null,
  },

  reducers: {
    fetchSalesRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchSalesSuccess: (state, action) => {
      state.loading = false;
      state.sales = action.payload;
    },
    fetchSalesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addSale: (state, action) => {
      state.sales.push(action.payload);
    },
    updateSale: (state, action) => {
      const index = state.sales.findIndex(
        (sale) => sale._id === action.payload._id
      );
      if (index !== -1) {
        state.sales[index] = action.payload;
      }
    },
    deleteSale: (state, action) => {
      state.sales = state.sales.filter((sale) => sale._id !== action.payload);
    },
  },
});

// Export actions
export const {
  fetchSalesRequest,
  fetchSalesSuccess,
  fetchSalesFailure,
  addSale,
  updateSale,
  deleteSale,
} = saleListSlice.actions;

// Export reducer
export default saleListSlice.reducer;
