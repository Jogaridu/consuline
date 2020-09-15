const { Sequelize, DataTypes, Model } = require("sequelize");

class TelefoneCentral extends Model {
  static init(sequelize) {
    super.init({
      numero: DataTypes.STRING,

    }, { sequelize, });

  }

  static associate(models) {
    this.hasMany(models.Central);
  }
}

module.exports = TelefoneCentral;
