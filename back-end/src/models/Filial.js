const { Sequelize, DataTypes, Model } = require("sequelize");

class Filial extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: DataTypes.STRING,
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
    this.belongsToMany(models.Servico, {
      through: "tblFilialServico",
    });
  }
}
module.exports = Filial;
