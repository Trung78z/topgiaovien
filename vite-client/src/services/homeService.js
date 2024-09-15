import { apiClient, handleApiError } from "./apiService";

export const getImageBanner = async () => {
  try {
    const response = await apiClient.get("/home/banner");
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
export const getTime = async () => {
  try {
    const response = await apiClient.get("/home/time");
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
export const createReceive = async (data) => {
  try {
    const response = await apiClient.post("/home/receive-consultation", data);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
