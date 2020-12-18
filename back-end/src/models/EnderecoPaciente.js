const { DataTypes, Model } = require("sequelize");

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
    this.hasOne(models.Paciente);
=======
<<<<<<< HEAD
<<<<<<< HEAD
    this.belongsTo(models.Cidade, { foreignKey: "idCidade" });
    this.belongsTo(models.Estado, { foreignKey: "idEstado" });
    // this.belongsTo(models.Pacienete);
=======
    this.hasOne(models.Paciente);
>>>>>>> c4cf7c49dfe3af7538d5e38a9fcc10f292694ca1
=======
    this.hasOne(models.Paciente);
>>>>>>> 94ae0017559ec3111deb5af277847d1f9422693b
>>>>>>> afc168bcd886ec11bf0b5938289e559842930d20
  }
}

module.exports = EnderecoPaciente;
