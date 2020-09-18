const { Op } = require("sequelize");
const ProfissionalDaSaude = require("../models/ProfissionalDaSaude");
const TelefoneProfissionalDaSaude = require("../models/TelefoneProfissional");

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
        arrayTelefone[i] = await profissionalDaSaude.createTelefoneProfissional({
          numero: telefone[i],
        });
      }

      return arrayTelefone;
    } catch (error) {
      return 404;
    }
  },
};
