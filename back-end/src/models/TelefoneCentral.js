const { DataTypes, Model } = require("sequelize");

class TelefoneCentral extends Model {
  static init(sequelize) {
    super.init(
      {
        numero: DataTypes.STRING,
      },
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
      { sequelize }
=======
=======
>>>>>>> 94ae0017559ec3111deb5af277847d1f9422693b
>>>>>>> afc168bcd886ec11bf0b5938289e559842930d20
      {
        sequelize,
        tableName: "tblTelefoneCentral"
      }
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c4cf7c49dfe3af7538d5e38a9fcc10f292694ca1
=======
>>>>>>> 94ae0017559ec3111deb5af277847d1f9422693b
>>>>>>> afc168bcd886ec11bf0b5938289e559842930d20
    );
  }

  static associate(models) {
<<<<<<< HEAD
    this.belongsTo(models.Central);
=======
<<<<<<< HEAD
<<<<<<< HEAD
    this.belongsTo(models.Central, { foreignKey: "idCentral" });
=======
    this.belongsTo(models.Central);
>>>>>>> c4cf7c49dfe3af7538d5e38a9fcc10f292694ca1
=======
    this.belongsTo(models.Central);
>>>>>>> 94ae0017559ec3111deb5af277847d1f9422693b
>>>>>>> afc168bcd886ec11bf0b5938289e559842930d20
  }
}

module.exports = TelefoneCentral;
