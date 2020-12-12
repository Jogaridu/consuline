const express = require("express");
const cors = require("cors");
const router = require("./Routes/routes");
// const email = require("../src/controllers/enviarEmail");



require("./database");

const app = express();

app.use(express.json());

app.use(cors());

app.use(router);

module.exports = app;
