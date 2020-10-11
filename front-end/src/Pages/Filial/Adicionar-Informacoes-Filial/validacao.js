"use stritc";

const cnpj = document.getElementById("cnpj").value;
const ie = document.getElementById("ie").value;
const nomeFantasia = document.getElementById("nomeFantasia").value;
const dataAbertura = document.getElementById("dataAbertura").value;
const email = document.getElementById("email").value;
const telefone = document.getElementById("telefone").value;
const rua = document.getElementById("rua").value;
const numero = document.getElementById("numero").value;
const bairro = document.getElementById("bairro").value;
const complemento = document.getElementById("complemento").value;
const endereco = document.getElementById("endereco").value;
const cep = document.getElementById("cep").value;

const validacaoDadosPessoais = () => {
  if (cnpj || ie || nomeFantasia || dataAbertura || email || telefone) {
    window.alert("Informe todos os campos!!!!!");
  }
};

const validacaoEndereco = () => {
  if (cep || endereco || rua || numero || bairro || complemento) {
    window.alert("Informe todos os campos!!!!!");
  }
};

const maskText = ($el) => {
  let aux = $el.value;
  aux = aux.replace(/[^0-9]/g, "");
  $el.value = aux;
};

document
  .getElementById("proximo-filial")
  .addEventListener("click", validacaoDadosPessoais);

document
  .getElementById("concluido-endereco")
  .addEventListener("click", validacaoEndereco);

document
  .getElementById("cnpj")
  .addEventListener("keyup", (e) => maskText(e.target));
document
  .getElementById("ie")
  .addEventListener("keyup", (e) => maskText(e.target));
document
  .getElementById("nomeFantasia")
  .addEventListener("keyup", (e) => maskText(e.target));
document
  .getElementById("dataAbertura")
  .addEventListener("keyup", (e) => maskText(e.target));
document
  .getElementById("email")
  .addEventListener("keyup", (e) => maskText(e.target));
document
  .getElementById("rua")
  .addEventListener("keyup", (e) => maskText(e.target));
document
  .getElementById("bairro")
  .addEventListener("keyup", (e) => maskText(e.target));
document
  .getElementById("complemento")
  .addEventListener("keyup", (e) => maskText(e.target));
document
  .getElementById("endereco")
  .addEventListener("keyup", (e) => maskText(e.target));
