const EnderecoFilial = require("../models/EnderecoFilial");
<<<<<<< HEAD
const { atualizar } = require("./filiais");
=======
>>>>>>> c4cf7c49dfe3af7538d5e38a9fcc10f292694ca1

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
<<<<<<< HEAD
=======


>>>>>>> c4cf7c49dfe3af7538d5e38a9fcc10f292694ca1
}