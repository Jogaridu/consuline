const { Sequelize, DataTypes, Model } = require("sequelize");

class EnderecoProfissionalDaSaude extends Model {
  static init(sequelize) {
    super.init(
      {
        rua: DataTypes.TEXT,
        bairro: DataTypes.STRING,
        numero: DataTypes.STRING,
        complemento: DataTypes.STRING,
        cep: DataTypes.STRING,
      },
      {
        sequelize,
        tableName: "tblEnderecoProfissional",
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Estado, { foreignKey: "EstadoId" });
    this.belongsTo(models.Cidade, { foreignKey: "CidadeId" });
    this.hasOne(models.ProfissionalDaSaude);
  }
}

module.exports = EnderecoProfissionalDaSaude;
