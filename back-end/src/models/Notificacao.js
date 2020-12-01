const { DataTypes, Model } = require("sequelize");

class Notificacao extends Model {
  static init(sequelize) {
    super.init(
      {
        data: DataTypes.DATEONLY,
      },
      {
        sequelize,
        tableName: "tblnotificacao",
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Consulta);
  }
}

module.exports = Notificacao;
