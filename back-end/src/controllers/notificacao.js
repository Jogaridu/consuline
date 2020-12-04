const CronJob = require("cron").CronJob;

module.exports = {
  async inserir(data) {
    const job = new CronJob(
      data,
      () => {
        console.log("Rotina funcionando");
      },
      true,
      "America/Sao_Paulo"
    );
  },
};
