import { apiClient, handleApiError } from "./apiService";

export const getJobCategory = async () => {
  try {
    const response = await apiClient.get(`/job/category`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const createJobCategory = async (data) => {
  try {
    const response = await apiClient.post(`/job/category`, data, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
export const createJobSubCategory = async (id, data) => {
  try {
    const response = await apiClient.post(`/job/category/sub/${id}`, data, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
export const editJobCategory = async (id, data) => {
  try {
    const response = await apiClient.put(`/job/category/${id}`, data, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const deleteJobSubCategory = async (id) => {
  try {
    const response = await apiClient.delete(`/job/category/sub/${id}`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const deleteJobCategory = async (id) => {
  try {
    const response = await apiClient.delete(`/job/category/${id}`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const createJob = async (data) => {
  try {
    const response = await apiClient.post(`/job`, data, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const editJob = async (id, data) => {
  try {
    const response = await apiClient.put(`/job/${id}`, data, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const getAllJob = async () => {
  try {
    const response = await apiClient.get("/job", {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    });
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

export const getsApply = async () => {
  try {
    const response = await apiClient.get(`/job/apply`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const deleteJob = async (id) => {
  try {
    const response = await apiClient.delete(`/job/${id}`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
