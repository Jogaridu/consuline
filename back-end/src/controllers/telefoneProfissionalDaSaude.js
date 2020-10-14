const { Op } = require("sequelize");
const ProfissionalDaSaude = require("../models/ProfissionalDaSaude");
<<<<<<< HEAD
const TelefoneProfissional = require("../models/TelefoneProfissional");

module.exports = {
  async cadastrar(telefone, idProfissionalDaSaude) {
    try {
      let profissionalDaSaude = await ProfissionalDaSaude.findByPk(
        idProfissionalDaSaude
      );

      if (!profissionalDaSaude) {
        return 400;
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
      return 400;
    }
  },
  async adicionar(req, res) {
    const { idProfissionalDaSaude } = req.params;
    let { numero } = req.body;
    try {
      let profissionalDaSaude = await ProfissionalDaSaude.findByPk(
        idProfissionalDaSaude
      );

      if (!profissionalDaSaude) {
        return res
          .status(400)
          .send({ error: "Profissional não encontrado(a) " });
      }

      const telefone = await profissionalDaSaude.createTelefoneProfissional({
        numero,
      });

      res.status(200).send(telefone);
    } catch (error) {
      return res
        .status(500)
        .send({
          error: "Não foi possivel adicionar este numero, tente novamente",
        });
    }
  },
  async listar(req, res) {
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
      return 400;
    }
  },
  async apagarId(req, res) {
    const { id } = req.params;

    let telefone = await TelefoneProfissional.findByPk(id);

    if (!telefone) {
      return res.status(400).send({ error: "Telefone não encontrado!!!" });
    }

    await telefone.destroy();
    res.status(200).send();
  },
  async apagar(id) {
    let profissional = await ProfissionalDaSaude.findByPk(id);
    if (!profissional) {
      return 400;
    }
    let telefones = await TelefoneProfissional.findAll({
      where: {
        [Op.or]: [{ ProfissionalDaSaudeId: id }],
      },
    });

    let arrayTelefone = new Array();
    arrayTelefone = telefones;

    for (let i = 0; i < telefones.length; i++) {
      await arrayTelefone[i].destroy();
    }
    return 200;
  },
  async atualizar(editTelefone, id) {
    let profissional = await ProfissionalDaSaude.findByPk(id);
    if (!profissional) {
      return 400;
    }
    try {
      let telefones = await TelefoneProfissional.findAll({
        where: {
          [Op.or]: [{ ProfissionalDaSaudeId: id }],
        },
      });


      for (let i = 0; i < telefones.length; i++) {


        await TelefoneProfissional.update(
          {
            numero: editTelefone[i],
          },
          {
            where: { id: telefones[i].id },
          }
        );
      }

      return 200;
    } catch (error) {
      return 400;
=======
const TelefoneProfissionalDaSaude = require("../models/TelefoneProfissional");

module.exports = {
  async store(req, res) {
    const { numero, idProfissionalDaSaude } = req.body;

    const profissionalDaSaude = ProfissionalDaSaude.findByPk(idProfissionalDaSaude);

    if (!profissionalDaSaude) {
      return res.send("Profissional não encontrado");
    }

    try {

      let telefoneProfissionalDaSaude = await profissionalDaSaude.createTelefoneProfissional(
        {
          numero,
        }
      );

      res.status(201).send(telefoneProfissionalDaSaude);

    } catch (error) {

      console.log(error);

      return res.status(500).send({
        error: "Não foi possivel cadastrar este telefone, tente novamente",
      });

>>>>>>> c4cf7c49dfe3af7538d5e38a9fcc10f292694ca1
    }
  },
};
