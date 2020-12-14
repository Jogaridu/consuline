'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('tblenderecoprofissional', [
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
      {
        cep: "06080180",
        rua: "Avenida Juan Cabrerizo",
        bairro: "Cipava",
        numero: "123",
        complemento: "casa 50",
        estado: "SP",
        cidade: "Osasco",
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('tblenderecoprofissional', null, {});

  }
};

