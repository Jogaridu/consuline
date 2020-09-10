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
      },
      {
        sequelize,
        tableName: "tblPaciente",
      }
    );
  }

  static associate(models) {
    this.hasOne(models.EnderecoPaciente, {
      foreignKey: "enderecoPacienteId",
    });
    this.hasOne(models.PlanoDeSaude, {
      foreignKey: "planoDeSaudeId",
    });
  }
}

module.exports = Paciente;
