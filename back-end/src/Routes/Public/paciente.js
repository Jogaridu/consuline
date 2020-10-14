const express = require("express");

const routes = express.Router();

const controller = require("../../controllers/paciente");

const Multer = require("../../fixtures/manipulacaoForm");
const enviarImagem = require("../../services/firebase");

routes.post(
  "/paciente",
  Multer.single("foto"),
  enviarImagem,
  controller.cadastrar
);
routes.post("/paciente/:id/validacao-sms", controller.verificarSms);
routes.get("/paciente/:id", controller.buscarPorId);
routes.get("/paciente", controller.listar);
routes.delete("/paciente/:id", controller.deletar);
routes.post("/paciente/sessao", controller.autenticar);
routes.put("/paciente/:id", Multer.single("foto"), controller.atualizar);


module.exports = routes;
