const express = require("express");

const routes = express.Router();

const autorizacaoMid = require("../../middlewares/autorizacao");

const controller = require("../../controllers/filiais");

routes.post("/filial", autorizacaoMid, controller.cadastrar);

routes.get("/filial/:id", autorizacaoMid, controller.buscarPorId);

routes.get("/filiais", autorizacaoMid, controller.listar);

routes.delete("/filial/:id", autorizacaoMid, controller.deletar);

routes.put("/filial/:id", autorizacaoMid, controller.atualizar);

routes.post("/filial/verificar-cnpj", autorizacaoMid, controller.verificarCnpj);
routes.post("/filial/verificar-ie", autorizacaoMid, controller.verificarIe);
routes.post("/filial/verificar-nome-fantasia", autorizacaoMid, controller.verificarNomeFantasia);

module.exports = routes;
