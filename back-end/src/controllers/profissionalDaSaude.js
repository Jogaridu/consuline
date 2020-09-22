const { Op } = require("sequelize");
const ProfissionalDaSaude = require("../models/ProfissionalDaSaude");
const EnderecoProfissionalDaSaude = require("../models/EnderecoProfissionalDaSaude");
const enderecoProfissionalDaSaudeController = require("./enderecoProfissionalDaSaude");
const telefoneProfissionalController = require("./TelefoneProfissionalDaSaude");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
  async cadastrar(req, res) {
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
      const idEndereco = await enderecoProfissionalDaSaudeController.cadastrar(
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

      let dadosProfissional = await ProfissionalDaSaude.findOne({
        where: {
          [Op.or]: [{ login: login }, { crm: crm }, { cpf: cpf }],
        },
      });
      if (dadosProfissional) {
        return res
          .status(400)
          .send({ error: "Login ou crm ou cpf, já cadastrado!!" });
      }

      const senhaCripto = await bcrypt.hash(senha, 10);

      dadosProfissional = await enderecoProfissionalDaSaude.createProfissionalDaSaude(
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

      const telefones = await telefoneProfissionalController.cadastrar(
        telefone,
        dadosProfissional.id
      );

      if (telefones === 404) {
        return res
          .status(404)
          .send({ error: "Não foi possivel cadastrar telefone !!" });
      }

      const profissional = { dadosProfissional, telefones };

      res.status(201).send({ profissional });
    } catch (error) {
      console.log(error);
      return res.status(500).send({
        error: "Não foi possível cadastar este profissional, tente novamente ",
      });
    }
  },

  async listar(req, res) {
    try {
      let profissionais = await ProfissionalDaSaude.findAll({
        include: [
          {
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
        ],
        order: [["createdAt", "DESC"]],
      });

      let arrayProfissionais = new Array();

      for (let i = 0; i < profissionais.length; i++) {
        let dadosProfissional = profissionais[i];
        const telefones = await telefoneProfissionalController.buscarIdProfissional(
          profissionais[i].id
        );
        let profissional = { dadosProfissional, telefones };
        arrayProfissionais[i] = { profissional };
      }
      res.status(200).send(arrayProfissionais);
    } catch (error) {
      return res.status(500).send({
        error:
          "Não foi possivel listar todo(a)s o(a)s profissionais, tente noamene ",
      });
    }
  },

  async apagar(req, res) {
    const { id } = req.params;

    // const token = req.headers.authorization;

    // const [Bearer, created_aluno_id] = token.split(" ");

    let profissionalDaSaude = await ProfissionalDaSaude.findByPk(id);
    if (!profissionalDaSaude) {
      return res
        .status(404)
        .send({ erro: "Profissional da saúde não encontrado(a)." });
    }

    const statusDeleteEndereco = await enderecoProfissionalDaSaudeController.apagar(
      profissionalDaSaude.EnderecoProfissionalDaSaudeId
    );

    if (statusDeleteEndereco === 404) {
      return res.status(404).send({
        error:
          "Não foi possivel deletar o enderço desse profissional, tente novamente",
      });
    }

    const statusDeleteTelefone = await telefoneProfissionalController.apagar(
      profissionalDaSaude.id
    );

    if (statusDeleteTelefone === 404) {
      return res.status(404).send({
        error: "Não foi possivel excluir os telefones deste profissional",
      });
    }

    await profissionalDaSaude.destroy();
    res.status(204).send();
  },

  async atualizar(req, res) {
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
      return res.status(404).send({ error: "Profisional não encontrado(a)!!" });
    }

    let enderecoProfissionalDaSaude = await EnderecoProfissionalDaSaude.findByPk(
      profissionalDaSaude.EnderecoProfissionalDaSaudeId
    );

    if (!enderecoProfissionalDaSaude) {
      return res.status(404).send({ error: "Endereço não encontrado!!" });
    }

    const statusUpdateEndereco = await enderecoProfissionalDaSaudeController.atualizar(
      endereco,
      profissionalDaSaude.EnderecoProfissionalDaSaudeId
    );

    if (statusUpdateEndereco === 404) {
      return res.status(404).send({
        error: "Não foi possivel atualizar o endereço, tente novamente",
      });
    }

    const statusUpdateTelefone = await telefoneProfissionalController.atualizar(
      telefone,
      id
    );

    if (statusUpdateTelefone === 404) {
      res.status(404).send({
        error: "Não foi possivel atualizar os telefones, tente novamente",
      });
    }

    try {
      const senhaCripto = await bcrypt.hash(senha, 10);

      let profissionalDaSaudeUpdate = await ProfissionalDaSaude.update(
        {
          cpf,
          nome,
          crm,
          login,
          senha: senhaCripto,
          foto,
          avaliacao,
        },
        {
          where: { id: id },
        }
      );

      res.status(200).send();
    } catch (error) {
      return res.status(500).send({
        error:
          "Não foi possivel atualizar profissional, verifique se os dados cpf, crm ou login não estão cadastrados em outro usuario(a)",
      });
    }
  },

  async buscarId(req, res) {
    const { id } = req.params;
    let dados = await ProfissionalDaSaude.findByPk(id, {
      include: [
        {
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
      ],
      order: [["createdAt", "DESC"]],
    });

    const telefones = await telefoneProfissionalController.buscarIdProfissional(
      dados.id
    );

    if (telefones === 404) {
      return res.status(404).send({
        error:
          "Erro ao listar telefones desse(a) profissional, tente novamente",
      });
    }

    const profissional = { dados, telefones };

    res.status(200).send({ profissional });
  },
};
