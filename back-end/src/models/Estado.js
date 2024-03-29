const { Sequelize, DataTypes, Model } = require("sequelize");

class Estado extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: DataTypes.STRING,
        sigla: DataTypes.STRING,
      },
      {
        sequelize,
        tableName: "tblEstado",
      }
    );
  }

  static associate(models) {
    this.hasMany(models.Cidade);
    this.hasMany(models.EnderecoProfissionalDaSaude);
    this.hasMany(models.EnderecoPaciente);
    this.hasMany(models.EnderecoFilial);
  }
}

module.exports = Estado;
