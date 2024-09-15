import { apiClient, handleApiError } from "./apiService";

export const createReviewZingNew = async (data) => {
  try {
    const response = await apiClient.post(`/zing-new`, data, {
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
export const editReviewZingNew = async (id, data) => {
  try {
    const response = await apiClient.put(`/zing-new/${id}`, data, {
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
export const getReviewZingNewById = async (id) => {
  try {
    const response = await apiClient.get(`/zing-new/by/${id}`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
export const getReviewZingNew = async () => {
  try {
    const response = await apiClient.get(`/zing-new`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
export const deleteReviewZingNew = async (id) => {
  try {
    const response = await apiClient.delete(`/zing-new/${id}`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
