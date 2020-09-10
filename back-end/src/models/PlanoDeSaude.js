const { Sequelize, DataTypes, Model } = require('sequelize');

class PlanoDeSaude extends Model {

    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
            valor: DataTypes.STRING,
            descontoConsulta: DataTypes.STRING,
            descricao: DataTypes.STRING
        }, { sequelize, })

    };

    static associate(models) {
        this.belongsTo(models.CoberturaPlanoSaude)
    }
}

module.exports = PlanoDeSaude;