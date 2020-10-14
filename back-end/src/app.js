const express = require("express");
const cors = require("cors");
const router = require("./Routes/routes");

require("./database");

const rotasServicos = require("./Routes/Private/servicos");
const rotasFiliais = require("./Routes/Private/filiais");

const app = express();

app.use(express.json());

app.use(cors());

app.use(router);

module.exports = app;
