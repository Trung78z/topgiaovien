import { apiClient, handleApiError } from "./apiService";

export const getReviewImage = async () => {
  try {
    const response = await apiClient.get(`/review-image`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
export const EditReviewImage = async (formData) => {
  try {
    const response = await apiClient.put(`/review-image`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
