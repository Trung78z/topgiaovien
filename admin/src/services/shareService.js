import { apiClient, handleApiError } from "./apiService";

export const getShares = async () => {
  try {
    const response = await apiClient.get(`/share`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
export const createShare = async (data) => {
  try {
    const response = await apiClient.post(`/share`, data, {
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

export const deleteShare = async (id) => {
  try {
    const response = await apiClient.delete(`/share/${id}`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
