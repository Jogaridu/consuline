const { DataTypes, Model } = require("sequelize");

class Consulta extends Model {
  static init(sequelize) {
    super.init(
      {
        valor: DataTypes.STRING,
        desconto: DataTypes.STRING,
        data: DataTypes.DATEONLY,
        horario: DataTypes.TIME,
        descricao: DataTypes.TEXT,
        sintomas: DataTypes.STRING,
      },
      {
        sequelize,
        tableName: "tblConsulta",
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Atendimento);
    this.belongsTo(models.ProfissionalDaSaude);
    this.belongsTo(models.Paciente);
    this.belongsTo(models.Filial);
    this.belongsTo(models.Servico);
    this.belongsTo(models.Pagamento);
    this.hasOne(models.Notificacao);
  }
}

module.exports = Consulta;
