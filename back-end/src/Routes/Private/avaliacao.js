const express = require("express");

const routes = express.Router();

const autorizacaoMidProfissional = require("../../middlewares/autorizacaoDoProfissional");

const autorizacaoMidPaciente = require("../../middlewares/autorizacaoDoPaciente");

const autorizacaoMidCentral = require("../../middlewares/autorizacao");

const controller = require("../../controllers/avaliacao");

routes.post("/medico/avaliacao", autorizacaoMidPaciente, controller.criar);

routes.delete("/medico/avaliacao/:id", controller.deletar);

routes.get("/medico/avaliacao", autorizacaoMidProfissional, controller.listarPorMedico);

module.exports = routes;
