const Consulta = require("../models/Consulta");
const Paciente = require("../models/Paciente");
const Profissional = require("../models/ProfissionalDaSaude");
const Filial = require("../models/Filial");
const Servico = require("../models/Servico");
const Atendimento = require("../models/Atendimento");

module.exports = {
    async criar(req, res) {
        const {
            valor,
            desconto,
            data,
            horario,
            PacienteId,
            ProfissionalDaSaudeId,
            FilialId,
            ServicoId,
            AtendimentoId
        } = req.body;

        try {
            const paciente = await Paciente.findByPk(PacienteId);

            if (!paciente) {
                return res.status(400).send({ error: "Paciente não encontrado(a)" });
            }

            const profissional = await Profissional.findByPk(ProfissionalDaSaudeId);

            if (!profissional) {
                return res.status(400).send({ error: "Profissional não encontrado(a)" });
            }

            const filial = await Filial.findByPk(FilialId);

            if (!filial) {
                return res.status(400).send({ error: "Filial não cadastrada" });
            }

            const servico = await Servico.findByPk(ServicoId);

            if (!servico) {
                return res.status(400).send({ error: "Serviço não cadastrado" });
            }

            const atendimento = await Atendimento.findByPk(AtendimentoId);

            if (!atendimento) {
                return res.status(400).send({ error: "Atendimento não cadastrado" });
            }

            const consulta = await Consulta.create({
                valor,
                desconto,
                data,
                horario,
                PacienteId,
                ProfissionalDaSaudeId,
                FilialId,
                ServicoId,
                AtendimentoId
            });

            res.status(201).send(consulta);

        } catch (error) {
            console.log(error);
            return res.status(500).send({ error: "Erro ao agendar consulta, por favor tente novamente " });
        }

    },

    async apagar(req, res) {
        const { id } = req.params;

        try {
            const consulta = await Consulta.findByPk(id);

            if (!consulta) {
                return res.status(400).send({ error: "Consulta não cadastrada " });
            }

            await consulta.destroy();

            res.status(200).send({ sucesso: "Consulta deletada com sucesso" });
        } catch (error) {
            console.log(error);
            return res.status(500).send({ error: "Não foi possível deletar consulta, por favor tente novamente" });
        }
    },

    async atualizar(req, res) {
        const { id } = req.params;
        const { valor,
            desconto,
            data,
            horario,
            PacienteId,
            ProfissionalDaSaudeId,
            FilialId,
            ServicoId,
            AtendimentoId } = req.body;

        try {

            const consulta = await Consulta.findByPk(id);

            if (!consulta) {
                return res.status(400).send({ error: "Consulta não encontrada" });
            }

            const paciente = await Paciente.findByPk(PacienteId);

            if (!paciente) {
                return res.status(400).send({ error: "Paciente não encontrado(a)" });
            }

            const profissional = await Profissional.findByPk(ProfissionalDaSaudeId);

            if (!profissional) {
                return res.status(400).send({ error: "Profissional não encontrado(a)" });
            }

            const filial = await Filial.findByPk(FilialId);

            if (!filial) {
                return res.status(400).send({ error: "Filial não cadastrada" });
            }

            const servico = await Servico.findByPk(ServicoId);

            if (!servico) {
                return res.status(400).send({ error: "Serviço não cadastrado" });
            }

            const atendimento = await Atendimento.findByPk(AtendimentoId);

            if (!atendimento) {
                return res.status(400).send({ error: "Atendimento não cadastrado" });
            }


            await consulta.update({
                valor,
                desconto,
                data,
                horario,
                PacienteId,
                ProfissionalDaSaudeId,
                FilialId,
                ServicoId,
                AtendimentoId
            },
                {
                    where: { id: id }
                }
            );


            res.status(200).send({ sucesso: " Consulta editada com sucesso" });

        } catch (error) {
            return res.status(500).send({ error: "Não foi possivel editar essa consulta, por favor tente novamente" });
        }
    },

    async listarId(req, res) {
        const { id } = req.params;

        try {
            const consulta = await Consulta.findByPk(id, {
                include: [{
                    association: "Paciente",
                    attributes: [
                        "nome",
                        "dataNascimento",
                        "cpf"
                    ]
                },
                {
                    association: "Filial",
                    attributes: [
                        "nomeFantasia",
                        "razaoSocial"
                    ]
                },
                {
                    association: "Atendimento",
                    attributes: [
                        "tipo"
                    ]
                },
                {
                    association: "ProfissionalDaSaude",
                    attributes: [
                        "nome",
                        "avaliacao",
                        "dataNascimento",
                        "crm"
                    ]
                },



                ],
            });

            if (!consulta) {
                return res.status(400).send({ error: "Cosnulta não encontrada" });
            }

            res.status(200).send(consulta);

        } catch (error) {
            console.log(error);
            return res.status(500).send({ error: "Não foi possivel listar esta consulta, por favor tente novamente" });
        }


    },

    async listarIdMedico(req, res) {
        const { id } = req.params;

        try {
            const consultas = await Consulta.findAll({
                include: [{
                    association: "Paciente",
                    attributes: [
                        "nome",
                        "dataNascimento",
                        "cpf"
                    ]
                },
                {
                    association: "Filial",
                    attributes: [
                        "nomeFantasia",
                        "razaoSocial"
                    ]
                },
                {
                    association: "Atendimento",
                    attributes: [
                        "tipo"
                    ]
                },
                {
                    association: "ProfissionalDaSaude",
                    attributes: [
                        "nome",
                        "avaliacao",
                        "dataNascimento",
                        "crm"
                    ]
                },



                ],
            },
                {
                    where: { ProfissionalDaSaudeId: id }
                }
            );

            if (!consultas) {
                return res.status(400).send({ error: "Profissional não encontrado(a)" });
            }

         res.status(200).send(consultas);
        } catch (error) {
            console.log(error);
            return res.status(500).send({ error: "Não foi possivel listar consultas, por favor tente novamente" });
        }



    }
}