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
    }
}