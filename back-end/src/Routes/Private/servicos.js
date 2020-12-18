const express = require("express");

const routes = express.Router();

const controllerServico = require("../../controllers/servicos");

<<<<<<< HEAD
const Multer = require("../../fixtures/manipulacaoForm");
const enviarArquivos = require("../../services/firebase");

const autorizacaoMid = require("../../middlewares/autorizacao");
=======
<<<<<<< HEAD
<<<<<<< HEAD
routes.post("/servicos", controllerServico.cadastrar);
=======
=======
>>>>>>> 94ae0017559ec3111deb5af277847d1f9422693b
const Multer = require("../../fixtures/manipulacaoForm");
const enviarArquivos = require("../../services/firebase");

<<<<<<< HEAD
// routes.post("/servicos", Multer("foto"), enviarImagem, controllerServico.cadastrar);
>>>>>>> c4cf7c49dfe3af7538d5e38a9fcc10f292694ca1
=======
const autorizacaoMid = require("../../middlewares/autorizacao");
>>>>>>> 94ae0017559ec3111deb5af277847d1f9422693b
>>>>>>> afc168bcd886ec11bf0b5938289e559842930d20

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