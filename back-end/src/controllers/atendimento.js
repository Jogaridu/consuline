const Atendimento = require("../models/Atendimento");

module.exports = {
    async criar(req, res) {

        const { idCentral, tipoPerfil } = req;

        // if(tipoPerfil !== "admin"){
        //     return res.status(401).send({error: "Você não possui autorização para esta ação!!"});
        // }

        const { tipo } = req.body;

        try {
            const atendimento = await Atendimento.create({ tipo });

            res.status(201).send(atendimento);
        } catch (error) {
            console.log(error);
            return res.status(500).send({ error: "Não foi possivel cadastrar este atendimento" })
        }
    },

    async listar(req, res) {
        try {
            let atendimentos = await Atendimento.findAll({
                attributes: ["id", "tipo"]
            });

            return res.status(200).send(atendimentos);
        } catch (error) {
            return res.status(404).send({erro: "Erro ao listar os atendimentos no sistema"})
        }
    }
}