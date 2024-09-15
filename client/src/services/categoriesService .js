import { apiClient, handleApiError } from "./apiService";

export const getCategories = async () => {
  try {
    const response = await apiClient.get("/categories");
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const register = async (data) => {
  try {
    const response = await apiClient.post("/auth/register", data);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
