import { apiClient, handleApiError } from "./apiService";
export const createPostCategories = async (data) => {
  try {
    const response = await apiClient.post(`/categories`, data, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
export const getPostCategories = async () => {
  try {
    const response = await apiClient.get("/categories", {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
export const editPostCategories = async (id, data) => {
  try {
    const response = await apiClient.put(`/categories/${id}`, data);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
export const deletePostCategories = async (id) => {
  try {
    const response = await apiClient.delete(`/categories/${id}`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const createPost = async (data) => {
  try {
    const response = await apiClient.post(`/post`, data, {
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
export const editPost = async (id, data) => {
  try {
    const response = await apiClient.put(`/post/${id}`, data, {
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
export const getAllPost = async () => {
  try {
    const response = await apiClient.get("/post", {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const getPostDetail = async (slug) => {
  try {
    const response = await apiClient.get(`/post/by/${slug}`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const deletePost = async (slug) => {
  try {
    const response = await apiClient.delete(`/post/${slug}`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
