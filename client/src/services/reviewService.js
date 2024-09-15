import { apiClient, handleApiError } from "./apiService";

export const getReviewZingNew = async () => {
  try {
    const response = await apiClient.get("/zing-new");
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const getReviewVideo = async () => {
  try {
    const response = await apiClient.get("/review-video");
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
export const getImageReview = async () => {
  try {
    const response = await apiClient.get("/teacher/all-moment");
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
