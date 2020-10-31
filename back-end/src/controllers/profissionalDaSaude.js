const { Op } = require("sequelize");
const ProfissionalDaSaude = require("../models/ProfissionalDaSaude");
const EnderecoProfissionalDaSaude = require("../models/EnderecoProfissionalDaSaude");
const telefoneProfissionalController = require("./TelefoneProfissionalDaSaude");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../config/auth.json")


module.exports = {
  async cadastrar(req, res) {
    const {
      cpf,
      nome,
      crm,
      login,
      senha,
      foto,
      email,
      avaliacao,
      endereco,
      telefone,
      dataNascimento
    } = req.body;

    const { firebaseUrl } = req.file ? req.file : "";
    const enderecoJson = JSON.parse(endereco);
    const telefoneJson = JSON.parse(telefone);

    console.log(req.body);

    try {
      const enderecoProfissionalDaSaude = await EnderecoProfissionalDaSaude.create(enderecoJson);
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
          foto: firebaseUrl,
          email,
          dataNascimento
        }
      );

      const telefones = await telefoneProfissionalController.cadastrar(
        telefoneJson,
        dadosProfissional.id
      );

      if (telefones === 400) {
        return res
          .status(400)
          .send({ error: "Não foi possivel cadastrar telefone !!" });
      }

      const token = jwt.sign({ idProfissional: dadosProfissional.id }, auth.secret);

      const profissional = { dadosProfissional, telefones, token };

      res.status(201).send({ profissional });
    } catch (error) {
      console.log(error);
      return res.status(500).send({
        error: "Não foi possível cadastar este profissional, tente novamente  ",
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
              "cidade",
              "estado",
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
        .status(400)
        .send({ erro: "Profissional da saúde não encontrado(a)." });
    }

    const endereco = await EnderecoProfissionalDaSaude.findByPk(profissionalDaSaude.EnderecoProfissionalDaSaudeId);

    const statusDeleteTelefone = await telefoneProfissionalController.apagar(
      profissionalDaSaude.id
    );

    if (statusDeleteTelefone === 400) {
      return res.status(400).send({
        error: "Não foi possivel excluir os telefones deste profissional",
      });
    }

    await endereco.destroy();
    await profissionalDaSaude.destroy();
    res.status(200).send({ sucesso: "Profissional apagado com sucesso" });
  },

  async atualizar(req, res) {
    const { id } = req.params;
    const {
      cpf,
      nome,
      crm,
      login,
      senha,
      avaliacao,
      endereco,
      telefone,
    } = req.body;


    const { firebaseUrl } = req.file ? req.file : "";
    const enderecoJson = JSON.parse(endereco);
    const telefoneJson = JSON.parse(telefone);

    const profissionalDaSaude = await ProfissionalDaSaude.findByPk(id);

    if (!profissionalDaSaude) {
      return res.status(400).send({ error: "Profisional não encontrado(a)!!" });
    }

    await EnderecoProfissionalDaSaude.update(enderecoJson, { where: { id: profissionalDaSaude.EnderecoProfissionalDaSaudeId } });

    const statusUpdateTelefone = await telefoneProfissionalController.atualizar(
      telefoneJson,
      id
    );

    if (statusUpdateTelefone === 400) {
      res.status(400).send({
        error: "Não foi possivel atualizar os telefones, tente novamente",
      });
    }

    try {
      const senhaCripto = await bcrypt.hash(senha, 10);

      await ProfissionalDaSaude.update(
        {
          cpf,
          nome,
          crm,
          login,
          senha: senhaCripto,
          foto: firebaseUrl,
          avaliacao,
        },
        {
          where: { id: id },
        }
      );

      res.status(200).send({ sucesso: "Profissional atualizado com sucesso" });
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
            "cidade",
            "estado",
          ],
        },
      ],
      order: [["createdAt", "DESC"]],
    });

    if (!dados) {
      return res
        .status(400)
        .send({ error: "Profissional não encontrado(a), tente novamente" });
    }

    const telefones = await telefoneProfissionalController.buscarIdProfissional(
      dados.id
    );

    if (telefones === 400) {
      return res.status(400).send({
        error:
          "Erro ao listar telefones desse(a) profissional, tente novamente",
      });
    }

    const profissional = { dados, telefones };

    res.status(200).send({ profissional });
  },
};
