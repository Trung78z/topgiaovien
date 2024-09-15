import { apiClient, handleApiError } from "./apiService";

export const createReviewVideo = async (data) => {
  try {
    const response = await apiClient.post(`/review-video`, data, {
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
export const editReviewVideo = async (id, data) => {
  try {
    const response = await apiClient.put(`/review-video/${id}`, data, {
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
export const getReviewVideoById = async (id) => {
  try {
    const response = await apiClient.get(`/review-video/by/${id}`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
export const getReviewVideo = async () => {
  try {
    const response = await apiClient.get(`/review-video`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
export const deleteReviewVideo = async (id) => {
  try {
    const response = await apiClient.delete(`/review-video/${id}`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
