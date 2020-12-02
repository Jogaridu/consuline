const { DataTypes, Model } = require("sequelize");

class Notificacao extends Model {
  static init(sequelize) {
    super.init(
      {
        data: DataTypes.DATE,
        mensagem: DataTypes.STRING
      },
      {
        sequelize,
        tableName: "tblnotificacao",
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Consulta);
    this.belongsTo(models.Paciente);
  }
}

module.exports = Notificacao;
