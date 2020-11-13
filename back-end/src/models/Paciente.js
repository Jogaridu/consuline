const { DataTypes, Model } = require("sequelize");

class Paciente extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: DataTypes.STRING,
        celular: DataTypes.STRING,
        login: DataTypes.STRING,
        senha: DataTypes.TEXT,
        dataNascimento: DataTypes.DATEONLY,
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
    this.belongsTo(models.EnderecoPaciente);
    this.belongsTo(models.PlanoDeSaude);
    this.hasMany(models.Consulta, {
      foreignKey: "PacienteId"
    });

    this.hasMany(models.Avaliacao, {
      foreignKey: "PacienteId"
    });

  }
}

module.exports = Paciente;
