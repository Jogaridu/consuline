const Paciente = require("../models/Paciente");
const EnderecoPaciente = require("../models/EnderecoPaciente");
const { Op } = require("sequelize");
const bcrypt = require("bcryptjs");
const gerarCodigoVerificacao = require("../fixtures/gerarCodigo");
const { enviarSMS } = require("../services/sms");
const jwt = require("jsonwebtoken");
const auth = require("../config/auth.json");
const emailConsuline = require("../services/email");
const nodemailer = require("nodemailer");
const CronJob = require("cron").CronJob;

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: emailConsuline.email,
    pass: emailConsuline.senha,
  },
});

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

      //   console.log(pacienteCriado.dataValues);
      console.log({
        nome,
        celular,
        login,
        senha,
        dataNascimento,
        email,
        rg,
        cpf,
        endereco,
      });

      if (pacienteCriado) {
        console.log("entrou");
        return res.status(400).send({
          erro:
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
        verificado,
        codigoVerificacao,
      });

      // await enviarSMS({
      //   "numero_destino": `55${pacienteCriado.celular}`,
      //   "mensagem": `Obrigado por se cadastrar na Consuline ${pacienteCriado.nome}! Seu código para confirmação de cadastro é: ${pacienteCriado.codigoVerificacao}`
      // });

      const token = jwt.sign(
        { idPaciente: paciente.id, tipoPerfil: "paciente" },
        auth.secret
      );

      return res.status(201).send({ paciente, token });
    } catch (error) {
      console.log(error);
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
            "cidade",
            "estado",
          ],
        },
      });

      if (!paciente) {
        return res.status(400).send({ error: "Paciente não cadastrado" });
      }

      res.status(200).send(paciente);
    } catch (error) {
      return res.status(500).send({
        erro:
          "Não foi possivel listar este paciente, por favor tente novamente",
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
            "cidade",
            "estado",
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
    const { idPaciente, tipoPerfil } = req;

    try {
      if (tipoPerfil !== "paciente") {
        return res
          .status(401)
          .send({ error: "Você não possui autorização para esta ação!!" });
      }

      const paciente = await Paciente.findByPk(idPaciente);

      if (!paciente) {
        return res.status(404).send({ error: "Paciente não encontrado" });
      }

      const endereco = await EnderecoPaciente.findByPk(
        paciente.EnderecoPacienteId
      );

      await endereco.destroy();

      await paciente.destroy();

      res.status(200).send({ sucesso: "Paciente apagado com sucesso" });
    } catch (error) {
      console.log(error);
      return res.status(500).send({
        error:
          "Não foi possivel excluir este paciente, por favor tente novamente",
      });
    }
  },

  async atualizar(req, res) {
    const { idPaciente, tipoPerfil } = req;

    const dados = req.body;

    try {
      if (tipoPerfil !== "paciente") {
        return res
          .status(401)
          .send({ error: "Você não possui autorização para esta ação!!" });
      }

      let paciente = await Paciente.findByPk(idPaciente);

      if (!paciente) {
        return res
          .status(400)
          .send({ erro: "Paciente não encontrado no sistema" });
      }

      if (dados.endereco) {
        await EnderecoPaciente.update(dados.endereco, {
          where: { id: paciente.EnderecoPacienteId },
        });
      }

      if (dados.senha) {
        const senhaCripto = bcrypt.hashSync(dados.senha, 10);

        await Paciente.update(
          { ...dados, senha: senhaCripto },
          {
            where: { id: idPaciente },
          }
        );
      } else {
        await Paciente.update(dados, {
          where: { id: idPaciente },
        });
      }

      res.status(200).send({ sucesso: "Paciente atualizado com sucesso" });
    } catch (error) {
      console.error(error);

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

      const token = jwt.sign(
        { idPaciente: pacienteBuscado.id, tipoPerfil: "paciente" },
        auth.secret
      );

      const json = {
        paciente: {
          pacienteId: pacienteBuscado.id,
          nome: pacienteBuscado.nome,
        },
        token,
      };

      res.status(201).send(json);
    }
  },

  async verificarSenha(req, res) {
    const { idPaciente, tipoPerfil } = req;

    if (tipoPerfil !== "paciente") {
      return res
        .status(401)
        .send({ error: "Você não possui autorização para esta ação!!" });
    }

    try {
      const { senha } = await Paciente.findByPk(idPaciente, {
        attributes: ["senha"],
        raw: true,
      });

      if (bcrypt.compareSync(senhaAntiga, pacienteSenha)) {
        return res.status(200).send("Sucesso");
      }

      res.status(404).send({ erro: "Paciente não existe" });
    } catch (error) {
      return res.status(500).send({
        error: "Não foi possível verificar senha, por favor tente novamente",
      });
    }
  },

  async cadastrarImagem(req, res) {
    const { id } = req.params;

    const idPaciente = req;

    // if (tipoPerfil !== 'paciente') {
    //   return res
    //     .status(401)
    //     .send({ error: "Você não possui autorização para esta ação!!" });
    // }

    const { firebaseUrl } = req.file ? req.file : "";

    if (firebaseUrl !== "") {
      await Paciente.update(
        { foto: firebaseUrl },
        {
          where: {
            id: idPaciente,
          },
        }
      );

      return res.status(201).send({ foto: firebaseUrl });
    }
  },

  async enviarExame(req, res) {
    const { texto } = req.body;
    const { firebaseUrl } = req.file ? req.file : "";
    const { idPaciente } = req.params;
    const { idProfissional, tipoPerfil } = req;

    try {
      if (tipoPerfil !== "profissionalDaSaude") {
        return res
          .status(401)
          .send({ error: "Você não possui autorização para esta ação!!" });
      }

      const paciente = await Paciente.findByPk(idPaciente);

      if (!paciente) {
        return res.status(400).send({ error: "Paciente não encontrado (a)" });
      }

      const mailOptions = {
        from: emailConsuline.email,
        to: paciente.email,
        attachments: [
          {
            path: firebaseUrl,
          },
        ],
        subject: "Seu exame esta pronto!!!!",
        text: texto,
        html: "<p>Abaixo está o resultado do seu exame, Consuline ltda.</p>",
      };

      transporter.sendMail(mailOptions, function (err, info) {
        if (err) console.log(err);
        else console.log(info);
      });

      res
        .status(200)
        .send({ sucesso: "Resultado do exame enviado com sucesso" });
    } catch (error) {
      return res.status(500).send({
        error:
          "Não foi possivel enviar o resultado do exame, por favor tente novamente ",
      });
    }
  },
};
