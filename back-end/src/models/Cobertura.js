const { DataTypes, Model } = require('sequelize');

class Cobertura extends Model {

    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
        }, { sequelize, })

    };

    static associate(models) {
        this.belongsToMany(models.PlanoDeSaude, {
            through: "tblCoberturaPlanoSaude",
            as: "cobertura",
        });
    }

}

module.exports = Cobertura;