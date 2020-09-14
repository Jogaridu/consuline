const { Sequelize, DataTypes, Model } = require("sequelize");

class Filial extends Model {
  static init(sequelize) {
    super.static(
      {
        horarioFuncionamento: DataTypes.TIME,
      },
      {
        sequelize,
        tableName: "tblFilial",
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.EnderecoFilial);
    this.hasMany(models.TelefoneFilial);
    this.hasMany(models.FilialServico);
  }
}
module.exports = Filial;
