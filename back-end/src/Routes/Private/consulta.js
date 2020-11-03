const express = require("express");

const routes = express.Router();

const controller = require("../../controllers/consulta");

routes.post("/consulta", controller.criar);

module.exports = routes;