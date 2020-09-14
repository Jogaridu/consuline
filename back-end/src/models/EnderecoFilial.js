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
      },
      {
        sequelize,
        tableName: "tblEnderecoFilial",
      }
    );
  }

  static associate(models) {
    this.hasMany(models.EnderecoFilial);
    this.belongsTo(models.Estado, {
      foreignKey: "cidadeId",
    });
    this.belongsTo(models.Cidade, {
      foreignKey: "estadoId",
    });
  }
}

module.exports = EnderecoFilial;
