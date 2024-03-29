export default encontrarCep = async (cep) => {
  try {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    const pegarEndereco = await fetch(url);
    const endereco = await pegarEndereco.json();

    return endereco;
  } catch (error) {
    return error;
  }
};
