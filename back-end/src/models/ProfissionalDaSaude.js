const { Sequelize, DataTypes, Model } = require("sequelize");

class ProfissionalDaSaude extends Model {
  static init(sequelize) {
    super.init(
      {
        cpf: DataTypes.STRING,
        nome: DataTypes.STRING,
        crm: DataTypes.STRING,
        login: DataTypes.STRING,
        senha: DataTypes.STRING,
        foto: DataTypes.STRING,
        avaliacao: DataTypes.STRING,
      },
      {
        sequelize,
        tableName: "tblProfissionalDaSaude",
      }
    );
  }

  static associate(models) {
    this.hasMany(models.EnderecoProfissionalDaSaude);
    // this.hasMany(models.TelefoneProfissional);
    // this.belongsToMany(models.Servico, {
    //   through: "tblProfissionalServico",
    // });
  }
}

module.exports = ProfissionalDaSaude;
