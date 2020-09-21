const express = require("express");

const routes = express.Router();

const multer = require("multer");

const Multer = multer({
  storage: multer.memoryStorage(),
  limits: 1024 * 1024,
});

const sessaoControllers = require("./controllers/sessao");
const estadoControllers = require("./controllers/estado");
const cidadeControllers = require("./controllers/cidade");
const enederecosProfissionalDaSadeController = require("./controllers/enderecoProfissionalDaSaude");
const profissionalDaSaudeController = require("./controllers/profissionalDaSaude");
const telefoneProfissionalDaSaudeController = require("./controllers/telefoneProfissionalDaSaude");

routes.post("/login", sessaoControllers.store);

routes.post("/estado", estadoControllers.store);

routes.post("/cidade", cidadeControllers.store);

routes.post("/profissional", profissionalDaSaudeController.store);
routes.get("/profissional", profissionalDaSaudeController.index);
routes.delete("/profissional/:id", profissionalDaSaudeController.delete);
routes.put("/profissional", profissionalDaSaudeController.update);
routes.get("/profissional/:id", profissionalDaSaudeController.buscarId);

routes.get(
  "/enedereco-profissional",
  enederecosProfissionalDaSadeController.index
);

routes.get(
  "/telefone-profissional/:idProfissional",
  telefoneProfissionalDaSaudeController.index
);

routes.delete(
  "/telefone-profissional/:id",
  telefoneProfissionalDaSaudeController.deleteId
);

routes.delete(
  "/telefone-profissional-all/:id",
  telefoneProfissionalDaSaudeController.deleteAll
);
routes.put(
  "/telefone-profissional/:id",
  telefoneProfissionalDaSaudeController.update
);

module.exports = routes;
