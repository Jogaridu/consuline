const express = require("express");

const routes = express.Router();

const controller = require("../../controllers/consulta");

const autorizacaoMid = require("../../middlewares/autorizacao");

const autorizacaoMidPaciente = require("../../middlewares/autorizacaoDoPaciente");

const autorizacaoMidProfissional = require("../../middlewares/autorizacaoDoProfissional");

routes.use(autorizacaoMid);

routes.post("/consulta", controller.criar);

routes.delete("/consulta/:id", controller.apagar);

routes.get("/consulta/:id", controller.listarId);

routes.use(autorizacaoMidPaciente);

routes.put("/consulta/:id", controller.atualizar);

routes.get("/teste", controller.listarIdPaciente);
 
routes.use(autorizacaoMidProfissional);

routes.get("/medico/consultas", controller.listarIdMedico);

<<<<<<< HEAD
routes.get(
  "/medico/:idMedico/consultas/proximas",
  controller.listarIdMedicoData
);
=======
routes.get("/medico/consultas/dias", controller.listarDia);
>>>>>>> bee8d2cdfbda6ce7d203e160a41e6bdc6c9f5a9b

routes.get("/medico/consultas/proximas", controller.listarIdMedicoData);

routes.post(
  "/paciente/:idPaciente/consulta/:idConsulta/iniciar",
  controller.iniciarConsulta
);

routes.post("/consulta/atendda", controller.consultaAtendida);

module.exports = routes;
