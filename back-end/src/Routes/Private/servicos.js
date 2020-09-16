const express = require("express");

const routes = express.Router();

const controllerServico = require("../../controllers/servicos");

routes.post("/servicos", controllerServico.store);

module.exports = routes;