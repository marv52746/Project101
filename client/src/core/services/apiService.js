// src/core/services/apiService.js
import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;

const apiClient = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

const apiService = {
  get: (resource) => apiClient.get(`/${resource}`),
  post: (resource, data) => apiClient.post(`/${resource}`, data),
  put: (resource, id, data) => apiClient.put(`/${resource}/${id}`, data),
  delete: (resource, id) => apiClient.delete(`/${resource}/${id}`),
};

export default apiService;
