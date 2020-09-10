const { Sequelize, DataTypes, Model } = require("sequelize");

class Cidade extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: DataTypes.STRING,
      },
      {
        sequelize,
        tableName: "tblCidade",
      }
    );
  }
  static associate(models) {
    this.belongsTo(models.Estado, {
      foreignKey: "EstadoId",
    });

    this.hasMany(models.EnderecoProfissionalDaSaude);
    this.hasMany(models.EnderecoPaciente);
    this.hasMany(models.EnderecoFilial);
  }
}

module.exports = Cidade;
