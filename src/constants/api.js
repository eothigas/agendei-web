import axios from "axios";

const api = axios.create({
    baseURL: "http://18.230.206.19:3001"
});

export default api;