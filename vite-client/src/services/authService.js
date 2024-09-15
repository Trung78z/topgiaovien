import { apiClient, handleApiError } from "./apiService";

export const authLogin = async (credentials) => {
  try {
    const response = await apiClient.post("/auth/login", credentials, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const authRegister = async (data) => {
  try {
    const response = await apiClient.post("/auth/register", data);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const authRefreshToken = async () => {
  try {
    const response = await apiClient.get("/auth/refresh-token", {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const authLogout = async () => {
  try {
    const response = await apiClient.get("/auth/logout", {
      headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const authChange = async () => {
  try {
    const response = await apiClient.get("/auth/logout", {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
