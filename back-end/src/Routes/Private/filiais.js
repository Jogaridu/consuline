const express = require("express");

const routes = express.Router();

const controller = require("../../controllers/filiais");

routes.post("/filiais", controller.cadastrar);

routes.get("/filial/:id", controller.buscarPorId);

routes.get("/filiais", controller.listar);

routes.delete("/filial/:id", controller.deletar);

routes.put("/filial/:id", controller.atualizar);

module.exports = routes;