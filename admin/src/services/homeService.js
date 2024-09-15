import { apiClient, handleApiError } from "./apiService";

export const getImageBanner = async () => {
  try {
    const response = await apiClient.get("/home/banner");
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
export const createImageBanner = async (data) => {
  try {
    const response = await apiClient.post("/home/banner", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
export const editImageBanner = async (id, data) => {
  try {
    const response = await apiClient.put(`/home/banner/${id}`, data, {
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
export const deleteImageBanner = async (id) => {
  try {
    const response = await apiClient.delete(`/home/banner/${id}`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const getTime = async () => {
  try {
    const response = await apiClient.get("/home/time", {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
export const getCareHome = async () => {
  try {
    const response = await apiClient.get("/home/receive-consultation", {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
