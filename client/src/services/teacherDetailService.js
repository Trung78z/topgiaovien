import { apiClient, handleApiError } from "./apiService";

export const getAllTeacher = async () => {
  try {
    const response = await apiClient.get("/teacher");
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
export const getTeacherDetail = async (slug) => {
  try {
    const response = await apiClient.get(`/teacher/by/${slug}`);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
