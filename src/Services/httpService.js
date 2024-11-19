import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const app = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

// check our requests
app.interceptors.request.use(
  (res) => res,
  (err) => Promise.reject(err),
);

// check our responses
app.interceptors.response.use(
  (res) => res,
  async (err) => {
    const originalConfig = err.config;

    if (err.status === 401 && !originalConfig._retry) {
      originalConfig._retry = true;

      try {
        // create new refresh token and access token
        const { data } = await axios.get(`${BASE_URL}/user/refresh-token`, {
          withCredentials: true,
        });

        if (data) return app(originalConfig);
      } catch (error) {
        return Promise.reject(error);
      }
    }

    return Promise.reject(err);
  },
);

const http = {
  get: app.get,
  post: app.post,
  delete: app.delete,
  put: app.put,
  patch: app.patch,
};

export default http;
