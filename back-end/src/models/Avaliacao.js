const { DataTypes, Model } = require("sequelize");

class Avaliacao extends Model {
    static init(sequelize) {
        super.init({
            estrelas: DataTypes.INTEGER,
            comentario: DataTypes.TEXT
        },
            {
                sequelize,
                tableName: "tblAvaliacao"
            })
    };


    static associate(models) {
        this.belongsTo(models.Paciente);
        this.belongsTo(models.ProfissionalDaSaude);
    }
}

module.exports = Avaliacao;