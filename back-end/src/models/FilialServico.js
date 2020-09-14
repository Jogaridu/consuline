const { Sequelize, DataTypes, Model } = require("sequelize");

class FilialServico extends Model {
  static associate(models) {
    this.belongsTo(models.Filial);
    this.belongsTo(models.Servico);
  }
}
module.exports = FilialServico;
