
const loginProfissionalDaSaudeController = require("../controllers/loginProfissionalDaSaude")

module.exports = {
  async store(req, res) {
    const { login, senha } = req.body;

    try {
      const resultadoValidacaoProfissionalDaSaude = await loginProfissionalDaSaudeController.validaProfissional(
        login,
        senha
      );

      if (!resultadoValidacaoProfissionalDaSaude) {
        res.status(403).send({ error: "Login ou senha errados !!!" });
      } else {
        const profissionalDaSaude = await loginProfissionalDaSaudeController.loginProfissionalDaSaude(
          resultadoValidacaoProfissionalDaSaude
        );
        res.status(200).send(profissionalDaSaude);
      }
    } catch (error) {
      console.log(error);
    }
  },

  
};
