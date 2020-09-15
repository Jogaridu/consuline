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
    this.belongsTo(models.ProfissionalDaSaude, {
      foreignKey: "idProfissionalDaSaude",
    });
  }
}

module.exports = TelefoneProfissional;
