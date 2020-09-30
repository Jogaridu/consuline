const Cidade = require("../models/Cidade");

module.exports = {

    async listar(req, res) {
        try {
            const cidadesBuscado = await Cidade.findAll({ limit: 5 });

            if (cidadesBuscado) {
                res.status(200).send(cidadesBuscado);
            }

        } catch (error) {
            res.status(404).send({ erro: "Cidades não encontrados, falha na rota" })
        }
    }


}