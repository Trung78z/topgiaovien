import { apiClient, handleApiError } from "./apiService";

export const createUser = async (data) => {
  try {
    const response = await apiClient.post(`/user`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
export const getUser = async (userId) => {
  try {
    const response = await apiClient.get(`/user/by/${userId}`);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
export const getUsers = async () => {
  try {
    const response = await apiClient.get(`/user`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const updateUser = async (userId, data) => {
  try {
    const response = await apiClient.put(`/auth/${userId}`, data, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
export const updateUserByAdmin = async (userId, data) => {
  try {
    const response = await apiClient.put(`/user/by-admin/${userId}`, data, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
export const deleteUser = async (userId) => {
  try {
    const response = await apiClient.delete(`/user/${userId}`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
