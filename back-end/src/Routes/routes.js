const express = require("express");

const router = express.Router();


// Rotas publicas
const rotasPublicaPaciente = require("./Public/paciente");
const rotasPublicaProfissional = require("./Public/profissionalDaSaude");
const rotasPublicaSessao = require("./Public/sessao");

// Rotas privadas
const rotasServicos = require("./Private/servicos");
const rotasFiliais = require("./Private/filiais");
const rotaCentral = require("./Private/central");
const rotaAtendimento = require("./Private/atendimento");
const rotasConsulta = require("./Private/consulta");
const rotasAvaliacao = require("./Private/avaliacao");



router.use(rotasPublicaPaciente);
router.use(rotasPublicaProfissional);
router.use(rotasPublicaSessao);

router.use(rotasServicos);
router.use(rotasFiliais);
router.use(rotaCentral);
router.use(rotaAtendimento);
router.use(rotasConsulta);
router.use(rotasAvaliacao);

module.exports = router;
