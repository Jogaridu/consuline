const express = require("express");

const routes = express.Router();

const controller = require("../../controllers/central");

routes.put("/central/:id", controller.atualizar);

module.exports = routes;

