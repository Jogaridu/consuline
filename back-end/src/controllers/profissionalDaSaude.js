const { Op } = require("sequelize");
const ProfissionalDaSaude = require("../models/ProfissionalDaSaude");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
  async store(req, res) {
    const { cpf, nome, crm, login, senha, foto, avaliacao } = req.body;

    let profissionalDaSaude = await ProfissionalDaSaude.findOne({
      where: {
        [Op.or]: [{ login: login }],
      },
    });

    if (profissionalDaSaude) {
      return res.status(400).send({ error: "Login já cadastrado!!" });
    }

    const senhaCripto = await bcrypt.hash(senha, 10);

    profissionalDaSaude = await ProfissionalDaSaude.create({
      cpf,
      nome,
      crm,
      login,
      senha: senhaCripto,
      foto,
      avaliacao,
    });

    res.status(201).send({
      profissionalDaSaude: {
        id: profissionalDaSaude.idProfissionalDaSaude,
        nome: profissionalDaSaude.nome,
        cpf: profissionalDaSaude.cpf,
        login: profissionalDaSaude.login,
      },
    });
  },
};
