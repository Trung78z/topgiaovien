import { apiClient, handleApiError } from "./apiService";

export const createShareComment = async (data) => {
  try {
    const response = await apiClient.post(`/like-comment/comment`, data, {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("accessToken"),
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
export const createLikeComment = async (data) => {
  try {
    const response = await apiClient.post(`/like-comment/like`, data, {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("accessToken"),
      },
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
