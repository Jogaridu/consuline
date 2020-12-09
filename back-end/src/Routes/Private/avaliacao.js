const express = require("express");

const routes = express.Router();

// const autorizacaoMidProfissional = require("../../middlewares/autorizacaoDoProfissional");

// const autorizacaoMidPaciente = require("../../middlewares/autorizacaoDoPaciente");

// const autorizacaoMidCentral = require("../../middlewares/autorizacao");

const controller = require("../../controllers/avaliacao");

// routes.use(autorizacaoMidPaciente);

routes.post("/medico/avaliacao", controller.criar);

// routes.use(autorizacaoMidCentral);

routes.delete("/medico/avaliacao/:id", controller.deletar);

// routes.use(autorizacaoMidProfissional);

routes.get("/medico/avaliacao", controller.listarPorMedico);

module.exports = routes;
