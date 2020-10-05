const express = require("express");
const rotas = require("./routes");
const cors = require("cors");
require("./database");

const rotasServicos = require("./Routes/Private/servicos");
const rotasFiliais = require("./Routes/Private/filiais");

const app = express();

app.use(express.json());

app.use(cors());

app.use(rotas)

module.exports = app;
