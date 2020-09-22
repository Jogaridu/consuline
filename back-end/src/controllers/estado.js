const { Op } = require("sequelize");
const Estado = require("../models/Estado");


module.exports = {
  async cadastrar(req, res) {
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

    res.status(201).send(estado);
  },
};