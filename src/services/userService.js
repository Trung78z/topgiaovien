import { apiClient, handleApiError, addTokenToHeaders } from "./apiService";

export const getUser = async (userId) => {
  try {
    const response = await apiClient.get(`/users/${userId}`);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const updateUser = async (userId, data, useToken = true) => {
  try {
    const config = {};
    if (useToken) {
      const token = localStorage.getItem("token");
      addTokenToHeaders(config, token);
    }
    const response = await apiClient.put(`/users/${userId}`, data, config);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
