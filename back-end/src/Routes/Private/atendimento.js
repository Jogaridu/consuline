const express = require("express");

const routes = express.Router();

const controller = require("../../controllers/atendimento");

routes.post("/atendimento", controller.criar);

module.exports = routes;