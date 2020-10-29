const express = require("express");

const routes = express.Router();

const controllerServico = require("../../controllers/servicos");

const Multer = require("../../fixtures/manipulacaoForm");
const enviarImagem = require("../../services/firebase");

// routes.post("/servico", Multer("foto"), enviarImagem, controllerServico.cadastrar);
routes.post("/servico",
    Multer.single("imagem"),
    enviarImagem,
    controllerServico.cadastrar);

routes.get("/servico/:id", controllerServico.buscarPorId);

routes.get("/servicos", controllerServico.listar);

routes.delete("/servico/:id", controllerServico.deletar);

routes.put("/servico/:id",
    Multer.single("imagem"),
    enviarImagem,
    controllerServico.atualizar);

routes.get("/servico/:id/filiais", controllerServico.pegarFiliais);

module.exports = routes;