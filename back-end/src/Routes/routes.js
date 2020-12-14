const express = require("express");

const router = express.Router();


// Rotas publicas
const rotasPublicaSessao = require("./Public/sessao");
const rotasPublicaPaciente = require("./Public/paciente");
const rotasPublicaProfissional = require("./Public/profissionalDaSaude");

// Rotas privadas
const rotasServicos = require("./Private/servicos");
const rotasFiliais = require("./Private/filiais");
const rotaAtendimento = require("./Private/atendimento");
const rotasConsulta = require("./Private/consulta");
const rotasAvaliacao = require("./Private/avaliacao");
const rotasNotificacao = require("./Private/notificacao");
const rotasDadosHome = require("./Private/dadosHome");


router.use(rotasAvaliacao);

router.use(rotasPublicaPaciente);
router.use(rotasPublicaProfissional);
router.use(rotasPublicaSessao);
router.use(rotasConsulta);
router.use(rotaAtendimento);

router.use(rotasDadosHome);

router.use(rotasFiliais);
router.use(rotasAvaliacao);
router.use(rotasPublicaSessao);

router.use(rotasServicos);
router.use(rotasNotificacao);


module.exports = router;
