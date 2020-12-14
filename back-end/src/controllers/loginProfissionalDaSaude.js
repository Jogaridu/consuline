const ProfissionalDaSaude = require("../models/ProfissionalDaSaude");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../config/auth.json");

module.exports = {
  async validaProfissional(login, senha) {
    const profissionalDaSaude = await ProfissionalDaSaude.findOne({
      where: {
        login: login,
      },
    });
 
    if (
      profissionalDaSaude &&
      (await bcrypt.compare(senha, profissionalDaSaude.senha))
    ) {
      return profissionalDaSaude;
    } else {
      return false;
    }
  },

  async loginProfissionalDaSaude(profissionalDaSaude) {
    const token = jwt.sign(
      {
        idProfissional: profissionalDaSaude.id,
        tipoPerfil: "profissionalDaSaude",
      },
      auth.secret
    );


    const profissionalDaSaudeJson = {
      profissionalDaSaude: {
        idProfissionalDaSaude: profissionalDaSaude.id,
        nome: profissionalDaSaude.nome,
        cpf: profissionalDaSaude.cpf,
      },
      token,
    };

    return profissionalDaSaudeJson;
  },
};
