const Consulta = require("../models/Consulta");
const Paciente = require("../models/Paciente");
const Profissional = require("../models/ProfissionalDaSaude");
const Filial = require("../models/Filial");
const Servico = require("../models/Servico");
const Atendimento = require("../models/Atendimento");
const { Op } = require("sequelize");


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
            AtendimentoId,
            descricao
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

            let consultaCriada = await Consulta.findOne({
                where: {
                    [Op.and]: [
                        { data: data },
                        { horario: horario },
                        { ProfissionalDaSaudeId: ProfissionalDaSaudeId }
                    ]
                }
            })

            if (consultaCriada) {
                return res.status(400).send({ error: "Já existe uma consulta com esse horario,data e profissional, por favor tente novamente" });
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
                AtendimentoId,
                descricao
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
        const { idMedico } = req.params;

        try {
            const consultas = await Consulta.findAll(

                {
                    where: { ProfissionalDaSaudeId: idMedico },
                    order: [["data", "DESC"]],

                }
                , {
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
                            "dataNascimento",
                            "crm"
                        ]
                    },



                    ],
                },
            );

            if (!consultas) {
                return res.status(400).send({ error: "Profissional não encontrado(a)" });
            }

            res.status(200).send(consultas);
        } catch (error) {
            console.log(error);
            return res.status(500).send({ error: "Não foi possivel listar consultas, por favor tente novamente" });
        }
    },

    async listarIdMedicoData(req, res) {
        const { idMedico } = req.params;

        const { data } = req.query;

        try {
            const consultas = await Consulta.findAll(
                {
                    where: {
                        [Op.and]: [
                            { ProfissionalDaSaudeId: idMedico },
                            { data: data }
                        ]
                    },
                    order: [["horario", "ASC"]],
                },
                {
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
            );

            if (!consultas) {
                return res.status(400).send({ error: "Profissional não encontrado(a)" });
            }

            res.status(200).send(consultas);
        } catch (error) {
            console.log(error);
            return res.status(500).send({ error: "Não foi possivel listar consultas, por favor tente novamente" });
        }
    },

    async listarDia(req, res) {
        const { idMedico } = req.params;

        try {
            const consultas = await Consulta.findAll(

                {
                    where: { ProfissionalDaSaudeId: idMedico },
                    order: [["horario", "ASC"]],

                }
                , {
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
                            "dataNascimento",
                            "crm"
                        ]
                    },



                    ],
                },
            );

            if (!consultas) {
                return res.status(400).send({ error: "Profissional não encontrado(a)" });
            }

            let arrayConsultas = new Array();

            for (let i = 0; i < consultas.length; i++) {
                arrayConsultas[i] = { data: consultas[i].data, horario: consultas[i].horario };
            }

            res.status(200).send(arrayConsultas);
        } catch (error) {
            console.log(error);
            return res.status(500).send({ error: "Não foi possivel listar consultas, por favor tente novamente" });
        }
    },


    async listarIdPaciente(req, res) {
        const { idPaciente } = req.params;

        try {
            const consultas = await Consulta.findAll(

                {
                    where: { PacienteId: idPaciente },
                    order: [["data", "DESC"]],

                }
                , {
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
                            "dataNascimento",
                            "crm"
                        ]
                    },
                    ],
                },
            );

            if (!consultas) {
                return res.status(400).send({ error: "Paciente não encontrado(a)" });
            }

            res.status(200).send(consultas);
        } catch (error) {
            console.log(error);
            return res.status(500).send({ error: "Não foi possivel listar consultas, por favor tente novamente" });
        }
    },
}