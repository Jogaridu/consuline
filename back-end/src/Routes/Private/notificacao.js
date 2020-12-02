const express = require("express");

const routes = express.Router();

const autorizacaoMid = require("../../middlewares/autorizacaoDoPaciente");

const controller = require("../../controllers/notificacao");

routes.use(autorizacaoMid);

routes.get("/notificacoes", controller.listarPorPaciente);

module.exports = routes;