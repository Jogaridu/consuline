const express = require("express");

const routes = express.Router();

const controllerServico = require("../../controllers/servicos");

const Multer = require("../../fixtures/manipulacaoForm");
const enviarImagem = require("../../services/firebase");

// routes.post("/servico", Multer("foto"), enviarImagem, controllerServico.cadastrar);
routes.post("/servico", controllerServico.cadastrar);

routes.get("/servico/:id", controllerServico.buscarPorId);

routes.get("/servicos", controllerServico.listar);

routes.delete("/servico/:id", controllerServico.deletar);

routes.put("/servico/:id", controllerServico.atualizar);

module.exports = routes;