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
            ProfissionalId,
            FilialId,
            ServicoId,
            AtendimentoId
        } = req.body;

        try {
            const paciente = await Paciente.findByPk(PacienteId);

            if (!paciente) {
                return res.status(400).send({ error: "Paciente não encontrado(a)" });
            }

            const profissional = await Profissional.findByPk(ProfissionalId);

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
                ProfissionalId,
                FilialId,
                ServicoId,
                AtendimentoId
            });

            res.status(201).send(consulta);

        } catch (error) {
            console.log(error);
            return res.status(500).send({ error: "Erro ao agendar consulta, por favor tente novamente " });
        }

    }
}