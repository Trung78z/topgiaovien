import { apiClient, handleApiError } from "./apiService";

export const createTeacher = async (data) => {
  try {
    const response = await apiClient.post(`/teacher`, data, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const getAllTeacher = async () => {
  try {
    const response = await apiClient.get("/teacher", {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
export const getTeacherDetail = async (slug) => {
  try {
    const response = await apiClient.get(`/teacher/byId/${slug}`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const getTeacherDetailEdit = async (slug) => {
  try {
    const response = await apiClient.get(`/teacher/by-admin-edit/${slug}`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const getAllChatTeacher = async () => {
  try {
    const response = await apiClient.get("/teacher/admin-get-chat", {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
export const editChatTeacher = async (id, data) => {
  try {
    const response = await apiClient.put(
      `/teacher/admin-get-chat/${id}`,
      data,
      {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
export const editTeacher = async (id, data) => {
  try {
    const response = await apiClient.put(`/teacher/by/${id}`, data, {
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
export const editInfoTeacher = async (id, data) => {
  try {
    const response = await apiClient.put(`/teacher/by-info/${id}`, data, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
export const editTeacherImageMoment = async (id, data) => {
  try {
    const response = await apiClient.put(
      `/teacher/by-image-moment/${id}`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const addEducation = async (teacherId) => {
  try {
    const response = await apiClient.post(
      `/teacher/education`,
      {
        teacherId: teacherId,
      },
      {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const addNotify = async (teacherId) => {
  try {
    const response = await apiClient.post(
      `/teacher/notify`,
      {
        teacherId: teacherId,
      },
      {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
export const addCertification = async (teacherId) => {
  try {
    const response = await apiClient.post(
      `/teacher/certificate`,
      {
        teacherId: teacherId,
      },
      {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
export const addExperience = async (teacherId) => {
  try {
    const response = await apiClient.post(
      `/teacher/experience`,
      {
        teacherId: teacherId,
      },
      {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const deleteEducation = async (id) => {
  try {
    const response = await apiClient.delete(`/teacher/education/${id}`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
export const deleteNotify = async (id) => {
  try {
    const response = await apiClient.delete(`/teacher/notify/${id}`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
export const deleteCertification = async (id) => {
  try {
    const response = await apiClient.delete(`/teacher/certificate/${id}`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
export const deleteExperience = async (id) => {
  try {
    const response = await apiClient.delete(`/teacher/experience/${id}`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
export const deleteTeacherInfo = async (id) => {
  try {
    const response = await apiClient.delete(`/teacher/admin/${id}`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
