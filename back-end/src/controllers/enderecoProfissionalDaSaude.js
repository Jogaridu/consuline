const { Op } = require("sequelize");
const EnderecoProfissionalDaSaude = require("../models/EnderecoProfissionalDaSaude");
const Cidade = require("../models/Cidade");
const Estado = require("../models/Estado");

module.exports = {
  async store(req, res) {
    const {
      rua,
      bairro,
      numero,
      complemento,
      cep,
      idCidade,
      idEstado,
    } = req.body;

    try {
      const estado = await Estado.findByPk(idEstado);

      if (!estado) {
        res.status(404).send({ error: "Estado não encontrada!!" });
      }
      const cidade = await Cidade.findByPk(idCidade);

      if (!cidade) {
        res.status(404).send({ error: "Cidade não encontrada!!" });
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

      res.status(201).send(enderecoProfissionalDaSaude);
    } catch (error) {
      return res
        .status(500)
        .send({
          error: "Não foi possivel cadastrar esse endereço, tente novamente",
        });
    }
  },
};
