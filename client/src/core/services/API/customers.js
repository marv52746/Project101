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
  return (dispatch) => {
    dispatch(fetchCustomersRequest()); // Start the loading state
    return apiService
      .get(dispatch, "customers")
      .then((data) => dispatch(fetchCustomersSuccess(data)))
      .catch(() =>
        dispatch(fetchCustomersFailure("Failed to fetch customers"))
      );
  };
};

// Add a new customer
export const createCustomer = (customerData) => {
  return (dispatch) => {
    dispatch(fetchCustomersRequest()); // Start the loading state
    return apiService
      .post(dispatch, "customers", customerData)
      .then((data) => dispatch(addCustomer(data)))
      .catch(() =>
        dispatch(fetchCustomersFailure("Failed to create customer"))
      );
  };
};

// Update an existing customer
export const editCustomer = (customerId, customerData) => {
  return (dispatch) => {
    dispatch(fetchCustomersRequest()); // Start the loading state
    return apiService
      .put(dispatch, "customers", customerId, customerData)
      .then((data) => dispatch(updateCustomer(data)))
      .catch(() =>
        dispatch(fetchCustomersFailure("Failed to update customer"))
      );
  };
};

// Delete a customer
export const removeCustomer = (customerId) => {
  return (dispatch) => {
    dispatch(fetchCustomersRequest()); // Start the loading state
    return apiService
      .delete(dispatch, "customers", customerId)
      .then(() => dispatch(deleteCustomer(customerId)))
      .catch(() =>
        dispatch(fetchCustomersFailure("Failed to delete customer"))
      );
  };
};
