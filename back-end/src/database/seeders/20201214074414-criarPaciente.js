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
        email: "ns5077900@gmail.com",
        rg: "385610082294",
        cpf: "123569104564",
        enderecoPacienteId: 1,
        verificado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: "Arnaldo Silveira",
        celular: "11974554713",
        login: "Arn",
        senha: bcrypt.hashSync("123", 10),
        dataNascimento: "2001-01-30",
        email: "teste2@gmail.com",
        rg: "315660282194",
        cpf: "623560111564",
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
