import axios from "axios";
// consuline.herokuapp.com/
export default axios.create({
    baseURL: "https://app-consuline.herokuapp.com/"
});
