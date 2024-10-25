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
  return (dispatch) => {
    dispatch(fetchProductsRequest()); // Start loading state
    return apiService
      .get(dispatch, "products")
      .then((data) => dispatch(fetchProductsSuccess(data)))
      .catch(() => dispatch(fetchProductsFailure("Failed to fetch products")));
  };
};

// Add a new product
export const createProduct = (productData) => {
  return (dispatch) => {
    dispatch(fetchProductsRequest()); // Start loading state
    return apiService
      .post(dispatch, "products", productData)
      .then((data) => dispatch(addProduct(data)))
      .catch(() => dispatch(fetchProductsFailure("Failed to create product")));
  };
};

// Update an existing product
export const editProduct = (productId, productData) => {
  return (dispatch) => {
    dispatch(fetchProductsRequest()); // Start loading state
    return apiService
      .put(dispatch, "products", productId, productData)
      .then((data) => dispatch(updateProduct(data)))
      .catch(() => dispatch(fetchProductsFailure("Failed to update product")));
  };
};

// Delete a product
export const removeProduct = (productId) => {
  return (dispatch) => {
    dispatch(fetchProductsRequest()); // Start loading state
    return apiService
      .delete(dispatch, "products", productId)
      .then(() => dispatch(deleteProduct(productId)))
      .catch(() => dispatch(fetchProductsFailure("Failed to delete product")));
  };
};
