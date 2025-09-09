import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://dummyjson.com" as string,
});

export default axiosInstance;
