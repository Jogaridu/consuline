const express = require("express");
const cors = require("cors");
require("./database");

// Rotas privadas
const rotasServicos = require("./Routes/Private/servicos");
const rotasFiliais = require("./Routes/Private/filiais");

// Rotas publicas
const rotasPublicaPaciente = require("./Routes/Public/paciente");

const app = express();

app.use(express.json());

app.use(cors());

app.use(rotasServicos);
app.use(rotasFiliais);
app.use(rotasPublicaPaciente);

module.exports = app;
