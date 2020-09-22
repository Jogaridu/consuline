const { Op } = require("sequelize");
const EnderecoProfissionalDaSaude = require("../models/EnderecoProfissionalDaSaude");
const Cidade = require("../models/Cidade");
const Estado = require("../models/Estado");

module.exports = {
  async cadastrar(endereco) {
    const {
      rua,
      bairro,
      numero,
      complemento,
      cep,
      idCidade,
      idEstado,
    } = endereco;

    const estado = await Estado.findByPk(idEstado);

    if (!estado) {
      return 404;
    }
    const cidade = await Cidade.findByPk(idCidade);

    if (!cidade) {
      return 404;
    }

    let enderecoProfissionalDaSaude = await cidade.createEnderecoProfissionalDaSaude(
      {
        rua,
        bairro,
        numero,
        complemento,
        cep,
        EstadoId: idEstado,
      }
    );

    return enderecoProfissionalDaSaude.id;
  },

  async listar(req, res) {
    let enderecos = await EnderecoProfissionalDaSaude.findAll({
      include: [
        {
          association: "Cidade",
          attributes: ["nome"],
        },
        {
          association: "Estado",
          attributes: ["nome", "sigla"],
        },
      ],
      order: [["createdAt", "DESC"]],
    });

    res.status(200).send(enderecos);
  },

  async atualizar(endereco, id) {
    const {
      rua,
      bairro,
      numero,
      complemento,
      cep,
      idCidade,
      idEstado,
    } = endereco;

    const estado = await Estado.findByPk(idEstado);

    if (!estado) {
      return 404;
    }
    const cidade = await Cidade.findByPk(idCidade);

    if (!cidade) {
      return 404;
    }

    try {
      await EnderecoProfissionalDaSaude.update(
        {
          rua,
          bairro,
          numero,
          complemento,
          cep,
          EstadoId: idEstado,
          CidadeId: idCidade,
        },
        {
          where: { id: id },
        }
      );

      return 200;
    } catch (error) {
      return 404;
    }
  },

  async apagar(id) {
    let endereco = await EnderecoProfissionalDaSaude.findByPk(id);
    if (!endereco) {
      return 404;
    }

    await endereco.destroy();

    return 204;
  },
};
