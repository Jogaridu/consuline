const Avaliacao = require("../models/Avaliacao");
const Paciente = require("../models/Paciente");
const Profissional = require("../models/ProfissionalDaSaude");

module.exports = {
    async criar(req, res) {
        const {
            estrelas,
            comentario,
            PacienteId,
            ProfissionalDaSaudeId
        } = req.body;

        try {

            const paciente = await Paciente.findByPk(PacienteId);

            if (!paciente) {
                return res.status(400).send({ error: "Paciente não encontrado(a)" })
            }

            const profissional = await Profissional.findByPk(ProfissionalDaSaudeId);

            if (!profissional) {
                return res.status(400).send({ error: "Profissional não encontrado(a)" });
            }

            const avaliacao = await Avaliacao.create(
                {
                    estrelas,
                    comentario,
                    PacienteId,
                    ProfissionalDaSaudeId
                }
            );

            res.status(200).send(avaliacao);

        } catch (error) {
            console.log(error);
            return res.status(500).send({ error: "Não foi possivel fazer sua avaliação, por favor tente novamente" });
        }

    },

    async deletar(req, res) {
        const { id } = req.params;

        try {

            const avaliacao = await Avaliacao.findByPk(id);

            if (!avaliacao) {
                return res.status(400).send({ error: "Avaliação não encontrada" });
            }

            await avaliacao.destroy();

            res.status(200).send({ sucesso: "Avalição aagada com sucesso" });

        } catch (error) {
            return res.status(500).send({ error: "Não foi posivel excuir este comentario, por favor tente novamente" });
        }
    },

    async listarPorMedico(req, res) {
        const { idMedico } = req.params;

        try {

            const avaliacoes = await Avaliacao.findAll(
                {
                    where: { ProfissionalDaSaudeId: idMedico },
                    order: [["id", "DESC"]],
                },
                {
                    include: [
                        {
                            association: "Paciente",
                            attributes: [
                                "nome",
                                "foto"
                            ]
                        },
                        {
                            association: "ProfissionalDaSaude",
                            attributes: [
                                "nome",
                                "foto"
                            ]
                        },
                    ],

                },

            );

            if (!avaliacoes) {
                return res.status(400).send({ error: "Avalações não encontradas" });
            }


            res.status(200).send(avaliacoes);

        } catch (error) {
            return res.status(500).send({ error: "Não foi possivel listar as avaliações, por favor tente novamente" });
        }
    }
}