const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

// ----- IMPORTS -----

// Paciente
const Paciente = require("../models/Paciente");
const EnderecoPaciente = require("../models/EnderecoPaciente");
const PlanoDeSaude = require("../models/PlanoDeSaude");
const Cobertura = require("../models/Cobertura");

// Profissional da saúde
const ProfissionalDaSaude = require("../models/ProfissionalDaSaude");
const EnderecoProfissionalDaSaude = require("../models/EnderecoProfissionalDaSaude");
<<<<<<< HEAD
const TelefoneProfissional = require("../models/TelefoneProfissional");
=======
const TelefoneProfissionalDaSaude = require("../models/TelefoneProfissional");
>>>>>>> c4cf7c49dfe3af7538d5e38a9fcc10f292694ca1

// Filial
const Filial = require("../models/Filial");
const EnderecoFilial = require("../models/EnderecoFilial");
const TelefoneFilial = require("../models/TelefoneFilial");

// Servicos
const Servico = require("../models/Servico");

// Central
const Central = require("../models/Central");
const TelefoneCentral = require("../models/TelefoneCentral");

const conexao = new Sequelize(dbConfig);

// ----- INICIALIZAÇÃO -----

//Paciente
Paciente.init(conexao);
EnderecoPaciente.init(conexao);
PlanoDeSaude.init(conexao);
Cobertura.init(conexao);

// Profissional da saúde
ProfissionalDaSaude.init(conexao);
EnderecoProfissionalDaSaude.init(conexao);
<<<<<<< HEAD
TelefoneProfissional.init(conexao);
=======
TelefoneProfissionalDaSaude.init(conexao);
>>>>>>> c4cf7c49dfe3af7538d5e38a9fcc10f292694ca1
// Filial
Filial.init(conexao);
EnderecoFilial.init(conexao);
TelefoneFilial.init(conexao);

// Servicos
Servico.init(conexao);

// Central
Central.init(conexao);
TelefoneCentral.init(conexao);

// ----- ASSOCIAÇÕES -----

// Paciente
Paciente.associate(conexao.models);
EnderecoPaciente.associate(conexao.models);
PlanoDeSaude.associate(conexao.models);
Cobertura.associate(conexao.models);

// Profissional da Saúde
ProfissionalDaSaude.associate(conexao.models);
EnderecoProfissionalDaSaude.associate(conexao.models);

// Filial
Filial.associate(conexao.models);
EnderecoFilial.associate(conexao.models);
TelefoneFilial.associate(conexao.models);

// Servicos
Servico.associate(conexao.models);

// Central
Central.associate(conexao.models);
TelefoneCentral.associate(conexao.models);
