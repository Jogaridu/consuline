const { Sequelize, DataTypes, Model } = require("sequelize");

class EnderecoPaciente extends Model {
  static init(sequelize) {
    super.init(
      {
        rua: DataTypes.STRING,
        bairro: DataTypes.STRING,
        numero: DataTypes.STRING,
        complemento: DataTypes.STRING,
        cep: DataTypes.STRING,
        cidade: DataTypes.INTEGER,
        estado: DataTypes.INTEGER,
      },
      {
        sequelize,
        tableName: "tblEnderecoPaciente",
      }
    );
  }

  static associate(models) {
    this.hasOne(models.Paciente);
  }
}

module.exports = EnderecoPaciente;
