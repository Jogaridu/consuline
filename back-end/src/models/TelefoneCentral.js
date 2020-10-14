const { Sequelize, DataTypes, Model } = require("sequelize");

class TelefoneCentral extends Model {
  static init(sequelize) {
    super.init(
      {
        numero: DataTypes.STRING,
      },
<<<<<<< HEAD
      { sequelize }
=======
      {
        sequelize,
        tableName: "tblTelefoneCentral"
      }
>>>>>>> c4cf7c49dfe3af7538d5e38a9fcc10f292694ca1
    );
  }

  static associate(models) {
<<<<<<< HEAD
    this.belongsTo(models.Central, { foreignKey: "idCentral" });
=======
    this.belongsTo(models.Central);
>>>>>>> c4cf7c49dfe3af7538d5e38a9fcc10f292694ca1
  }
}

module.exports = TelefoneCentral;
