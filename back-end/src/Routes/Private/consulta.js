const express = require("express");

const routes = express.Router();

const controller = require("../../controllers/consulta");

routes.post("/consulta", controller.criar);

routes.delete("/consulta/:id", controller.apagar);

routes.put("/consulta/:id", controller.atualizar);

routes.get("/consulta/:id", controller.listarId);

routes.get("/medico/:idMedico/consultas", controller.listarIdMedico);

routes.get("/medico/:idMedico/consultas/proximas", controller.listarIdMedicoData);



module.exports = routes;