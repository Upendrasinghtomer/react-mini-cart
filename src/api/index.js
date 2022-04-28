import axios from "axios";
import { BASE_URL } from "../utils/constants";

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    "Content-type": "application/json",
  },
});

api.interceptors.request.use(
  (req) => req,
  (err) => Promise.reject(err.response.data)
);

api.interceptors.response.use(
  (res) => res,
  (err) => Promise.reject(err.response.data)
);
