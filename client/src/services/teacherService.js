import { apiClient, handleApiError } from "./apiService";

export const createTeacher = async (data) => {
  try {
    const response = await apiClient.post(`/teacher`, data);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
export const createTeacherWhenHaveId = async (slug) => {
  try {
    const response = await apiClient.post(`/teacher/by-admin/${slug}`);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
export const getTeacherDetailEdit = async () => {
  try {
    const response = await apiClient.get(`/teacher/by-edit`, {
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
    const response = await apiClient.get("/teacher");
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
export const getTeacherDetail = async () => {
  try {
    const response = await apiClient.get(`/teacher/by-teacher`, {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("accessToken"),
      },
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
export const editInfoTeacher = async (id, data) => {
  try {
    const response = await apiClient.put(`/teacher/by-info`, data, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
export const editTeacher = async (data) => {
  try {
    const response = await apiClient.put(`/teacher`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("accessToken"),
        },
      },
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
export const editTeacherCA = async (data) => {
  try {
    const response = await apiClient.put(`/teacher/edit-image-ca`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("accessToken"),
        },
      },
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
export const editTeacherCASetNull = async (data) => {
  console.log(data);
  try {
    const response = await apiClient.put(`/teacher/edit-image-null-ca`, data, {
      headers: {
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("accessToken"),
        },
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
    const response = await apiClient.post(`/teacher/education`, {
      teacherId: teacherId,
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const addNotify = async (teacherId) => {
  try {
    const response = await apiClient.post(`/teacher/notify`, {
      teacherId: teacherId,
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
export const addCertification = async (teacherId) => {
  try {
    const response = await apiClient.post(`/teacher/certificate`, {
      teacherId: teacherId,
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
export const addExperience = async (teacherId) => {
  try {
    const response = await apiClient.post(`/teacher/experience`, {
      teacherId: teacherId,
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const deleteEducation = async (id) => {
  try {
    const response = await apiClient.delete(`/teacher/education/${id}`);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
export const deleteNotify = async (id) => {
  try {
    const response = await apiClient.delete(`/teacher/notify/${id}`);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
export const deleteCertification = async (id) => {
  try {
    const response = await apiClient.delete(`/teacher/certificate/${id}`);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
export const deleteExperience = async (id) => {
  try {
    const response = await apiClient.delete(`/teacher/experience/${id}`);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
