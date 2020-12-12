const express = require("express");

const routes = express.Router();

const controller = require("../../controllers/profissionalDaSaude");

const enviarArquivos = require("../../services/firebase");

const login = require("../../controllers/sessao");

const Multer = require("../../fixtures/manipulacaoForm");

const autorizacaoMid = require("../../middlewares/autorizacao");

routes.post("/profissional/login", login.logar);

routes.use(autorizacaoMid);

routes.post(
  "/profissional",
  Multer.single("foto"),
  enviarArquivos,
  controller.cadastrar
);

routes.get("/profissional", controller.listar);

routes.get("/profissional/:id", controller.buscarId);

routes.delete("/profissional/:id", controller.apagar);

routes.get("/profissional/filial/:idFilial", controller.listarPorFilial);

routes.get("/profissional/filial/:idFilial/servico/:idServico", controller.listarPorFilialEServico);

routes.put("/profissional/:id", Multer.single("foto"), controller.atualizar);

routes.post("/profissional/verificar-nome", controller.verificarNome);
routes.post("/profissional/verificar-crm", controller.verificarCrm);
routes.post("/profissional/verificar-login", controller.verificarLogin);
routes.post("/profissional/verificar-email", controller.verificarEmail);
routes.post("/profissional/verificar-cpf", controller.verificarCpf);

module.exports = routes;
