// const autorizacao = require("../../middlewares/autorizacaoDoPaciente");

const express = require("express");

const routes = express.Router();

const controller = require("../../controllers/consulta");

const autorizacaoMid = require("../../middlewares/autorizacao");

const autorizacaoMidPaciente = require("../../middlewares/autorizacaoDoPaciente");

const autorizacaoMidProfissional = require("../../middlewares/autorizacaoDoProfissional");

// routes.use(autorizacaoMid);

routes.post("/consulta", controller.criar);

routes.delete("/consulta/:id", controller.apagar);

routes.get("/consulta/:id", controller.listarId);

routes.use(autorizacaoMidPaciente);

routes.put("/consulta/:id", controller.atualizar);

routes.get("/teste", controller.listarIdPaciente);

routes.use(autorizacaoMidProfissional);

routes.get("/medico/consultas", controller.listarIdMedico);

routes.get("/paciente/:idPaciente/consultas", /*autorizacao,*/ controller.listarIdPaciente);
routes.get("/medico/consultas/dias", controller.listarDia);

routes.get("/medico/consultas/proximas", controller.listarIdMedicoData);

routes.post(
  "/paciente/:idPaciente/consulta/:idConsulta/iniciar",
  controller.iniciarConsulta
);
 
routes.post("/consulta/:idConsulta/atendida", controller.consultaAtendida);

routes.get("/medico/consultas/pendentes",controller.listarIdMedicoPendente);

module.exports = routes;
