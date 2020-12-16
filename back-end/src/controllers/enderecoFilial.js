const EnderecoFilial = require("../models/EnderecoFilial");
<<<<<<< HEAD
<<<<<<< HEAD
const { atualizar } = require("./filiais");
=======
>>>>>>> c4cf7c49dfe3af7538d5e38a9fcc10f292694ca1
=======
>>>>>>> 94ae0017559ec3111deb5af277847d1f9422693b

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
<<<<<<< HEAD
=======


>>>>>>> c4cf7c49dfe3af7538d5e38a9fcc10f292694ca1
=======


>>>>>>> 94ae0017559ec3111deb5af277847d1f9422693b
}