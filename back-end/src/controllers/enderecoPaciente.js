const { Op } = require("sequelize");
const EnderecoPaciente = require("../models/EnderecoPaciente");
const Cidade = require("../models/Cidade");
const Estado = require("../models/Estado");

module.exports = {
  async cadastrar(endereco) {
    const {
      rua,
      bairro,
      numero,
      complemento,
      cep,
      idCidade,
      idEstado,
    } = endereco;

    const estado = await Estado.findByPk(idEstado);

    if (!estado) {
      return 400;
    }

    const cidade = await Cidade.findByPk(idCidade);

    if (!cidade) {
      return 400;
    }

    let enderecoPaciente = await cidade.createEnderecoPaciente({
      rua,
      bairro,
      numero,
      complemento,
      cep,
      EstadoId: idEstado,
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
        idCidade,
        idEstado,
      } = endereco;

      await EnderecoPaciente.update(
        {
          rua,
          bairro,
          numero,
          complemento,
          cep,
          CidadeId: idCidade,
          EstadoId: idEstado,
        },
        {
          where: { id: id },
        }
      );
      return 200;
    } catch (error) {
      return 400;
    }
  },
};
