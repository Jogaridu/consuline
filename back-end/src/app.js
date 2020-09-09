const express = require("express");
require("./database");

const app = express();
app.use(express.json());

module.exports = app;
