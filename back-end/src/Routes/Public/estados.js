const express = require("express");

const routes = express.Router();

const controller = require("../../controllers/estados");

routes.get("/estados", controller.listar);

module.exports = routes;