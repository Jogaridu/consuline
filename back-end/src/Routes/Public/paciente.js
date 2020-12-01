const express = require("express");

const routes = express.Router();

const controller = require("../../controllers/paciente");

<<<<<<< HEAD
const autorizacaoMid = require("../../middlewares/autorizacaoDoPaciente");
const autorizacaoMidProfissional = require("../../middlewares/autorizacaoProfissional");
=======
// const autorizacaoMid = require("../../middlewares/autorizacaoDoPaciente");
>>>>>>> ba54426a1cd593bd07bb5b5d0d362a731ed7426a

const Multer = require("../../fixtures/manipulacaoForm");

const enviarArquivos = require("../../services/firebase");

routes.post("/paciente", controller.cadastrar);

routes.post("/paciente/:id/imagem", Multer.single("foto"), enviarArquivos, controller.cadastrarImagem);

routes.post("/paciente/sessao", controller.autenticar);

// routes.use(autorizacaoMid);

routes.post("/paciente/:id/validacao-sms", controller.verificarSms);

routes.post("/paciente/verificar-senha", controller.verificarSenha);

<<<<<<< HEAD
routes.post("/paciente/imagem", Multer.single("foto"), enviarArquivos, controller.cadastrarImagem);

=======
>>>>>>> ba54426a1cd593bd07bb5b5d0d362a731ed7426a
routes.get("/paciente/:id", controller.buscarPorId);

routes.get("/paciente", controller.listar);

routes.delete("/paciente", controller.deletar);

<<<<<<< HEAD
routes.put("/paciente", Multer.single("foto"), controller.atualizar); ~

    // routes.use(autorizacaoMidProfissional);
=======
routes.put("/paciente", Multer.single("foto"), controller.atualizar);
>>>>>>> ba54426a1cd593bd07bb5b5d0d362a731ed7426a

routes.post("/paciente/exame/:idPaciente", Multer.single("arquivo"), enviarArquivos, controller.enviarExame);


module.exports = routes;
