import { apiClient, handleApiError } from "./apiService";

export const getAllPost = async () => {
  try {
    const response = await apiClient.get("/post");
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const getPostDetail = async (slug) => {
  try {
    const response = await apiClient.get(`/post/by/${slug}`);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
