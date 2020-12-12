import * as yup from "yup";

const mensagemObrigatoria = "Campo obrigatório";

export default yup.object().shape({
    login: yup.string().required(mensagemObrigatoria),
    senha: yup.string().required(mensagemObrigatoria),

});