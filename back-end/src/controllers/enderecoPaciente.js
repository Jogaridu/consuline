const { Op } = require("sequelize");
const EnderecoPaciente = require("../models/EnderecoPaciente");

module.exports = {
  async cadastrar(endereco) {
    const {
      rua,
      bairro,
      numero,
      complemento,
      cep,
      estado,
      cidade,
    } = endereco;

    let enderecoPaciente = await cidade.createEnderecoPaciente({
      rua,
      bairro,
      numero,
      complemento,
      cep,
      estado,
      cidade
    });

    return enderecoPaciente;

  },

  async apagar(id) {
    const endereco = await EnderecoPaciente.findByPk(id);
    if (!endereco) {
      return 400;
    }
    await endereco.destroy();
    return 204;
  },

  async atualizar(endereco, id) {
    try {
      const {
        rua,
        bairro,
        numero,
        complemento,
        cep,
        cidade,
        estado,
      } = endereco;

      await EnderecoPaciente.update(
        {
          rua,
          bairro,
          numero,
          complemento,
          cep,
          cidade,
          estado,
        },
        {
          where: { id: id },
        }
      );
      return 200;
    } catch (error) {
      console.log(error);
      return 400;
      
    }
  },
};
