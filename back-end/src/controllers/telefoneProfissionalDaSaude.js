const { Op } = require("sequelize");
const ProfissionalDaSaude = require("../models/ProfissionalDaSaude");
const TelefoneProfissionalDaSaude = require("../models/TelefoneProfissional");

module.exports = {
  async store(req, res) {
    const { numero, idProfissionalDaSaude } = req.body;

    try {
      let profissionalDaSaude = await ProfissionalDaSaude.findByPk(
        idProfissionalDaSaude
      );

      if (!profissionalDaSaude) {
        res
          .status(404)
          .send({ error: "Profissional da saúde não encontrado(a)!!" });
      }

      let telefoneProfissionalDaSaude = await profissionalDaSaude.createTelefoneProfissionalDaSaude(
        {
          numero,
        }
      );

      res.status(201).send(telefoneProfissionalDaSaude);
    } catch (error) {
      return res.status(500).send({
        error: "Não foi possivel cadastrar este telefone, tente novamente",
      });
    }
  },
};
