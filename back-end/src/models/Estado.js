const { Sequelize, DataTypes, Model } = require("sequelize");

class Estado extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: DataTypes.STRING,
        sigla: DataTypes.STRING,
      },
      {
        sequelize,
        tableName: "tblEstado",
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Cidade);
    this.belongsTo(models.EnderecoProfissionalDaSaude);
    // this.belongsTo(models.EnderecoPaciente);
    // this.belongsTo(models.EnderecoFilial);
  }
}

module.exports = Estado;
