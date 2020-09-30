const EnderecoFilial = require("../models/EnderecoFilial");

module.exports = {
    async cadastrar(endereco) {
        return await EnderecoFilial.create(endereco);
    },

    async atualizar(endereco, id) {
        return await EnderecoFilial.update(endereco, {
            where: {
                id: id
            }
        })
    }


}