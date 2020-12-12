const express = require("express");

const routes = express.Router();

const controller = require("../../controllers/dadosHomeCentral");

const autorizacaoMid = require("../../middlewares/autorizacao");

routes.get("/dados-home", autorizacaoMid, controller.dadosHomeCentral);

module.exports = routes;