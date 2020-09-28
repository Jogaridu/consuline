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
<<<<<<< HEAD
    this.belongsTo(models.EnderecoFilial);
=======
    this.belongsTo(models.EnderecoFilial, { foreignKey: "idEnderecoFilial" });
>>>>>>> origin/develop
    this.hasMany(models.TelefoneFilial);
    this.belongsToMany(models.Servico, {
      through: "tblFilialServico",
    });
  }
}
module.exports = Filial;
