const express = require("express");

const router = express.Router();

// Rotas publicas
const rotasPublicaPaciente = require("./Public/paciente");
const rotasPublicaSessao = require("./Public/sessao");

// Rotas privadas
const rotasServicos = require("./Private/servicos");
const rotasFiliais = require("./Private/filiais");
const rotaCentral = require("./Private/central");


router.use(rotasPublicaPaciente);
router.use(rotasPublicaSessao);

router.use(rotasServicos);
router.use(rotasFiliais);
router.use(rotaCentral);

module.exports = router;