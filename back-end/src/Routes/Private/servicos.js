const express = require("express");

const routes = express.Router();

const controllerServico = require("../../controllers/servicos");

const Multer = require("../../fixtures/manipulacaoForm");
const enviarArquivos = require("../../services/firebase");

const autorizacaoMid = require("../../middlewares/autorizacao");

// routes.use(autorizacaoMid);

routes.post("/servico",
    Multer.single("imagem"),
    enviarArquivos,
    controllerServico.cadastrar);

routes.get("/servico/:id", controllerServico.buscarPorId);

routes.get("/servicos", controllerServico.listar);

routes.delete("/servico/:id", controllerServico.deletar);

routes.put("/servico/:id",
    Multer.single("imagem"),
    enviarArquivos,
    controllerServico.atualizar);

routes.get("/servico/:id/filiais", controllerServico.pegarFiliais);

routes.post("/servico/verificar-nome", controllerServico.verificarNome);

module.exports = routes;