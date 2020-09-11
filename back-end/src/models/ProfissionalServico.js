const { Sequelize, DataTypes, Model } = require("sequelize");

class ProfissionalServico extends Model {
  static associate(models) {
    this.hasMany(models.ProfissionalDaSaude, {
      foreignKey: "profissionalDaSaudeId",
    });
    this.hasMany(models.Servico, {
      foreignKey: "servicoId",
    });
  }
}

module.exports = ProfissionalServico;
