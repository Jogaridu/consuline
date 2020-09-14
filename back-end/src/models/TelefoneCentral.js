const { Sequelize, DataTypes, Model } = require("sequelize");

class TelefoneCentral extends Model {
  static init(sequelize) {
    super.init({
      numero: DataTypes.STRING,
    });
  }
  static associate(models) {
    this.belongsTo(models.Central);
  }
}

module.exports = TelefoneCentral;
