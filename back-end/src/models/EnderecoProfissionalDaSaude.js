const { DataTypes, Model } = require("sequelize");

class EnderecoProfissionalDaSaude extends Model {
  static init(sequelize) {
    super.init(
      {
        rua: DataTypes.TEXT,
        bairro: DataTypes.STRING,
        numero: DataTypes.STRING,
        complemento: DataTypes.STRING,
        cep: DataTypes.STRING,
        cidade: DataTypes.STRING,
        estado: DataTypes.STRING
      },
      {
        sequelize,
        tableName: "tblEnderecoProfissional",
      }
    );
  }

  static associate(models) {
<<<<<<< HEAD
<<<<<<< HEAD
    this.belongsTo(models.Estado, { foreignKey: "EstadoId" });
    this.belongsTo(models.Cidade, { foreignKey: "CidadeId" });
    this.hasOne(models.ProfissionalDaSaude);
=======
    this.hasMany(models.ProfissionalDaSaude);
>>>>>>> c4cf7c49dfe3af7538d5e38a9fcc10f292694ca1
=======
    this.hasMany(models.ProfissionalDaSaude);
>>>>>>> 94ae0017559ec3111deb5af277847d1f9422693b
  }
}

module.exports = EnderecoProfissionalDaSaude;
