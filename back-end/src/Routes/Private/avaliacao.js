const express = require("express");

const routes = express.Router();

const controller = require("../../controllers/avaliacao");

routes.post("/medico/avaliacao", controller.criar);

routes.delete("/medico/avaliacao/:id", controller.deletar);

routes.get("/medico/avaliacao/:idMedico", controller.listarPorMedico);

module.exports = routes;

