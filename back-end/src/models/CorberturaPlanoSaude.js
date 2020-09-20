const { Sequelize, DataTypes, Model } = require('sequelize');

class PlanoDeSaude extends Model {

    static init(sequelize) {
        super.init({

        }, { sequelize, })

    };

    static associate(models) {
        this.hasMany(models.Cobertura, { foreignKey: "idCobertura" });
        this.hasMany(models.PlanoDeSaude, { foreignKey: "idPlanoDeSaude" });
    }
}

module.exports = PlanoDeSaude;