const EnderecoFilial = require("../models/EnderecoFilial");
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
const { atualizar } = require("./filiais");
=======
>>>>>>> c4cf7c49dfe3af7538d5e38a9fcc10f292694ca1
=======
>>>>>>> 94ae0017559ec3111deb5af277847d1f9422693b
>>>>>>> afc168bcd886ec11bf0b5938289e559842930d20

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
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> c4cf7c49dfe3af7538d5e38a9fcc10f292694ca1
=======


>>>>>>> 94ae0017559ec3111deb5af277847d1f9422693b
>>>>>>> afc168bcd886ec11bf0b5938289e559842930d20
}