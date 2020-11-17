const { DataTypes, Model } = require("sequelize");

class TelefoneFilial extends Model {
  static init(sequelize) {
    super.init(
      {
        numero: DataTypes.STRING,
      },
      {
        sequelize,
        tableName: "tblTelefoneFilial",
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Filial);
  }
}

module.exports = TelefoneFilial;
