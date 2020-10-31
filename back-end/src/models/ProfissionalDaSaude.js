const { DataTypes, Model } = require("sequelize");

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
        email:DataTypes.STRING,
        dataNascimento:DataTypes.DATEONLY
      },
      {
        sequelize,
        tableName: "tblProfissionalDaSaude",
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.EnderecoProfissionalDaSaude, {
      foreignKey: "EnderecoProfissionalDaSaudeId",
    });
    this.hasMany(models.TelefoneProfissional);
    
    // this.belongsToMany(models.Servico, {
    //   through: "tblProfissionalServico",
    // });
  }
}

module.exports = ProfissionalDaSaude;
