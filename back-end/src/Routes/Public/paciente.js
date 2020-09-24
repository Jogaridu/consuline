const express = require("express");

const routes = express.Router();

const controller = require("../../controllers/paciente");

routes.post("/paciente", controller.cadastrar);
routes.post("/paciente/:id/validacao-sms", controller.verificarSms);

routes.delete("/paciente/:id", controller.deletar);

module.exports = routes;