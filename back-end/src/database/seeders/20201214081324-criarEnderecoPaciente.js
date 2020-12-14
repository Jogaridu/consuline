'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkInsert('tblenderecopaciente', [
      {
        cep: "06404321",
        rua: "Rua Rio Quente",
        bairro: "Bethaville II",
        numero: "11",
        complemento: "",
        estado: "SP",
        cidade: "Barueri",
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ], {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('tblenderecopaciente', null, {});
  }
};
