const CronJob = require("cron").CronJob;
const Notificacao = require("../models/Notificacao");

module.exports = {
  async inserir(data, ConsultaId) {

    const job = new CronJob(
      data,
      async () => {
        const notificacao = await Notificacao.create({
          data,
          ConsultaId
        });
      },
      true,
      "America/Sao_Paulo"
    );
  },
};
