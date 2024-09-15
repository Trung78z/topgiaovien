import { apiClient, handleApiError } from "./apiService";

export const getLocation = async () => {
  try {
    const response = await apiClient.get(`/location`);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
