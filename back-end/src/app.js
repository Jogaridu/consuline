const express = require("express");
const cors = require("cors");
require("./database");

const rotasServicos = require("./Routes/Private/servicos");
const rotasFiliais = require("./Routes/Private/filiais");

const app = express();

app.use(express.json());

app.use(cors());

app.use(rotasServicos);
app.use(rotasFiliais);

module.exports = app;
