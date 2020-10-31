
const loginProfissionalDaSaudeController = require("../controllers/loginProfissionalDaSaude");
const Central = require("../models/Central");
const bcrypt = require("bcryptjs");


module.exports = {

  async logar(req, res) {
    const { login, senha } = req.body;

    const central = await Central.findOne({
      where: { login: login },
      attributes: ["login", "senha"],
      raw: true
    });

    try {

      if (central) {
        if (bcrypt.compareSync(senha, central.senha)) {
          return res.status(200).send(central);

        } else {
          return res.status(404).send({ erro: "Senha da central inválida" });

        }

      } else {
        const profissionalSaude = await loginProfissionalDaSaudeController.validaProfissional(login, senha);

        if (profissionalSaude) {
          const retorno = await loginProfissionalDaSaudeController.loginProfissionalDaSaude(profissionalSaude);

          return res.status(200).send(retorno);

        }
      }

    } catch (error) {
      console.log({ erro: "Falha no login" });
    }
  }


};
