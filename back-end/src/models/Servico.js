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
        this.belongsTo(models.FilialServico);
        this.belongsTo(models.ProfissionalServico);
    }
}

module.exports = Servico;