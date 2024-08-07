import axios from "axios";

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
export const addTokenToHeaders = (config, token) => {
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
};

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
