const { Op } = require("sequelize");
const ProfissionalDaSaude = require("../models/ProfissionalDaSaude");
const TelefoneProfissionalDaSaude = require("../models/TelefoneProfissional");

module.exports = {
  async store(req, res) {
    const { numero, idProfissionalDaSaude } = req.body;

    const profissionalDaSaude = ProfissionalDaSaude.findByPk(idProfissionalDaSaude);

    if (!profissionalDaSaude) {
      return res.status(404).send({ erro: "Profissional não encontrado" });
    }

    try {

      let telefoneProfissionalDaSaude = await profissionalDaSaude.createTelefoneProfissional(
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
