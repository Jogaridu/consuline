const { Op } = require("sequelize");
const Estado = require("../models/Estado");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
  async store(req, res) {
    const { nome } = req.body;

    let estado = "";

    if (estado) {
      return res.status(404).send({ error: "Estado já cadastrado!!" });
    }

    estado = await Estado.create({ nome, });

    res.status(201).send({
      estado: {
        nome: estado.nome,
      },
    });
  },
};
