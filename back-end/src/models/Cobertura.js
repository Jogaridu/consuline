const { Sequelize, DataTypes, Model } = require('sequelize');

class Cobertura extends Model {

    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
        }, { sequelize, })

    };

    static associate(models) {
        this.belongsTo(models.CoberturaPlanoSaude)

    }

}

module.exports = Cobertura;