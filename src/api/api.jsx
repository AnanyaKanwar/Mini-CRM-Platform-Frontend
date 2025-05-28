import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: false, // JWT in header, not cookies
});

// Attach token to every request if present
api.interceptors.request.use(
  config => {
    const token = localStorage.getItem("jwt_token");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  error => Promise.reject(error)
);

export default api;

// Auth
export const fetchGoogleLoginUrl = () =>
  `${import.meta.env.VITE_API_BASE_URL}/auth/google`;

export const fetchCurrentUser = () => api.get("/auth/me");

// Customers
export const fetchCustomers = () => api.get("/customers");
