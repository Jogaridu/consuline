const express = require("express");
const cors = require("cors");
require("./database");

const rotasServicos = require("./Routes/Private/servicos");

const app = express();
app.use(express.json());

app.use(cors());

app.use(rotasServicos);
module.exports = app;
