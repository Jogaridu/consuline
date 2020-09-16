const { Op } = require("sequelize");
const Servico = require("../models/Servico");

module.exports = {
    async store(req, res) {

        const { nome, descricao, imagem } = req.body;

        try {

            let servicoCriado = await Servico.findOne({
                where: {
                    [Op.or]: [
                        { nome: nome },
                    ]
                }
            });

            if (servicoCriado) {
                return res.status(400).send("Esse serviço já está cadastrado");

            }

            servicoCriado = await Servico.create({
                nome,
                descricao,
                imagem
            });

            res.status(200).send(servicoCriado);

        } catch (error) {
            console.log(error);
            return res.status(404).send({ erro: "Falha na criação do serviço" });

        }

    }
}