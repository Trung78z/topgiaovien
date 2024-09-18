import { apiClient, handleApiError } from "./apiService";

export const getReviewImage = async () => {
  try {
    const response = await apiClient.get(`/review-image`);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
