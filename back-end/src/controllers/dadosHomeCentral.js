const Consulta = require("../models/Consulta");
const Filial = require("../models/Filial");
const Paciente = require("../models/Paciente");
const Profissional = require("../models/ProfissionalDaSaude");

module.exports = {
    async dadosHomeCentral(req, res) {
        const consultas = await Consulta.count();
        const filiais = await Filial.count();
        const pacientes = await Paciente.count();
        const profissionais = await Profissional.count();

        res.status(200).send({ consultas, filiais, pacientes, profissionais })
    }
}