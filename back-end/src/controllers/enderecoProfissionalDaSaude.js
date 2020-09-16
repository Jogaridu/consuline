const { Op } = require("sequelize");
const EnderecoProfissionalDaSaude = require("../models/EnderecoProfissionalDaSaude");
const Cidade = require("../models/Cidade");
const Estado = require("../models/Estado");

module.exports = {
  
  async store(endereco) {
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
      return 404;
    }
    const cidade = await Cidade.findByPk(idCidade);

    if (!cidade) {
     return 404
    }

    let enderecoProfissionalDaSaude = await cidade.createEnderecoProfissionalDaSaude(
      {
        rua,
        bairro,
        numero,
        complemento,
        cep,
        EstadoId: idEstado,
      }
    );

    return enderecoProfissionalDaSaude.id;
  },
};
