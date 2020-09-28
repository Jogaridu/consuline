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
    this.belongsTo(models.Cidade);
    this.belongsTo(models.Estado);
    this.hasOne(models.Filial);
  }
}

module.exports = EnderecoFilial;
