const CronJob = require("cron").CronJob;

// const data = new Date("2020-12-01 10:13:00");

const inserirNotificacao = (data) => {
  const job = new CronJob(
    data,
    () => {
      console.log("Rotina funcionando");
    },
    true,
    "America/Sao_Paulo"
  );
};

module.exports = inserirNotificacao;
