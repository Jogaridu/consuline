const Central = require("../models/Central");

module.exports = {
    async atualizar(req, res) {

        const { id } = req.params;

        const {
            nome,
            email,
            telefones
        } = req.body;

        try {
            const central = await Central.findByPk(id);

            const centralAtualizado = await central.update({ nome, email });

            if (centralAtualizado) {

                const telefonesBanco = await central.getTelefoneCentrals();

                telefonesBanco.forEach(telefone => telefone.destroy());

                telefones.forEach(numero => central.createTelefoneCentral({ numero: numero }));

                return res.status(200).send();

            }

            return res.status(400).send({ erro: "Não foi possível atualizar os dados. Verifique os campos" })


        } catch (error) {
            console.error(error);
            res.status(404).send({ erro: "Falha ao atualizar a central" });

        }
    }
}