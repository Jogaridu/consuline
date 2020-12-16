const { DataTypes, Model } = require("sequelize");

class TelefoneProfissional extends Model {
  static init(sequelize) {
    super.init(
      {
        numero: DataTypes.STRING,
      },
      {
        sequelize,
        tableName: "tblTelefoneProfissional",
<<<<<<< HEAD
<<<<<<< HEAD
        timestamps: false,
=======
>>>>>>> c4cf7c49dfe3af7538d5e38a9fcc10f292694ca1
=======
>>>>>>> 94ae0017559ec3111deb5af277847d1f9422693b
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.ProfissionalDaSaude, {
      foreignKey: "ProfissionalDaSaudeId",
    });
  }
}

module.exports = TelefoneProfissional;
