const CronJob = require("cron").CronJob;
const Notificacao = require("../models/Notificacao");
const mensagem = "Sua consulta esta próxima!!";
const Paciente = require("../models/Paciente");

module.exports = {
    async inserir(data, ConsultaId, PacienteId) {

        const job = new CronJob(
            data,
            async () => {
                const notificacao = await Notificacao.create({
                    data,
                    ConsultaId,
                    mensagem,
                    PacienteId
                });
            },
            true,
            "America/Sao_Paulo"
        );
    },

    async listarPorPaciente(req, res) {
        const { idPaciente, tipoPerfil } = req;

        if (tipoPerfil !== "paciente") {
            return res.status(401).send({ error: "Você não possui autorização para esta ação!!" });
        }

        try {

            let paciente = await Paciente.findByPk(idPaciente);

            if (!paciente) {
                return res.status(400).send({ error: "Paciente não cadastrado" });
            }

            let notificacoes = await Notificacao.findAll({
                raw: true,
                where: { PacienteId: idPaciente },
                attributes: ["id", "mensagem", "data"]
            });

            const retorno = [];

            for (let index = 0; index < notificacoes.length; index++) {

                const dataKey = notificacoes[index]["data"];
                let registrado = false;

                if (retorno.length > 0) {
                    for (let i = 0; i < retorno.length; i++) {
                        if (retorno[i][[dataKey]]) {
                            registrado = true
                        }
                    }
                }

                if (!registrado) {

                    const notificaData = notificacoes.filter(e => dataKey === e.data);

                    retorno.push({ [dataKey]: notificaData });
                }

            }

            res.status(200).send(retorno);

        } catch (error) {
            console.log(error);
            return res.status(500).send({ error: "Não foi possivel listar os pacientes, por favor tente novamente" });
        }
    },

    async numeroNotificacao(req, res) {
        const { idPaciente, tipoPerfil } = req;

        if (tipoPerfil !== "paciente") {
            return res.status(401).send({ error: "Você não possui autorização para esta ação!!" });
        }

        try {
            let paciente = await Paciente.findByPk(idPaciente);

            if (!paciente) {
                return res.status(400).send({ error: "Paciente não cadastrado" });
            }

            const numero = await Notificacao.count({ where: { pacienteId: idPaciente } });

            res.status(200).send({ numero });

        } catch (error) {
            console.log(error);
            return res.status(500).send({ error: "Não foi possivel listar os pacientes, por favor tente novamente" });
        }
    }

};
