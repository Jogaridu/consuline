const express = require("express");

const routes = express.Router();

const controller = require("../../controllers/profissionalDaSaude");
const login = require("../../controllers/sessao");

const Multer = require("../../fixtures/manipulacaoForm");

routes.post("/profissional", Multer.single("foto"), controller.cadastrar);
routes.post("/profissional-login", login.logar);
routes.get("/profissional", controller.listar);
routes.get("/profissional/:id", controller.buscarId);
routes.delete("/profissional/:id", controller.apagar);
routes.put("/profissional/:id", Multer.single("foto"), controller.atualizar);

module.exports = routes;
