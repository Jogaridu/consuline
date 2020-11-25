const {DataTypes, Model} = require("sequelize");

class Pagamento extends Model{
    static init(sequelize){
        super.init({
            cod:DataTypes.STRING,
            data:DataTypes.DATEONLY,
            numero:DataTypes.STRING,
            nomeCompleto:DataTypes.STRING
        },
        {
            sequelize,
            tableName:"tblpagamento"
        }
        );
    }

    static associate(models){
        this.hasOne(models.Consulta,{
            foreignKey:"PagamentoId"
        });
    }
}

module.exports = Pagamento