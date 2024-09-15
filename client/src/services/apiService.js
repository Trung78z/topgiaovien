import axios from "axios";
export const API_URL = import.meta.env.VITE_API_URL;

export const apiClient = axios.create({
  baseURL: `${API_URL}/api`,
  headers: {
    "Content-Type": "application/json",
  },
});

export const addTokenToHeaders = (config) => {
  const token = sessionStorage.getItem("accessToken") || ""; // Lấy token, nếu không có thì trả về chuỗi rỗng
  config.headers.Authorization = `Bearer ${token}`; // Luôn luôn thêm Authorization header
  return config;
};

apiClient.interceptors.request.use((config) => {
  return addTokenToHeaders(config);
});
export const handleApiError = (error) => {
  if (error.response) {
    console.error("API Error:", error.response.data.message);
  } else if (error.request) {
    console.error("No response received:", error.request);
  } else {
    console.error("Error in request setup:", error.message);
  }
  throw error;
};
