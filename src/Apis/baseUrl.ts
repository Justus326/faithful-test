import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

api.interceptors.request.use(
  (config: any) => {
    const user = JSON.parse(localStorage.getItem("currentUser") || "{}");
    const token = user.token;
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },

  (error:any) => {
    return Promise.reject(error);
  }
);
export default api;
