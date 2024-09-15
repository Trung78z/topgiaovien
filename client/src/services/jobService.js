import { apiClient, handleApiError } from "./apiService";

export const getJobCategory = async () => {
  try {
    const response = await apiClient.get(`/job/category`);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const createJobCategory = async (data) => {
  try {
    const response = await apiClient.post(`/job/category`, data);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
export const createJobSubCategory = async (id, data) => {
  try {
    const response = await apiClient.post(`/job/category/sub/${id}`, data);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
export const editJobCategory = async (id, data) => {
  try {
    const response = await apiClient.put(`/job/category/${id}`, data);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const deleteJobCategory = async (id) => {
  try {
    const response = await apiClient.delete(`/job/category/sub/${id}`);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
export const createJob = async (data) => {
  try {
    const response = await apiClient.post(`/job`, data);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const editJob = async (id, data) => {
  try {
    const response = await apiClient.put(`/job/${id}`, data);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const getAllJob = async () => {
  try {
    const response = await apiClient.get("/job");
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const getJobDetail = async (slug) => {
  try {
    const response = await apiClient.get(`/job/byId/${slug}`);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
export const getJobBySlugDetail = async (slug) => {
  try {
    const response = await apiClient.get(`/job/by/${slug}`);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
export const deleteJob = async (id) => {
  try {
    const response = await apiClient.delete(`/job/${id}`);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const createApply = async (data) => {
  try {
    const response = await apiClient.post(`/job/apply`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
