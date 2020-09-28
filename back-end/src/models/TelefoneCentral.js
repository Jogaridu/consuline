const { Sequelize, DataTypes, Model } = require("sequelize");

class TelefoneCentral extends Model {
  static init(sequelize) {
    super.init(
      {
        numero: DataTypes.STRING,
      },
      { sequelize }
    );
  }

  static associate(models) {
    this.belongsTo(models.Central, { foreignKey: "idCentral" });
  }
}

module.exports = TelefoneCentral;
