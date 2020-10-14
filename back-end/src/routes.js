const express = require("express");

const routes = express.Router();

const multer = require("multer");

const Multer = multer({
  storage: multer.memoryStorage(),
  limits: 1024 * 1024,
});

const uploadImage = require("./services/firebase");

const sessaoControllers = require("./controllers/sessao");
const estadoControllers = require("./controllers/estado");
const cidadeControllers = require("./controllers/cidade");
const enderecosProfissionalDaSadeController = require("./controllers/enderecoProfissionalDaSaude");
const profissionalDaSaudeController = require("./controllers/profissionalDaSaude");
const telefoneProfissionalDaSaudeController = require("./controllers/telefoneProfissionalDaSaude");

routes.post("/login", sessaoControllers.cadastrar);

routes.post("/estado", estadoControllers.cadastrar);

routes.post("/cidade", cidadeControllers.cadastrar);

routes.post(
  "/profissional",
  Multer.single("foto"),
  uploadImage,
  profissionalDaSaudeController.cadastrar
);
routes.get("/profissional", profissionalDaSaudeController.listar);
routes.delete("/profissional/:id", profissionalDaSaudeController.apagar);
routes.put(
  "/profissional/:id",
  Multer.single("foto"),
  uploadImage,
  profissionalDaSaudeController.atualizar
);
routes.get("/profissional/:id", profissionalDaSaudeController.buscarId);

routes.get(
  "/endereco-profissional",
  enderecosProfissionalDaSadeController.listar
);

routes.delete(
  "/telefone-profissional/:id",
  telefoneProfissionalDaSaudeController.apagarId
);
routes.post(
  "/telefone-profissional/:idProfissionalDaSaude",
  telefoneProfissionalDaSaudeController.adicionar
);

module.exports = routes;
