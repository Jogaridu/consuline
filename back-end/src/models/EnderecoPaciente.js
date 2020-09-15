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
      },
      {
        sequelize,
        tableName: "tblEnderecoPaciente",
      }
    );
  }

  static associate(models) {
    this.hasMany(models.Cidade, { foreignKey: "idCidade" });
    this.hasMany(models.Estado, { foreignKey: "idEstado" });
    // this.belongsTo(models.Pacienete);
  }
}

module.exports = EnderecoPaciente;
