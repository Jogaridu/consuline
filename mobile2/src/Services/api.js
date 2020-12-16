import axios from "axios"

const api = axios.create({
    baseURL: "https://consuline.herokuapp.com/"
});

export default api;