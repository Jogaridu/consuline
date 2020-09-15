const { Op } = require("sequelize");
const Estado = require("../models/Estado");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
  async store(req, res) {
    const { nome, sigla } = req.body;

    let estado = await Estado.findOne({
      where: {
        [Op.or]: [{ nome: nome }, { sigla: sigla }],
      },
    });

    if (estado) {
      return res.status(404).send({ error: "Estado já cadastrado!!" });
    }

    estado = await Estado.create({ nome, sigla });

    res.status(201).send({
      estado: {
        nome: estado.nome,
        sigla: estado.sigla,
      },
    });
  },
};
