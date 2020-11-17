const express = require("express");

const routes = express.Router();

const autorizacaoMid = require("../../middlewares/autorizacao");

const controller = require("../../controllers/filiais");

routes.use( autorizacaoMid );

routes.post("/filial", controller.cadastrar);

routes.get("/filial/:id", controller.buscarPorId);

routes.get("/filiais", controller.listar);

routes.delete("/filial/:id", controller.deletar);

routes.put("/filial/:id", controller.atualizar);

routes.post("/filial/verificar-cnpj", controller.verificarCnpj);
routes.post("/filial/verificar-ie", controller.verificarIe);
routes.post(
  "/filial/verificar-nome-fantasia",
  controller.verificarNomeFantasia
);

module.exports = routes;
