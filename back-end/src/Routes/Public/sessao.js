const express = require("express");

const routes = express.Router();

const controller = require("../../controllers/sessao");

routes.post("/login", controller.logar);

module.exports = routes;