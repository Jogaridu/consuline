const express = require("express");

const routes = express.Router();

const controllerServico = require("../../controllers/servicos");

routes.post("/servicos", controllerServico.cadastrar);

routes.get("/servico/:id", controllerServico.buscarPorId);

routes.get("/servicos", controllerServico.listar);

routes.delete("/servico/:id", controllerServico.deletar);

routes.put("/servico/:id", controllerServico.atualizar);

module.exports = routes;