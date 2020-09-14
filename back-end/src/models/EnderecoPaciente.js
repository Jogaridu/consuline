const { Sequelize, DataTypes, Model } = require('sequelize');

class EnderecoPaciente extends Model {

    static init(sequelize) {
        super.init({
            rua: DataTypes.STRING,
            bairro: DataTypes.STRING,
            numero: DataTypes.STRING,
            complemento: DataTypes.STRING,
            cep: DataTypes.STRING,
        }, { sequelize, })

    };

    static associate(models) {
        this.belongsTo(models.Paciente);
    }
}

module.exports = EnderecoPaciente;