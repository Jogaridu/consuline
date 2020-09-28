const express = require("express");

const routes = express.Router();

const multer = require("multer");

const Multer = multer({
  storage: multer.memoryStorage(),
  limits: 1024 * 1024,
});

const estadoControllers = require("./controllers/estado");
const cidadeControllers = require("./controllers/cidade");
const profissionalDaSaudeController = require("./controllers/profissionalDaSaude");
const telefoneprofissionalDaSaudeController = require("./controllers/telefoneProfissionalDaSaude");

routes.post("/profissionalDaSaude", profissionalDaSaudeController.store);

routes.post(
  "/telefoneprofissionalDaSaude",
  telefoneprofissionalDaSaudeController.store
);

module.exports = routes;
