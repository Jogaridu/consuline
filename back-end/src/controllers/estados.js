const Estado = require("../models/Estado");

module.exports = {

    async listar(req, res) {
        try {
            const estadosBuscado = await Estado.findAll();

            if (estadosBuscado) {
                res.status(200).send(estadosBuscado);
            }

        } catch (error) {
            res.status(404).send({ erro: "Estados não encontrados, falha na rota" })
        }
    }


}