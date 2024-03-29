const { Op } = require("sequelize");
const ProfissionalDaSaude = require("../models/ProfissionalDaSaude");
const EnderecoProfissionalDaSaude = require("../models/EnderecoProfissionalDaSaude");
<<<<<<< HEAD
const telefoneProfissionalController = require("./telefoneProfissionalDaSaude");
const Filial = require("../models/Filial");
const Servico = require("../models/Servico");
=======
<<<<<<< HEAD
const enderecoProfissionalDaSaudeController = require("./enderecoProfissionalDaSaude");
const telefoneProfissionalController = require("./TelefoneProfissionalDaSaude");
=======
const telefoneProfissionalController = require("./telefoneProfissionalDaSaude");
const Filial = require("../models/Filial");
const Servico = require("../models/Servico");
>>>>>>> 94ae0017559ec3111deb5af277847d1f9422693b
>>>>>>> afc168bcd886ec11bf0b5938289e559842930d20
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../config/auth.json");
const TelefoneProfissional = require("../models/TelefoneProfissional");
const { mediaAvaliacaoMedico } = require("./avaliacao");

module.exports = {
<<<<<<< HEAD
=======
<<<<<<< HEAD
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

    const { firebaseUrl } = req.file ? req.file : "";
    const enderecoJson = JSON.parse(endereco);
    const telefoneJson = JSON.parse(telefone);

    try {
      const idEndereco = await enderecoProfissionalDaSaudeController.cadastrar(
        enderecoJson
      );

      if (idEndereco === 400) {
        return res.status(400).send({
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
          foto: firebaseUrl,
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

      const profissional = { dadosProfissional, telefones };

      res.status(201).send({ profissional });
    } catch (error) {
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
        .status(400)
        .send({ erro: "Profissional da saúde não encontrado(a)." });
    }

    const statusDeleteEndereco = await enderecoProfissionalDaSaudeController.apagar(
      profissionalDaSaude.EnderecoProfissionalDaSaudeId
    );

    if (statusDeleteEndereco === 400) {
      return res.status(400).send({
        error:
          "Não foi possivel deletar o enderço desse profissional, tente novamente",
      });
    }

    const statusDeleteTelefone = await telefoneProfissionalController.apagar(
      profissionalDaSaude.id
    );

    if (statusDeleteTelefone === 400) {
      return res.status(400).send({
        error: "Não foi possivel excluir os telefones deste profissional",
      });
    }

    await profissionalDaSaude.destroy();
    res.status(204).send();
  },

  async atualizar(req, res) {
    const { id } = req.params;
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

    const { firebaseUrl } = req.file ? req.file : "";
    const enderecoJson = JSON.parse(endereco);
    const telefoneJson = JSON.parse(telefone);

    const profissionalDaSaude = await ProfissionalDaSaude.findByPk(id);

    if (!profissionalDaSaude) {
      return res.status(400).send({ error: "Profisional não encontrado(a)!!" });
    }

    let enderecoProfissionalDaSaude = await EnderecoProfissionalDaSaude.findByPk(
      profissionalDaSaude.EnderecoProfissionalDaSaudeId
    );

    if (!enderecoProfissionalDaSaude) {
      return res.status(400).send({ error: "Endereço não encontrado!!" });
    }

    const statusUpdateEndereco = await enderecoProfissionalDaSaudeController.atualizar(
      enderecoJson,
      profissionalDaSaude.EnderecoProfissionalDaSaudeId
    );

    if (statusUpdateEndereco === 400) {
      return res.status(400).send({
        error: "Não foi possivel atualizar o endereço, tente novamente",
      });
    }

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
            "EstadoId",
            "CidadeId",
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
=======
>>>>>>> afc168bcd886ec11bf0b5938289e559842930d20
    async cadastrar(req, res) {
        const { idCentral, tipoPerfil } = req;

        // if (tipoPerfil != "admin") {
        //   return res
        //     .status(401)
        //     .send({ error: "Você não possui autorização para esta ação!!" });
        // }

        const {
            cpf,
            nome,
            crm,
            login,
            senha,
            email,
            endereco,
            telefone,
            dataNascimento,
            FilialId,
            ServicoId,
        } = req.body;
        const { firebaseUrl } = req.file ? req.file : "";

        const enderecoJson = JSON.parse(endereco);
        const telefoneJson = JSON.parse(telefone);

        try {
            const servico = await Servico.findByPk(ServicoId);

            if (!servico) {
                return res.status(400).send({ error: "Serviço não encontrado" });
            }

            const filial = await Filial.findByPk(FilialId);

            if (!filial) {
                return res.status(400).send({ error: "Filial não encontrada" });
            }

            let dadosProfissional = await ProfissionalDaSaude.findOne({
                where: {
                    [Op.or]: [{ login }, { crm }, { cpf }, { email }],
                },
            });
            if (dadosProfissional) {
                return res
                    .status(400)
                    .send({ error: "Login ou crm ou cpf ou email, já cadastrado!!" });
            }

            const enderecoProfissionalDaSaude = await EnderecoProfissionalDaSaude.create(
                enderecoJson
            );

            const senhaCripto = await bcrypt.hash(senha, 10);

            dadosProfissional = await enderecoProfissionalDaSaude.createProfissionalDaSaude(
                {
                    cpf,
                    nome,
                    crm,
                    login,
                    senha: senhaCripto,
                    foto: firebaseUrl,
                    email,
                    dataNascimento,
                    FilialId,
                    ServicoId,
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

            const token = jwt.sign(
                {
                    idProfissional: dadosProfissional.id,
                    tipoPerfil: "profissionalDaSaude",
                },
                auth.secret
            );
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
                    {
                        model: TelefoneProfissional,
                    },
                ],
                order: [["createdAt", "DESC"]],
            });

            for (let index = 0; index < profissionais.length; index++) {
                const media = await mediaAvaliacaoMedico(profissionais[index].id);
                profissionais[index]["media"] = media;
            }

            res.status(200).send(profissionais);
        } catch (error) {
            console.log(error);
            return res.status(500).send({
                error:
                    "Não foi possivel listar todo(a)s o(a)s profissionais, tente novamente ",
            });
        }
    },

    async listarPorFilial(req, res) {
        const { idFilial } = req.params;

        try {

            let profissionais = await ProfissionalDaSaude.findAll({
                where: { FilialId: idFilial },
                order: [["id", "ASC"]],
            });

            res.status(200).send(profissionais);

        } catch (error) {

            console.log(error);
            return res.status(500).send({
                error:
                    "Não foi possível listar todos os profissionais desta filial, por favor tente novamente ",
            });
        }
    },

    async listarPorFilialEServico(req, res) {
        const { idFilial, idServico } = req.params;

        try {
            let profissionais = await ProfissionalDaSaude.findAll({
                where: { FilialId: idFilial, ServicoId: idServico },
                order: [["id", "ASC"]],
                raw: true
            });

            for (let index = 0; index < profissionais.length; index++) {
                const media = await mediaAvaliacaoMedico(profissionais[index].id);
                profissionais[index]["media"] = media;
            }

            return res.status(200).send(profissionais);

        } catch (error) {
            console.log(error);
            return res.status(500).send({
                error:
                    "Não foi possível listar todos os profissionais desta filial e serviço, por favor tente novamente ",
            });
        }
    },

    async apagar(req, res) {
        const { idCentral, tipoPerfil } = req;

        if (tipoPerfil !== "admin") {
            return res
                .status(401)
                .send({ error: "Você não possui autorização para esta ação!!" });
        }

        const { id } = req.params;

        let profissionalDaSaude = await ProfissionalDaSaude.findByPk(id);
        if (!profissionalDaSaude) {
            return res
                .status(400)
                .send({ erro: "Profissional da saúde não encontrado(a)." });
        }

        const endereco = await EnderecoProfissionalDaSaude.findByPk(
            profissionalDaSaude.EnderecoProfissionalDaSaudeId
        );

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
        const { idCentral, tipoPerfil } = req;

        if (tipoPerfil !== "admin") {
            return res
                .status(401)
                .send({ error: "Você não possui autorização para esta ação!!" });
        }

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

        await EnderecoProfissionalDaSaude.update(enderecoJson, {
            where: { id: profissionalDaSaude.EnderecoProfissionalDaSaudeId },
        });

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

    async verificarNome(req, res) {
        const { nome } = req.body;

        try {
            const profissionalBuscado = await ProfissionalDaSaude.findOne({
                where: {
                    nome,
                },
                attributes: ["nome"],
            });

            if (profissionalBuscado) {
                res.status(200).send("Profissional cadastrado");
            } else {
                res.status(204).send();
            }
        } catch (error) {
            res
                .status(404)
                .send({ erro: "Profissional não encontrado ou NOME não informado" });
        }
    },

    async verificarCrm(req, res) {
        const { crm } = req.body;

        try {
            const profissionalBuscado = await ProfissionalDaSaude.findOne({
                where: {
                    crm,
                },
                attributes: ["crm"],
            });

            if (profissionalBuscado) {
                res.status(200).send("Profissional cadastrado");
            } else {
                res.status(204).send();
            }
        } catch (error) {
            res
                .status(404)
                .send({ erro: "Profissional não encontrado ou CRM não informado" });
        }
    },

    async verificarLogin(req, res) {
        const { login } = req.body;

        try {
            const profissionalBuscado = await ProfissionalDaSaude.findOne({
                where: {
                    login,
                },
                attributes: ["login"],
            });

            if (profissionalBuscado) {
                res.status(200).send("Profissional cadastrado");
            } else {
                res.status(204).send();
            }
        } catch (error) {
            res
                .status(404)
                .send({ erro: "Profissional não encontrado ou LOGIN não informado" });
        }
    },

    async verificarEmail(req, res) {
        const { email } = req.body;

        try {
            const profissionalBuscado = await ProfissionalDaSaude.findOne({
                where: {
                    email,
                },
                attributes: ["email"],
            });

            if (profissionalBuscado) {
                res.status(200).send("Profissional cadastrado");
            } else {
                res.status(204).send();
            }
        } catch (error) {
            res
                .status(404)
                .send({ erro: "Profissional não encontrado ou EMAIL não informado" });
        }
    },

    async verificarCpf(req, res) {
        const { cpf } = req.body;

        try {
            const profissionalBuscado = await ProfissionalDaSaude.findOne({
                where: {
                    cpf,
                },
                attributes: ["cpf"],
            });

            if (profissionalBuscado) {
                res.status(200).send("Profissional cadastrado");
            } else {
                res.status(204).send();
            }
        } catch (error) {
            res
                .status(404)
                .send({ erro: "Profissional não encontrado ou CPF não informado" });
        }
    },
<<<<<<< HEAD
=======
>>>>>>> 94ae0017559ec3111deb5af277847d1f9422693b
>>>>>>> afc168bcd886ec11bf0b5938289e559842930d20
};
