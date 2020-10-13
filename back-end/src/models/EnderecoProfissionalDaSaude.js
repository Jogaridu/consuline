const { Sequelize, DataTypes, Model } = require("sequelize");

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
    this.hasMany(models.ProfissionalDaSaude);
  }
}

module.exports = EnderecoProfissionalDaSaude;
