import * as yup from "yup";

const mensagemObrigatoria = "Campo obrigatório";

export default yup.object().shape({
    cnpj: yup.number().positive().integer().required(mensagemObrigatoria),
    ie: yup.number().positive().integer().required(mensagemObrigatoria),
    razaoSocial: yup.string().required(mensagemObrigatoria),
    nomeFantasia: yup.string().required(mensagemObrigatoria),
    dataAbertura: yup.date().required(mensagemObrigatoria),
    email: yup.string().email().required(mensagemObrigatoria),
    rua: yup.string().max(120).required(mensagemObrigatoria),
    bairro: yup.string().max(80).required(mensagemObrigatoria),
    numero: yup.string().required(mensagemObrigatoria),
    complemento: yup.string().required(mensagemObrigatoria),
    cep: yup.string().required(mensagemObrigatoria),
    cidade: yup.string().required(mensagemObrigatoria),
    estado: yup.string().required(mensagemObrigatoria)
});