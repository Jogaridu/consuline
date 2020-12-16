import axios from "axios"

const api = axios.create({
    baseURL: "http://10.107.131.20:3333/"
});

export default api;