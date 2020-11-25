const express = require("express");

const routes = express.Router();

const controller = require("../../controllers/paciente");

const autorizacaoMid = require("../../middlewares/autorizacaoDoPaciente");

const Multer = require("../../fixtures/manipulacaoForm");

const enviarArquivos = require("../../services/firebase");

routes.post("/paciente", controller.cadastrar);

routes.post("/paciente/sessao", controller.autenticar);

// routes.use(autorizacaoMid);

routes.post("/paciente/:id/validacao-sms", controller.verificarSms);

routes.post("/paciente/:id/verificar-senha", controller.verificarSenha);

routes.post("/paciente/:id/imagem", Multer.single("foto"), enviarArquivos, controller.cadastrarImagem);

routes.get("/paciente/:id", controller.buscarPorId);

routes.get("/paciente", controller.listar);

routes.delete("/paciente/:id", controller.deletar);

routes.put("/paciente/:id", Multer.single("foto"), controller.atualizar);

routes.post("/paciente/exame/:idPaciente", Multer.single("arquivo"), enviarArquivos, controller.enviarExame);


module.exports = routes;
