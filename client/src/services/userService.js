import { apiClient, handleApiError } from "./apiService";

export const getUser = async (userId) => {
  try {
    const response = await apiClient.get(`/user/${userId}`);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
export const getUserEdit = async () => {
  try {
    const response = await apiClient.get(`/user/get-edit`, {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("accessToken"),
      },
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const updateUser = async (data) => {
  try {
    const response = await apiClient.put(`/user`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: "Bearer " + sessionStorage.getItem("accessToken"),
      },
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const updatePassword = async (token, data) => {
  try {
    const response = await apiClient.post(`/auth/verify-token/${token}`, data);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
