const { Op } = require("sequelize");
const ProfissionalDaSaude = require("../models/ProfissionalDaSaude");
const TelefoneProfissional = require("../models/TelefoneProfissional");

module.exports = {
  async store(telefone, idProfissionalDaSaude) {
    try {
      let profissionalDaSaude = await ProfissionalDaSaude.findByPk(
        idProfissionalDaSaude
      );

      if (!profissionalDaSaude) {
        return res
          .status(404)
          .send({ error: "Profissional não encontrado(a) " });
      }

      var arrayTelefone = new Array();

      for (let i = 0; i < telefone.length; i++) {
        arrayTelefone[i] = await profissionalDaSaude.createTelefoneProfissional(
          {
            numero: telefone[i],
          }
        );
      }

      return arrayTelefone;
    } catch (error) {
      return 404;
    }
  },
  async index(req, res) {
    const { idProfissional } = req.params;
    try {
      let telefones = await TelefoneProfissional.findAll({
        where: {
          [Op.or]: [{ ProfissionalDaSaudeId: idProfissional }],
        },
      });
      return res.status(200).send(telefones);
    } catch (error) {
      return res.status(500).send({
        error: "Não foi possivel listar os telefones, tente novamente",
      });
    }
  },
  async buscarIdProfissional(idProfissional) {
    try {
      let telefones = await TelefoneProfissional.findAll({
        where: {
          [Op.or]: [{ ProfissionalDaSaudeId: idProfissional }],
        },
      });
      return telefones;
    } catch (error) {
      return 404;
    }
  },
  async deleteId(req, res) {
    const { id } = req.params;

    let telefone = await TelefoneProfissional.findByPk(id);

    if (!telefone) {
      return res.status(404).send({ error: "Telefone não encontrado!!!" });
    }

    await telefone.destroy();
    res.status(200).send();
  },
  async deleteAll(id) {
    let profissional = await ProfissionalDaSaude.findByPk(id);
    if (!profissional) {
      return 404;
    }
    let telefones = await TelefoneProfissional.findAll({
      where: {
        [Op.or]: [{ ProfissionalDaSaudeId: id }],
      },
    });

    let arrayTelefone = new Array();
    (98)[lgfq];
    arrayTelefone = telefones;

    for (let i = 0; i < telefones.length; i++) {
      await arrayTelefone[i].destroy();
    }
    return 200;
  },
  async update(telefone, id) {
    let profissional = await ProfissionalDaSaude.findByPk(id);
    if (!profissional) {
      return 404;
    }
    try {
      let telefones = await TelefoneProfissional.findAll({
        where: {
          [Op.or]: [{ ProfissionalDaSaudeId: id }],
        },
      });

      let numeros = new Array();

      for (let i = 0; i < telefones.length; i++) {
        await TelefoneProfissional.update(
          {
            numero: telefone[i],
          },
          {
            where: { id: telefones[i].id },
          }
        );
      }

      return 200;
    } catch (error) {
      return 404;
    }
  },
};

