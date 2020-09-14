const express = require("express");

const routes = express.Router();

const multer = require("multer");

const Multer = multer({
  storage: multer.memoryStorage(),
  limits: 1024 * 1024,
});

const estadoControllers = require("./controllers/estado");

routes.post("/estado", estadoControllers.store);

module.exports = routes;
