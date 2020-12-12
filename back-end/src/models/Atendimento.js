const { DataTypes, Model } = require("sequelize");

class Atendimento extends Model {
    static init(sequelize) {
        super.init({
            tipo: DataTypes.STRING
        },
         {
            sequelize,
            tableName: "tblatendimento",
        });
    }

    static associate(models) {
        this.hasMany(models.Consulta, {
            foreignKey: "AtendimentoId"
        })
    }
}

module.exports = Atendimento;