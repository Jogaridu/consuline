const express = require("express");

const routes = express.Router();

const controller = require("../../controllers/consulta");

routes.post("/consulta", controller.criar);

routes.delete("/consulta/:id", controller.apagar);

routes.put("/consulta/:id", controller.atualizar);

routes.get("/consulta/:id", controller.listarId);

routes.get("/consultas-medico/:id", controller.listarIdMedico);


module.exports = routes;