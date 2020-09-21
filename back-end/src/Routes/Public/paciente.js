const express = require("express");

const routes = express.Router();

const controller = require("../../controllers/paciente");

routes.post("/pacientes", controller.cadastrar);

module.exports = routes;