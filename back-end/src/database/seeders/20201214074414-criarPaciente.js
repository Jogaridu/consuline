"use strict";
const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("tblpaciente", [
      {
        nome: "Nicolas Santos",
        celular: "11974554723",
        login: "Nick",
        senha: bcrypt.hashSync("123", 10),
        dataNascimento: "2001-01-30",
        email: "teste@gmail.com",
        rg: "3856g0n82m94",
        cpf: "12356n1gm564",
        enderecoPacienteId: 1,
        verificado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkDelete('tblpaciente', null, {});

  },
};
