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
<<<<<<< HEAD
        cidadeId: DataTypes.INTEGER,
        estadoId: DataTypes.INTEGER,
=======
        cidade: DataTypes.INTEGER,
        estado: DataTypes.INTEGER,
>>>>>>> c4cf7c49dfe3af7538d5e38a9fcc10f292694ca1
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
=======
>>>>>>> c4cf7c49dfe3af7538d5e38a9fcc10f292694ca1
    this.hasOne(models.Filial);
  }
}

module.exports = EnderecoFilial;
