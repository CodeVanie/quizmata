import axios from "axios";

const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5000" : "https://quizmata-server.onrender.com";
const axiosInstance = axios.create({
    baseURL: `${BASE_URL}/api`
});

export default axiosInstance