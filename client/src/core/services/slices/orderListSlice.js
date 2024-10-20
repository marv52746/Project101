import { createSlice } from "@reduxjs/toolkit";

export const orderListSlice = createSlice({
  name: "orderList",
  initialState: {
    orders: [],
    loading: false,
    error: null,
  },

  reducers: {
    fetchOrdersRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchOrdersSuccess: (state, action) => {
      state.loading = false;
      state.orders = action.payload;
    },
    fetchOrdersFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addOrder: (state, action) => {
      state.orders.push(action.payload);
    },
    updateOrder: (state, action) => {
      const index = state.orders.findIndex(
        (order) => order._id === action.payload._id
      );
      if (index !== -1) {
        state.orders[index] = action.payload;
      }
    },
    deleteOrder: (state, action) => {
      state.orders = state.orders.filter(
        (order) => order._id !== action.payload
      );
    },
  },
});

// Export actions
export const {
  fetchOrdersRequest,
  fetchOrdersSuccess,
  fetchOrdersFailure,
  addOrder,
  updateOrder,
  deleteOrder,
} = orderListSlice.actions;

// Export reducer
export default orderListSlice.reducer;
