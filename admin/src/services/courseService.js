import { apiClient, handleApiError } from "./apiService";

export const getCourseCategory = async () => {
  try {
    const response = await apiClient.get(`/course/category`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const getAllChatCourse = async () => {
  try {
    const response = await apiClient.get("/course/admin-get-chat", {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
export const editChatCourse = async (id, data) => {
  try {
    const response = await apiClient.put(`/course/admin-get-chat/${id}`, data, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const createCourseCategory = async (data) => {
  try {
    const response = await apiClient.post(`/course/category`, data, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
export const createSubCourseCategory = async (data, id) => {
  try {
    const response = await apiClient.post(`/course/category/sub/${id}`, data, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
export const editCourseCategory = async (id, data) => {
  try {
    const response = await apiClient.put(`/course/category/${id}`, data, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const deleteCourseCategory = async (id) => {
  try {
    const response = await apiClient.delete(`/course/category/${id}`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
export const deleteSubCourseCategory = async (id) => {
  try {
    const response = await apiClient.delete(`/course/category/sub/${id}`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
export const createCourse = async (data) => {
  try {
    const response = await apiClient.post(`/course`, data, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
export const EditCourseStep = async (id, data) => {
  try {
    const response = await apiClient.put(`/course/by-step/${id}`, data, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
export const deleteCourse = async (id) => {
  try {
    const response = await apiClient.delete(`/course/${id}`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
export const createPostRoute = async (id, data) => {
  try {
    const response = await apiClient.post(`/course/create-route/${id}`, data, {
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
export const editCourse = async (id, data) => {
  try {
    const response = await apiClient.put(`/course/${id}`, data, {
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

export const editCourseImage = async (id, data) => {
  try {
    const response = await apiClient.put(`/course/by-image/${id}`, data, {
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
export const getAllCourse = async () => {
  try {
    const response = await apiClient.get("/course", {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const getCourseDetail = async (slug) => {
  try {
    const response = await apiClient.get(`/course/byId/${slug}`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const deleteRouteCourse = async (id) => {
  try {
    const response = await apiClient.delete(`/course/route/${id}`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
