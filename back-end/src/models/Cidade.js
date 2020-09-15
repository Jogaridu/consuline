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
    this.hasMany(models.Estado, {
      foreignKey: "idEstado",
    });

    this.hasMany(models.EnderecoProfissionalDaSaude);
    this.belongsTo(models.EnderecoPaciente);
    this.hasMany(models.EnderecoFilial);
  }
}

module.exports = Cidade;
