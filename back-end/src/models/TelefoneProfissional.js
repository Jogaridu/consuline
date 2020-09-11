const { Sequelize, DataTypes, Model } = require("sequelize");

class TelefoneProfissional extends Model {
  static init(sequelize) {
    super.init(
      {
        numero: DataTypes.STRING,
      },
      {
        sequelize,
        tableName: "tblProfissionalServico",
      }
    );
  }

  static associate(models) {
    this.belongs(models.ProfissionalDaSaude, {
      foreignKey: "profissionalDaSaudeId",
    });
  }
}

module.exports = TelefoneProfissional;
