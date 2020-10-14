const { Sequelize, DataTypes, Model } = require("sequelize");

class Filial extends Model {
  static init(sequelize) {
    super.init(
      {
        nomeFantasia: DataTypes.STRING,
        dataAbertura: DataTypes.DATEONLY,
        cnpj: DataTypes.STRING,
        ie: DataTypes.STRING,
        email: DataTypes.STRING,
        razaoSocial: DataTypes.STRING
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
