const { Op } = require("sequelize");
const Cidade = require("../models/Cidade");
const Estado = require("../models/Estado");
const { response } = require("express");

module.exports = {
  async cadastrar(req, res) {
    const { nome, idEstado } = req.body;

    try {
      const estado = await Estado.findByPk(idEstado);

      if (!estado) {
        res.status(400).send({ error: "Estado não encontrado" });
      }

      let cidade = await Cidade.findOne({
        where: {
          [Op.and]: [{ nome: nome }, { EstadoId: idEstado }],
        },
      });

      if (cidade) {
        return res.status(400).send({ error: "Cidade já cadastrada!!" });
      }

      cidade = await estado.createCidade({
        nome: nome,
      });

      res.status(201).send(cidade);
    } catch (error) {
      return res.status(500).send({
        error: "Não foi possivel cadastrar a cidade, tente novamente",
      });
    }
  },
};
