const { Sequelize, DataTypes, Model } = require("sequelize");

class TelefoneProfissional extends Model {
  static init(sequelize) {
    super.init(
      {
        numero: DataTypes.STRING,
      },
      {
        sequelize,
        tableName: "tblTelefoneProfissional",
        timestamps: false,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.ProfissionalDaSaude, {
      foreignKey: "ProfissionalDaSaudeId",
    });
  }
}

module.exports = TelefoneProfissional;
