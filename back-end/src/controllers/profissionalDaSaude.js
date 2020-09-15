const { Op } = require("sequelize");
const ProfissionalDaSaude = require("../models/ProfissionalDaSaude");
const EnderecoProfissionalDaSaude = require("../models/EnderecoProfissionalDaSaude");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
  async store(req, res) {
    const {
      cpf,
      nome,
      crm,
      login,
      senha,
      foto,
      avaliacao,
      idEndereco,
    } = req.body;

    try {
      let enderecoProfissionalDaSaude = await EnderecoProfissionalDaSaude.findByPk(
        idEndereco
      );

      if (!enderecoProfissionalDaSaude) {
        return res.status(400).send({ error: "Endreço não encontrado" });
      }

      let profissionalDaSaude = await ProfissionalDaSaude.findOne({
        where: {
          [Op.or]: [{ login: login }],
        },
      });
      if (profissionalDaSaude) {
        return res.status(400).send({ error: "Login já cadastrado!!" });
      }

      const senhaCripto = await bcrypt.hash(senha, 10);
     
      profissionalDaSaude = await enderecoProfissionalDaSaude.createProfissionalDaSaude(
        {
          cpf,
          nome,
          crm,
          login,
          senha: senhaCripto,
          foto,
          avaliacao,
        }
      );

      res.status(201).send(profissionalDaSaude);
    } catch (error) {
      return res.status(500).send({
        error: "Não foi possível cadastar este profissional, tente novamente ",
      });
    }
  },
};
