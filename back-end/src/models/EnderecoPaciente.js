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
<<<<<<< HEAD
    this.belongsTo(models.Cidade, { foreignKey: "idCidade" });
    this.belongsTo(models.Estado, { foreignKey: "idEstado" });
    // this.belongsTo(models.Pacienete);
=======
    this.hasOne(models.Paciente);
>>>>>>> c4cf7c49dfe3af7538d5e38a9fcc10f292694ca1
  }
}

module.exports = EnderecoPaciente;
