import axios from "axios";
// consuline.herokuapp.com/
export default axios.create({
    baseURL: "http://localhost:3333"
});
