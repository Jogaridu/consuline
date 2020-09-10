const express = require("express");
const cors = require("cors");
require("./database");

const app = express();
app.use(express.json());

app.use(cors());
module.exports = app;
