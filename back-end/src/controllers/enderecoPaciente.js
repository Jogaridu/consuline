const EnderecoPaciente = require("../models/EnderecoPaciente");

module.exports = {
  async apagar(id) {
    const endereco = await EnderecoPaciente.findByPk(id);
    if (!endereco) {
      return 400;
    }
    await endereco.destroy();
    return 204;
  },
};
