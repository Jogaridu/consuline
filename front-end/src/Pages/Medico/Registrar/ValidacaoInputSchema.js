import * as yup from "yup";

const mensagemObrigatoria = "Campo obrigatório";

const validarDadosMedico = yup.object().shape({
    cpf: yup.string().min(18, "CNPJ deve ter os 14 dígitos").required(mensagemObrigatoria),
    crm: yup.string().min(15, "IE deve ter os 12 dígitos").required(mensagemObrigatoria),
    nome: yup.string().trim().max(30, "Máximo de caracteres é 30").required(mensagemObrigatoria),
    telefone: yup.string().trim().max(30, "Máximo de caracteres é 30").required(mensagemObrigatoria),
    // dataAbertura: yup.string().trim().required(mensagemObrigatoria),
    email: yup.string().email().trim().required(mensagemObrigatoria),
});

const validarEndereco = yup.object().shape({
    numero: yup.string().required(mensagemObrigatoria),
    complemento: yup.string().required(mensagemObrigatoria),
    cep: yup.string().required("Informe seu CEP para autopreencher os campos abaixo"),
});

export { validarEndereco, validarDadosMedico }

