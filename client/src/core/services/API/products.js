// src/core/services/API/products.js
import {
  fetchProductsRequest,
  fetchProductsSuccess,
  fetchProductsFailure,
  addProduct,
  updateProduct,
  deleteProduct,
} from "../slices/productListSlice"; // Adjust the import path as necessary
import apiService from "../apiService"; // Adjust the import path as necessary

// Fetch products
export const getProducts = () => {
  return async (dispatch) => {
    dispatch(fetchProductsRequest()); // Start the loading state
    try {
      const response = await apiService.get("products");
      dispatch(fetchProductsSuccess(response.data)); // Dispatch success action
    } catch (error) {
      console.error("Error fetching products:", error);
      dispatch(fetchProductsFailure(error.message)); // Dispatch failure action
    }
  };
};

// Add a new product
export const createProduct = (productData) => {
  return async (dispatch) => {
    dispatch(fetchProductsRequest()); // Start the loading state
    try {
      const response = await apiService.post("products", productData);
      dispatch(addProduct(response.data)); // Dispatch action to add product
    } catch (error) {
      console.error("Error creating product:", error);
      dispatch(fetchProductsFailure(error.message)); // Dispatch failure action
    }
  };
};

// Update an existing product
export const editProduct = (productId, productData) => {
  return async (dispatch) => {
    dispatch(fetchProductsRequest()); // Start the loading state
    try {
      const response = await apiService.put(
        `products/${productId}`,
        productData
      );
      dispatch(updateProduct(response.data)); // Dispatch action to update product
    } catch (error) {
      console.error("Error updating product:", error);
      dispatch(fetchProductsFailure(error.message)); // Dispatch failure action
    }
  };
};

// Delete a product
export const removeProduct = (productId) => {
  return async (dispatch) => {
    dispatch(fetchProductsRequest()); // Start the loading state
    try {
      await apiService.delete(`products/${productId}`);
      dispatch(deleteProduct(productId)); // Dispatch action to delete product
    } catch (error) {
      console.error("Error deleting product:", error);
      dispatch(fetchProductsFailure(error.message)); // Dispatch failure action
    }
  };
};
