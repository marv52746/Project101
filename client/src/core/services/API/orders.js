// src/core/services/API/orders.js

import {
  fetchOrdersRequest,
  fetchOrdersSuccess,
  fetchOrdersFailure,
  addOrder,
  updateOrder,
  deleteOrder,
} from "../slices/orderListSlice";
import apiService from "../apiService"; // Importing the centralized API service

// Fetch orders
export const getOrders = () => {
  return async (dispatch) => {
    dispatch(fetchOrdersRequest()); // Start the loading state
    try {
      const response = await apiService.get("orders");
      dispatch(fetchOrdersSuccess(response.data)); // Dispatch success action
    } catch (error) {
      console.error("Error fetching orders:", error);
      dispatch(fetchOrdersFailure(error.message)); // Dispatch failure action
    }
  };
};

// Add a new order
export const createOrder = (orderData) => {
  return async (dispatch) => {
    dispatch(fetchOrdersRequest()); // Start the loading state
    try {
      const response = await apiService.post("orders", orderData);
      dispatch(addOrder(response.data)); // Dispatch action to add order
    } catch (error) {
      console.error("Error creating order:", error);
      dispatch(fetchOrdersFailure(error.message)); // Dispatch failure action
    }
  };
};

// Update an existing order
export const editOrder = (orderId, orderData) => {
  return async (dispatch) => {
    dispatch(fetchOrdersRequest()); // Start the loading state
    try {
      const response = await apiService.put(`orders/${orderId}`, orderData);
      dispatch(updateOrder(response.data)); // Dispatch action to update order
    } catch (error) {
      console.error("Error updating order:", error);
      dispatch(fetchOrdersFailure(error.message)); // Dispatch failure action
    }
  };
};

// Delete an order
export const removeOrder = (orderId) => {
  return async (dispatch) => {
    dispatch(fetchOrdersRequest()); // Start the loading state
    try {
      await apiService.delete(`orders/${orderId}`);
      dispatch(deleteOrder(orderId)); // Dispatch action to delete order
    } catch (error) {
      console.error("Error deleting order:", error);
      dispatch(fetchOrdersFailure(error.message)); // Dispatch failure action
    }
  };
};
