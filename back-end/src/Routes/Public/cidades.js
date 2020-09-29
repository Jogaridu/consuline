const express = require("express");

const routes = express.Router();

const controller = require("../../controllers/cidades");

routes.get("/cidades", controller.listar);

module.exports = routes;