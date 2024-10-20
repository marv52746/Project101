// src/core/slices/customerSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const customerSlice = createSlice({
  name: "customerList",
  initialState: {
    customers: [],
    loading: false,
    error: null,
  },

  reducers: {
    fetchCustomersRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchCustomersSuccess: (state, action) => {
      state.loading = false;
      state.customers = action.payload;
    },
    fetchCustomersFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addCustomer: (state, action) => {
      state.customers.push(action.payload);
    },
    updateCustomer: (state, action) => {
      const index = state.customers.findIndex(
        (customer) => customer._id === action.payload._id
      );
      if (index !== -1) {
        state.customers[index] = action.payload;
      }
    },
    deleteCustomer: (state, action) => {
      state.customers = state.customers.filter(
        (customer) => customer._id !== action.payload
      );
    },
  },
});

// Export actions
export const {
  fetchCustomersRequest,
  fetchCustomersSuccess,
  fetchCustomersFailure,
  addCustomer,
  updateCustomer,
  deleteCustomer,
} = customerSlice.actions;

// Export reducer
export default customerSlice.reducer;
