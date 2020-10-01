const Paciente = require("../models/Paciente");
const EnderecoPaciente = require("../models/EnderecoPaciente");
const enderecoPacienteController = require("../controllers/enderecoPaciente");
const { Op } = require("sequelize");
const bcrypt = require("bcryptjs");
const gerarCodigoVerificacao = require("../fixtures/gerarCodigo");
const { enviarSMS } = require("../services/sms");

module.exports = {
  async cadastrar(req, res) {
    let {
      nome,
      celular,
      login,
      senha,
      dataNascimento,
      email,
      rg,
      cpf,
      endereco,
    } = req.body;

    const verificado = false;

    const { firebaseUrl } = req.file ? req.file : "";
    endereco = JSON.parse(endereco);

    try {

      let pacienteCriado = await Paciente.findOne({
        where: {
          [Op.or]: [
            { cpf: cpf },
            { rg: rg },
            { login: login },
            { email: email },
            { celular: celular },
          ],
        },
      });

      if (pacienteCriado) {
        return res.status(400).send({
          error:
            "Paciente já cadastrado. Dados que não se repetem: CPF, RG, Login, Email, Celular",
        });
      }

      const enderecoPaciente = await EnderecoPaciente.create(endereco);

      if (enderecoPaciente === 400) {
        return res.status(400).send({
          error:
            "Não foi possível cadastrar o endereço, por favor tente novamente.",
        });
      }

      const codigoVerificacao = gerarCodigoVerificacao();

      const senhaCripto = bcrypt.hashSync(senha, 10);

      paciente = await enderecoPaciente.createPaciente({
        nome,
        celular,
        login,
        senha: senhaCripto,
        dataNascimento,
        email,
        rg,
        cpf,
        foto: firebaseUrl,
        verificado,
        codigoVerificacao,
      });

      // await enviarSMS({
      //     "numero_destino": `55${pacienteCriado.celular}`,
      //     "mensagem": `Obrigado por se cadastrar na Consuline ${pacienteCriado.nome}! Seu código para confirmação de cadastro é: ${pacienteCriado.codigoVerificacao}`
      // });

      return res.status(201).send(paciente);

    } catch (error) {

      return res.status(404).send({ erro: "Falha ao cadastrar o paciente" });

    }
  },

  async verificarSms(req, res) {
    const { id } = req.params;
    const { codigo } = req.body;

    const paciente = await Paciente.findOne({
      where: {
        id: id,
        codigoVerificacao: codigo,
      },
    });

    if (paciente) {
      paciente.update({
        codigoVerificacao: null,
        verificado: true,
      });

      return res.status(200).send();
    }

    res.status(404).send({ erro: "Código inválido ou já validado" });
  },

  async buscarPorId(req, res) {
    const { id } = req.params;
    try {
      let paciente = await Paciente.findByPk(id, {
        include: {
          association: "EnderecoPaciente",
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
      if (!paciente) {
        return res.status(400).send({ error: "Paciente não cadastrado" });
      }
      res.status(200).send(paciente);
    } catch (error) {
      return res.status(500).send({
        error:
          "Não foi possivel listar estee paciente, por favor tente novamente",
      });
    }
  },
  async listar(req, res) {
    try {
      let pacientes = await Paciente.findAll({
        include: {
          association: "EnderecoPaciente",
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
      res.status(200).send(pacientes);
    } catch (error) {
      return res.status(500).send({
        error:
          "Não foi possivel listar os pacientes, por favor tente novamente",
      });
    }
  },
  async deletar(req, res) {
    const { id } = req.params;

    try {
      const paciente = await Paciente.findByPk(id);

      if (!paciente) {
        return res.status(404).send({ error: "Paciente não encontrado" });
      }

      const statusDeleteEndereco = await enderecoPacienteController.apagar(
        paciente.EnderecoPacienteId
      );

      if (statusDeleteEndereco === 400) {
        return res.status(400).send({
          error: "Não foi possivel deletar o endereço desse paciente!!!",
        });
      }

      await paciente.destroy();

      res.status(204).send();
    } catch (error) {
      return res.status(500).send({
        error:
          "Não foi possivel excluir este paciente, por favor tente novamente",
      });
    }
  },

  async atualizar(req, res) {
    const { id } = req.params;

    let {
      nome,
      celular,
      login,
      senha,
      dataNascimento,
      email,
      rg,
      cpf,
      endereco,
    } = req.body;

    const enderecoJson = JSON.parse(endereco);

    try {
      let paciente = await Paciente.findByPk(id);
      if (!paciente) {
        return res
          .status(400)
          .send({ error: "Paciente não encontrado no sistema" });
      }

      const statusUpdateEndereco = await enderecoPacienteController.atualizar(
        enderecoJson,
        paciente.EnderecoPacienteId
      );

      if (statusUpdateEndereco === 400) {
        return res.status(400).send({
          error:
            "Não foi possivel atualizar este endereço, por favor tente novamente",
        });
      }

      await Paciente.update(
        {
          nome,
          celular,
          login,
          senha,
          dataNascimento,
          email,
          rg,
          cpf,
        },
        {
          where: { id: id },
        }
      );

      res.status(204).send();
    } catch (error) {
      return res.status(500).send({
        error: "Não foi possivel atualzar, tente novamente por favor",
      });
    }
  },

  async autenticar(req, res) {
    const { login, senha } = req.body;

    if (login && senha) {
      const pacienteBuscado = await Paciente.findOne({
        where: {
          login,
        },
      });

      if (
        !pacienteBuscado ||
        !bcrypt.compareSync(senha, pacienteBuscado.senha)
      ) {
        return res.status(403).send({ error: "Usuário e/ou senha inválidos" });
      }

      res.status(201).send({
        paciente: {
          pacienteId: pacienteBuscado.id,

          nome: pacienteBuscado.nome,
        },
      });
    }
  },
};
