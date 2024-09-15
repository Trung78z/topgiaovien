import { apiClient, handleApiError } from "./apiService";

export const getShare = async () => {
  try {
    const response = await apiClient.get("/share");
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
export const createShare = async (data) => {
  try {
    const response = await apiClient.post(`/share/teacher`, data, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
