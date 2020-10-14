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
        codigoVerificacao: DataTypes.STRING,
        verificado: DataTypes.BOOLEAN
      },
      {
        sequelize,
        tableName: "tblPaciente",
      }
    );
  }

  static associate(models) {
<<<<<<< HEAD
    this.belongsTo(models.EnderecoPaciente, {
      foreignKey: "EnderecoPacienteId",
    });
    this.belongsTo(models.PlanoDeSaude, { foreignKey: "PlanoDeSaudeId" });
=======
    this.belongsTo(models.EnderecoPaciente);
    this.belongsTo(models.PlanoDeSaude);
>>>>>>> c4cf7c49dfe3af7538d5e38a9fcc10f292694ca1
  }
}

module.exports = Paciente;
