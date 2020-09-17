const { Op } = require("sequelize");
const ProfissionalDaSaude = require("../models/ProfissionalDaSaude");
const EnderecoProfissionalDaSaude = require("../models/EnderecoProfissionalDaSaude");
const enderecoProfissionalDaSaudeController = require("./enderecoProfissionalDaSaude");
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
      endereco,
      telefone,
    } = req.body;

    try {
      const idEndereco = await enderecoProfissionalDaSaudeController.store(
        endereco
      );

      if (idEndereco === 404) {
        return res.status(404).send({
          error: "Não foi possivel cadastrar este endereço, tente novamene !!!",
        });
      }

      const enderecoProfissionalDaSaude = await EnderecoProfissionalDaSaude.findByPk(
        idEndereco
      );

      let profissionalDaSaude = await ProfissionalDaSaude.findOne({
        where: {
          [Op.or]: [{ login: login }, { crm: crm }, { cpf: cpf }],
        },
      });
      if (profissionalDaSaude) {
        return res
          .status(400)
          .send({ error: "Login ou crm ou cpf, já cadastrado!!" });
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

  async index(req, res) {
    let profissionais = await ProfissionalDaSaude.findAll({
      include: {
        association: "EnderecoProfissionalDaSaude",
        attributes: [
          "rua",
          "bairro",
          "numero",
          "complemento",
          "cep",
          "EstadoId",
          "CidadeId",
        ],
      },
      order: [["createdAt", "DESC"]],
    });
    res.status(200).send(profissionais);
  },

  async delete(req, res) {
    const { id } = req.body;

    // const token = req.headers.authorization;

    // const [Bearer, created_aluno_id] = token.split(" ");

    let profissionalDaSaude = await ProfissionalDaSaude.findByPk(id);
    if (!profissionalDaSaude) {
      return res
        .status(404)
        .send({ erro: "Profissiona da saúde não encontrado." });
    }

    await profissionalDaSaude.destroy();
    res.status(204).send();
  },

  async update(req, res) {
    const {
      id,
      cpf,
      nome,
      crm,
      login,
      senha,
      foto,
      avaliacao,
      endereco,
      telefone,
    } = req.body;

    const profissionalDaSaude = await ProfissionalDaSaude.findByPk(id);

    if (!profissionalDaSaude) {
      return res.status(404).send({ error: "Profisional não encontrado!!" });
    }

    const statusUpdateEndereco = await enderecoProfissionalDaSaudeController.update(
      endereco,
      profissionalDaSaude.EnderecoProfissionalDaSaudeId
    );

    if (statusUpdateEndereco === 404) {
      return res
        .status(404)
        .send({ error: "Não foi possivel atualizar o endereço" });
    }
    return res.status(200);
    try {
    } catch (error) {} 
  },
};
