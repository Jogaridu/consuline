'use strict';
const bcript = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('tblCentral', [{
      "id": 1,
      "nome": "Central ADM",
      "email": "centralConsuline@hotmail.com",
      "login": "admin",
      "senha": `${bcript.hashSync("admin", 10)}`,
      createdAt: new Date(),
      updatedAt: new Date()
    }]
    )

  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('tblCentral', null, {});

  }
};
