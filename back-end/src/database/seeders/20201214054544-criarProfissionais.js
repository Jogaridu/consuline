'use strict';
const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('tblprofissionaldasaude', [
      {
        cpf: "12332112312",
        nome: "José Pedro Da Silva",
        crm: "1233211",
        login: "jose",
        senha: bcrypt.hashSync("jose", 10),
        foto: "foto",
        email: "jose_consuline@email.com",
        EnderecoProfissionalDaSaudeId: 1,
        FilialId: 1,
        ServicoId: 3,
        dataNascimento: "1975-01-01",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cpf: "32112332112",
        nome: "Antônio De Salles",
        crm: "1233222",
        login: "toni",
        senha: bcrypt.hashSync("toni", 10),
        foto: "foto",
        email: "toni_consuline@email.com",
        EnderecoProfissionalDaSaudeId: 2,
        FilialId: 2,
        ServicoId: 8,
        dataNascimento: "1990-01-01",
        createdAt: new Date(),
        updatedAt: new Date()
      },


    ], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('tblprofissionaldasaude', null, {});

  }
};
