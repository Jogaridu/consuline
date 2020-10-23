import * as yup from "yup";

const mensagemObrigatoria = "Campo obrigatório";

const validarInformacoes = yup.object().shape({
    cnpj: yup.string().min(18, "CNPJ deve ter os 14 dígitos").required(mensagemObrigatoria),
    ie: yup.string().min(15, "IE deve ter os 12 dígitos").required(mensagemObrigatoria),
    razaoSocial: yup.string().trim().max(30, "Máximo de caracteres é 30").required(mensagemObrigatoria),
    nomeFantasia: yup.string().trim().max(30, "Máximo de caracteres é 30").required(mensagemObrigatoria),
    dataAbertura: yup.string().trim().required(mensagemObrigatoria),
    email: yup.string().email().trim().required(mensagemObrigatoria),
});

const validarEndereco = yup.object().shape({
    numero: yup.string().required(mensagemObrigatoria),
    complemento: yup.string().required(mensagemObrigatoria),
    cep: yup.string().required("Informe seu CEP para autopreencher os campos abaixo"),
});

export { validarEndereco, validarInformacoes }

