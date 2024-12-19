import axios from "axios";

export const BASE_URL = "https://localhost:7288/api";

export const CLIENT_CONFIG = {
  baseURL: BASE_URL,
  timeout: 2000,
  headers: {
    "Content-Type": "application/json",
  },
};

const client = axios.create(CLIENT_CONFIG);

export default client;