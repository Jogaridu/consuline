const express = require("express");

const routes = express.Router();

const controller = require("../../controllers/paciente");

const autorizacaoMid = require("../../middlewares/autorizacaoDoPaciente");
const autorizacaoMidProfissional = require("../../middlewares/autorizacaoDoProfissional");

const Multer = require("../../fixtures/manipulacaoForm");

const enviarArquivos = require("../../services/firebase");

routes.post("/paciente", controller.cadastrar);

routes.post(
  "/paciente/:id/imagem",
  Multer.single("foto"),
  enviarArquivos,
  controller.cadastrarImagem
);

routes.post("/paciente/sessao", controller.autenticar);

routes.use(autorizacaoMid,);

routes.post("/paciente/:id/validacao-sms", autorizacaoMid, controller.verificarSms);

routes.post("/paciente/verificar-senha", autorizacaoMid, controller.verificarSenha);

routes.post(
  "/paciente/imagem",
  autorizacaoMid,
  Multer.single("foto"),
  enviarArquivos,
  controller.cadastrarImagem
);

routes.get("/paciente/:id", controller.buscarPorId);

routes.get("/paciente", controller.listar);

routes.delete("/paciente", controller.deletar);

routes.put("/paciente", autorizacaoMid, Multer.single("foto"), controller.atualizar);

routes.post(
  "/paciente/exame/:idPaciente",
  autorizacaoMidProfissional,
  Multer.single("arquivo"),
  enviarArquivos,
  controller.enviarExame
);

module.exports = routes;
