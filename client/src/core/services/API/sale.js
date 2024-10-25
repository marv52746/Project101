// src/core/services/API/sales.js

import {
  fetchSalesRequest,
  fetchSalesSuccess,
  fetchSalesFailure,
  addSale,
  updateSale,
  deleteSale,
} from "../slices/saleListSlice"; // Adjust the import path as necessary
import apiService from "../apiService"; // Adjust the import path as necessary

// Fetch sales
export const getSales = () => {
  return (dispatch) => {
    dispatch(fetchSalesRequest()); // Start the loading state
    return apiService
      .get(dispatch, "sales")
      .then((data) => dispatch(fetchSalesSuccess(data)))
      .catch(() => dispatch(fetchSalesFailure("Failed to fetch sales")));
  };
};

// Add a new sale
export const createSale = (saleData) => {
  return (dispatch) => {
    dispatch(fetchSalesRequest()); // Start the loading state
    return apiService
      .post(dispatch, "sales", saleData)
      .then((data) => dispatch(addSale(data)))
      .catch(() => dispatch(fetchSalesFailure("Failed to create sale")));
  };
};

// Update an existing sale
export const editSale = (saleId, saleData) => {
  return (dispatch) => {
    dispatch(fetchSalesRequest()); // Start the loading state
    return apiService
      .put(dispatch, "sales", saleId, saleData)
      .then((data) => dispatch(updateSale(data)))
      .catch(() => dispatch(fetchSalesFailure("Failed to update sale")));
  };
};

// Delete a sale
export const removeSale = (saleId) => {
  return (dispatch) => {
    dispatch(fetchSalesRequest()); // Start the loading state
    return apiService
      .delete(dispatch, "sales", saleId)
      .then(() => dispatch(deleteSale(saleId)))
      .catch(() => dispatch(fetchSalesFailure("Failed to delete sale")));
  };
};
