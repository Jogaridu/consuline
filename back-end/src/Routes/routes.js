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

<<<<<<< HEAD
router.use(rotasPublicaSessao);
=======
router.use(rotasAvaliacao);
router.use(rotasFiliais);
router.use(rotasServicos);
router.use(rotasPublicaSessao);

router.use(rotasPublicaPaciente);
router.use(rotasPublicaProfissional);
>>>>>>> 974ba8432fe2673f70bb94420af129954527b120
router.use(rotasConsulta);
router.use(rotaAtendimento);

router.use(rotasDadosHome);

router.use(rotasAvaliacao);


router.use(rotasNotificacao);


module.exports = router;
