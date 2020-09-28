const { Sequelize, DataTypes, Model } = require("sequelize");

class EnderecoFilial extends Model {
  static init(sequelize) {
    super.init(
      {
        rua: DataTypes.STRING,
        bairro: DataTypes.STRING,
        numero: DataTypes.STRING,
        complemento: DataTypes.STRING,
        cep: DataTypes.STRING,
        cidadeId: DataTypes.INTEGER,
        estadoId: DataTypes.INTEGER,
      },
      {
        sequelize,
        tableName: "tblEnderecoFilial",
      }
    );
  }

  static associate(models) {
<<<<<<< HEAD
    this.belongsTo(models.Cidade);
    this.belongsTo(models.Estado);
    this.hasOne(models.Filial);
=======
    this.hasMany(models.Filial);
    this.belongsTo(models.Cidade, { foreignKey: "idCidade" });
    this.belongsTo(models.Estado, { foreignKey: "idEstado" });
>>>>>>> origin/develop
  }
}

module.exports = EnderecoFilial;
