const { Sequelize, DataTypes, Model } = require("sequelize");

class Central extends Model {
  static init(sequelize) {
    super.init({
      email: DataTypes.TEXT,
      login: DataTypes.STRING,
      senha: DataTypes.TEXT,
      nome: DataTypes.STRING,
    },
      {
        sequelize,
        tableName: "tblCentral"
      });
  }

  static associate(models) {
    this.hasMany(models.TelefoneCentral);
  }
}

module.exports = Central;
