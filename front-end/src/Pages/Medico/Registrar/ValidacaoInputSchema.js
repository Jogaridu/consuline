import * as yup from "yup";

const mensagemObrigatoria = "Campo obrigatório";

const validarDadosMedico = yup.object().shape({
    cpf: yup.string().min(11, "CPF deve ter os 11 dígitos").required(mensagemObrigatoria),
    crm: yup.string().min(7, "O CRM deve ter o primeiro número e os 6 digitos").required(mensagemObrigatoria),
    nome: yup.string().trim().max(50, "Máximo de caracteres é 50").required(mensagemObrigatoria),
    telefone: yup.string().trim().max(30, "Máximo de caracteres é 30").required(mensagemObrigatoria),
    dataNascimento: yup.string().trim().required(mensagemObrigatoria),
    email: yup.string().email().trim().required(mensagemObrigatoria),
});

const validarEndereco = yup.object().shape({
    numero: yup.string().required(mensagemObrigatoria),
    complemento: yup.string().required(mensagemObrigatoria),
    cep: yup.string().required("Informe seu CEP para autopreencher os campos abaixo"),
});

export { validarEndereco, validarDadosMedico }

