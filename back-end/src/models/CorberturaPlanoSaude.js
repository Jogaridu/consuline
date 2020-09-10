const { Sequelize, DataTypes, Model } = require('sequelize');

class PlanoDeSaude extends Model {

    static init(sequelize) {
        super.init({

        }, { sequelize, })

    };

    static associate(models) {
        this.hasMany(models.Cobertura, { foreignKey: "coberturaId" });
        this.hasMany(models.PlanoDeSaude, { foreignKey: "planoDeSaudeId" });
    }
}

module.exports = PlanoDeSaude;