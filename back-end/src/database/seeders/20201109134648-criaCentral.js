'use strict';
const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('tblCentral', [{
      email: 'central_consuline@email.com',
      login: "admin",
      senha: bcrypt.hashSync("admin", 10),
      nome: "Central Consuline",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('tblCentral', null, {});

  }
};
