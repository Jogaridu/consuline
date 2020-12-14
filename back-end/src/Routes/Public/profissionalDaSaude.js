const express = require("express");

const routes = express.Router();

const controller = require("../../controllers/profissionalDaSaude");

const enviarArquivos = require("../../services/firebase");

const login = require("../../controllers/sessao");

const Multer = require("../../fixtures/manipulacaoForm");

const autorizacaoMid = require("../../middlewares/autorizacao");

routes.post("/profissional/login", login.logar);

routes.post(
  "/profissional",
  autorizacaoMid,
  Multer.single("foto"),
  enviarArquivos,
  controller.cadastrar
);

routes.get("/profissional", autorizacaoMid, controller.listar);

routes.get("/profissional/:id", autorizacaoMid, controller.buscarId);

routes.delete("/profissional/:id", autorizacaoMid, controller.apagar);

routes.get("/profissional/filial/:idFilial", autorizacaoMid, controller.listarPorFilial);

routes.get("/profissional/filial/:idFilial/servico/:idServico", autorizacaoMid, controller.listarPorFilialEServico);

routes.put("/profissional/:id", Multer.single("foto"), autorizacaoMid, controller.atualizar);

routes.post("/profissional/verificar-nome", controller.verificarNome);
routes.post("/profissional/verificar-crm", controller.verificarCrm);
routes.post("/profissional/verificar-login", controller.verificarLogin);
routes.post("/profissional/verificar-email", controller.verificarEmail);
routes.post("/profissional/verificar-cpf", controller.verificarCpf);

module.exports = routes;
