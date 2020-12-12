const { DataTypes, Model } = require("sequelize");

class TelefoneCentral extends Model {
  static init(sequelize) {
    super.init(
      {
        numero: DataTypes.STRING,
      },
      {
        sequelize,
        tableName: "tblTelefoneCentral"
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Central);
  }
}

module.exports = TelefoneCentral;
