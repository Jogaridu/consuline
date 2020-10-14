const express = require("express");

const routes = express.Router();

const controllerServico = require("../../controllers/servicos");

<<<<<<< HEAD
routes.post("/servicos", controllerServico.cadastrar);
=======
const Multer = require("../../fixtures/manipulacaoForm");
const enviarImagem = require("../../services/firebase");

// routes.post("/servicos", Multer("foto"), enviarImagem, controllerServico.cadastrar);
>>>>>>> c4cf7c49dfe3af7538d5e38a9fcc10f292694ca1

routes.get("/servico/:id", controllerServico.buscarPorId);

routes.get("/servicos", controllerServico.listar);

routes.delete("/servico/:id", controllerServico.deletar);

routes.put("/servico/:id", controllerServico.atualizar);

module.exports = routes;