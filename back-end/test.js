const CronJob = require("cron").CronJob;

const data = new Date("2020-12-01 14:57:00");
console.log(data);

const job = new CronJob(
  data,
  () => {
    console.log("Rotina funcionando");
  },
  true,
  "America/Sao_Paulo"
);
