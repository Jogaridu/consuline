const { Sequellize, DataTypes, Model } = require("sequelize");

class Paciente extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: DataTypes.STRING,
        celular: DataTypes.STRING,
        login: DataTypes.STRING,
        senha: DataTypes.TEXT,
        dataNascimento: DataTypes.DATE,
        email: DataTypes.STRING,
        rg: DataTypes.STRING,
        cpf: DataTypes.STRING,
        foto: DataTypes.STRING,
        emailValidado: DataTypes.BOOLEAN,
      },
      {
        sequelize,
        tableName: "tblPaciente",
      }
    );
  }

  static associate(models) {
    this.hasMany(models.EnderecoPaciente);
    this.hasMany(models.PlanoDeSaude);
  }
}

module.exports = Paciente;
