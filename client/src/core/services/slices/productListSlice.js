// src/core/slices/productListSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const productListSlice = createSlice({
  name: "productList",
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchProductsRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchProductsSuccess: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    fetchProductsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    updateProduct: (state, action) => {
      const index = state.products.findIndex(
        (product) => product._id === action.payload._id
      );
      if (index !== -1) {
        state.products[index] = action.payload;
      }
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product._id !== action.payload
      );
    },
  },
});

// Export actions
export const {
  fetchProductsRequest,
  fetchProductsSuccess,
  fetchProductsFailure,
  addProduct,
  updateProduct,
  deleteProduct,
} = productListSlice.actions;

// Export reducer
export default productListSlice.reducer;
