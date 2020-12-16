const { DataTypes, Model } = require("sequelize");

class TelefoneCentral extends Model {
  static init(sequelize) {
    super.init(
      {
        numero: DataTypes.STRING,
      },
<<<<<<< HEAD
<<<<<<< HEAD
      { sequelize }
=======
=======
>>>>>>> 94ae0017559ec3111deb5af277847d1f9422693b
      {
        sequelize,
        tableName: "tblTelefoneCentral"
      }
<<<<<<< HEAD
>>>>>>> c4cf7c49dfe3af7538d5e38a9fcc10f292694ca1
=======
>>>>>>> 94ae0017559ec3111deb5af277847d1f9422693b
    );
  }

  static associate(models) {
<<<<<<< HEAD
<<<<<<< HEAD
    this.belongsTo(models.Central, { foreignKey: "idCentral" });
=======
    this.belongsTo(models.Central);
>>>>>>> c4cf7c49dfe3af7538d5e38a9fcc10f292694ca1
=======
    this.belongsTo(models.Central);
>>>>>>> 94ae0017559ec3111deb5af277847d1f9422693b
  }
}

module.exports = TelefoneCentral;
