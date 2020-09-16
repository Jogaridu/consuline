const { Sequelize, DataTypes, Model } = require('sequelize');

class Servico extends Model {

    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
            valor: DataTypes.STRING,
            descontoConsulta: DataTypes.STRING,
            descricao: DataTypes.STRING
        }, { sequelize, })

    };

    static associate(models) {
        this.belongsToMany(models.Filial, {
            through: "tblFilialServico"
        });

        this.belongsToMany(models.ProfissionalDaSaude, {
            through: "tblProfissionalServico"
        });
    }
}

module.exports = Servico;