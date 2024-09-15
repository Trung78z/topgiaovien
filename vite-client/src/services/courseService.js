import { apiClient, handleApiError } from "./apiService";

export const getCourseCategory = async () => {
  try {
    const response = await apiClient.get(`/course/category`);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const createCourseCategory = async (data) => {
  try {
    const response = await apiClient.post(`/course/category`, data);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const editCourseCategory = async (id, data) => {
  try {
    const response = await apiClient.put(`/course/category${id}`, data);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const deleteCourseCategory = async (id) => {
  try {
    const response = await apiClient.delete(`/course/category${id}`);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
export const createCourse = async (data) => {
  try {
    const response = await apiClient.post(`/course`, data);
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
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjlmOWExN2M1LWU3NWYtNGM3Yi05NDA4LTQ0YjQwNGI3ZDE5NyIsInJvbGUiOiJ0ZWFjaGVyIiwiaWF0IjoxNzI0MDkyMzg2LCJleHAiOjE3MjQyNjUxODZ9.-pZvVWx_QAeZgl2Yx1WXQKxb-DNNx3Kd29CbuXvBoHo",
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
      },
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
export const getAllCourse = async () => {
  try {
    const response = await apiClient.get("/course");
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const getCourseDetail = async (slug) => {
  try {
    const response = await apiClient.get(`/course/byId/${slug}`);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
export const getCourseBySlugDetail = async (slug) => {
  try {
    const response = await apiClient.get(`/course/by/${slug}`);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
export const deleteRouteCourse = async (id) => {
  try {
    const response = await apiClient.delete(`/course/route/${id}`);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
