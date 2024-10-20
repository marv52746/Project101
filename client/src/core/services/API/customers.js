// src/core/services/API/customers.js
import {
  fetchCustomersRequest,
  fetchCustomersSuccess,
  fetchCustomersFailure,
  addCustomer,
  updateCustomer,
  deleteCustomer,
} from "../slices/customerSlice"; // Adjust the import path as necessary
import apiService from "../apiService"; // Adjust the import path as necessary

// Fetch customers
export const getCustomers = () => {
  return async (dispatch) => {
    dispatch(fetchCustomersRequest()); // Start the loading state
    try {
      const response = await apiService.get("customers");
      dispatch(fetchCustomersSuccess(response.data)); // Dispatch success action
    } catch (error) {
      console.error("Error fetching customers:", error);
      dispatch(fetchCustomersFailure(error.message)); // Dispatch failure action
    }
  };
};

// Add a new customer
export const createCustomer = (customerData) => {
  return async (dispatch) => {
    dispatch(fetchCustomersRequest()); // Start the loading state
    try {
      const response = await apiService.post("customers", customerData);
      dispatch(addCustomer(response.data)); // Dispatch action to add customer
    } catch (error) {
      console.error("Error creating customer:", error);
      dispatch(fetchCustomersFailure(error.message)); // Dispatch failure action
    }
  };
};

// Update an existing customer
export const editCustomer = (customerId, customerData) => {
  return async (dispatch) => {
    dispatch(fetchCustomersRequest()); // Start the loading state
    try {
      const response = await apiService.put(
        `customers/${customerId}`,
        customerData
      );
      dispatch(updateCustomer(response.data)); // Dispatch action to update customer
    } catch (error) {
      console.error("Error updating customer:", error);
      dispatch(fetchCustomersFailure(error.message)); // Dispatch failure action
    }
  };
};

// Delete a customer
export const removeCustomer = (customerId) => {
  return async (dispatch) => {
    dispatch(fetchCustomersRequest()); // Start the loading state
    try {
      await apiService.delete(`customers/${customerId}`);
      dispatch(deleteCustomer(customerId)); // Dispatch action to delete customer
    } catch (error) {
      console.error("Error deleting customer:", error);
      dispatch(fetchCustomersFailure(error.message)); // Dispatch failure action
    }
  };
};
