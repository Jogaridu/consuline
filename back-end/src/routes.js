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
const telefoneprofissionalDaSaudeController = require("./controllers/telefoneProfissionalDaSaude");

routes.post("/login", sessaoControllers.store);

routes.post("/estado", estadoControllers.store);

routes.post("/cidade", cidadeControllers.store);

routes.post("/profissional", profissionalDaSaudeController.store);
routes.get("/profissional", profissionalDaSaudeController.index);
routes.delete("/profissional", profissionalDaSaudeController.delete);
routes.put("/profissional", profissionalDaSaudeController.update);

routes.get(
  "/enedereco-profissional",
  enederecosProfissionalDaSadeController.index
);

routes.post(
  "/telefoneprofissionalDaSaude",
  telefoneprofissionalDaSaudeController.store
);

module.exports = routes;
