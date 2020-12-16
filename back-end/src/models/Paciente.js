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
<<<<<<< HEAD
<<<<<<< HEAD
    this.belongsTo(models.EnderecoPaciente, {
      foreignKey: "EnderecoPacienteId",
    });
    this.belongsTo(models.PlanoDeSaude, { foreignKey: "PlanoDeSaudeId" });
=======
    this.belongsTo(models.EnderecoPaciente);
    this.belongsTo(models.PlanoDeSaude);
>>>>>>> c4cf7c49dfe3af7538d5e38a9fcc10f292694ca1
=======
    this.belongsTo(models.EnderecoPaciente);
    this.belongsTo(models.PlanoDeSaude);
    this.hasMany(models.Consulta, {
      foreignKey: "PacienteId"
    });

    this.hasMany(models.Avaliacao, {
      foreignKey: "PacienteId"
    });

    this.hasMany(models.Notificacao, {
      foreignKey: "PacienteId"
    })

>>>>>>> 94ae0017559ec3111deb5af277847d1f9422693b
  }
}

module.exports = Paciente;
