// src/core/services/API/orders.js

import {
  fetchOrdersRequest,
  fetchOrdersSuccess,
  fetchOrdersFailure,
  addOrder,
  updateOrder,
  deleteOrder,
} from "../slices/orderListSlice"; // Adjust the import path as necessary
import apiService from "../apiService"; // Importing the centralized API service

// Fetch orders
export const getOrders = () => {
  return (dispatch) => {
    dispatch(fetchOrdersRequest()); // Start the loading state
    return apiService
      .get(dispatch, "orders")
      .then((data) => dispatch(fetchOrdersSuccess(data)))
      .catch(() => dispatch(fetchOrdersFailure("Failed to fetch orders")));
  };
};

// Add a new order
export const createOrder = (orderData) => {
  return (dispatch) => {
    dispatch(fetchOrdersRequest()); // Start the loading state
    return apiService
      .post(dispatch, "orders", orderData)
      .then((data) => dispatch(addOrder(data)))
      .catch(() => dispatch(fetchOrdersFailure("Failed to create order")));
  };
};

// Update an existing order
export const editOrder = (orderId, orderData) => {
  return (dispatch) => {
    dispatch(fetchOrdersRequest()); // Start the loading state
    return apiService
      .put(dispatch, "orders", orderId, orderData)
      .then((data) => dispatch(updateOrder(data)))
      .catch(() => dispatch(fetchOrdersFailure("Failed to update order")));
  };
};

// Delete an order
export const removeOrder = (orderId) => {
  return (dispatch) => {
    dispatch(fetchOrdersRequest()); // Start the loading state
    return apiService
      .delete(dispatch, "orders", orderId)
      .then(() => dispatch(deleteOrder(orderId)))
      .catch(() => dispatch(fetchOrdersFailure("Failed to delete order")));
  };
};
