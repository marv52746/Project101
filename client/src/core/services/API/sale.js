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
  return async (dispatch) => {
    dispatch(fetchSalesRequest()); // Start the loading state
    try {
      const response = await apiService.get("sales");
      dispatch(fetchSalesSuccess(response.data)); // Dispatch success action
    } catch (error) {
      console.error("Error fetching sales:", error);
      dispatch(fetchSalesFailure(error.message)); // Dispatch failure action
    }
  };
};

// Add a new sale
export const createSale = (saleData) => {
  return async (dispatch) => {
    dispatch(fetchSalesRequest()); // Start the loading state
    try {
      const response = await apiService.post("sales", saleData);
      dispatch(addSale(response.data)); // Dispatch action to add sale
    } catch (error) {
      console.error("Error creating sale:", error);
      dispatch(fetchSalesFailure(error.message)); // Dispatch failure action
    }
  };
};

// Update an existing sale
export const editSale = (saleId, saleData) => {
  return async (dispatch) => {
    dispatch(fetchSalesRequest()); // Start the loading state
    try {
      const response = await apiService.put("sales", saleId, saleData);
      dispatch(updateSale(response.data)); // Dispatch action to update sale
    } catch (error) {
      console.error("Error updating sale:", error);
      dispatch(fetchSalesFailure(error.message)); // Dispatch failure action
    }
  };
};

// Delete a sale
export const removeSale = (saleId) => {
  return async (dispatch) => {
    dispatch(fetchSalesRequest()); // Start the loading state
    try {
      await apiService.delete("sales", saleId);
      dispatch(deleteSale(saleId)); // Dispatch action to delete sale
    } catch (error) {
      console.error("Error deleting sale:", error);
      dispatch(fetchSalesFailure(error.message)); // Dispatch failure action
    }
  };
};
