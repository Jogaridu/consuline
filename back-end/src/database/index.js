const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const Estado = require("../models/Estado");
const Cidade = require("../models/Cidade");
const EnderecoProfissionalDaSaude = require("../models/EnderecoProfissionalDaSaude");
const ProfissionalDaSaude = require("../models/ProfissionalDaSaude");

const conexao = new Sequelize(dbConfig);

Estado.init(conexao);
Cidade.init(conexao);
EnderecoProfissionalDaSaude.init(conexao);
ProfissionalDaSaude.init(conexao);

Estado.associate(conexao.models);
Cidade.associate(conexao.models);
EnderecoProfissionalDaSaude.associate(conexao.models);
ProfissionalDaSaude.associate(conexao.models);
