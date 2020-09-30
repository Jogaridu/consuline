const express = require("express");

const router = express.Router();

// Rotas publicas
const rotasPublicaPaciente = require("./Public/paciente");
const rotasPublicaEstados = require("./Public/estados");
const rotasPublicaCidades = require("./Public/cidades");

// Rotas privadas
const rotasServicos = require("./Private/servicos");
const rotasFiliais = require("./Private/filiais");
const rotaCentral = require("./Private/central");


router.use(rotasPublicaPaciente);
router.use(rotasPublicaEstados);
router.use(rotasPublicaCidades);

router.use(rotasServicos);
router.use(rotasFiliais);
router.use(rotaCentral);

module.exports = router;