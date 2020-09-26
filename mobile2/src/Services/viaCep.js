import axios from "axios";

export default axios.create({
    baseURL: "viacep.com.br/ws/01001000/json/?callback=callback_name",
});