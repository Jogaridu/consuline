const express = require("express");

const routes = express.Router();

const controllerServico = require("../../controllers/servicos");

const Multer = require("../../fixtures/manipulacaoForm");
const enviarArquivos = require("../../services/firebase");

const autorizacaoMid = require("../../middlewares/autorizacao");

routes.post("/servico",
    autorizacaoMid,
    Multer.single("imagem"),
    enviarArquivos,
    controllerServico.cadastrar);

routes.get("/servico/:id", autorizacaoMid, controllerServico.buscarPorId);

routes.get("/servicos", autorizacaoMid, controllerServico.listar);

routes.delete("/servico/:id", autorizacaoMid, controllerServico.deletar);

routes.put("/servico/:id",
    autorizacaoMid,
    Multer.single("imagem"),
    enviarArquivos,
    controllerServico.atualizar);

routes.get("/servico/:id/filiais", controllerServico.pegarFiliais);

routes.post("/servico/verificar-nome", autorizacaoMid, controllerServico.verificarNome);

module.exports = routes;