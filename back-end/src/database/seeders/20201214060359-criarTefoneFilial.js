'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('tbltelefonefilial', [
      {
        numero: "11912341234",
        FilialId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        numero: "11932114567",
        FilialId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        numero: "11932113213",
        FilialId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        numero: "11932123567",
        FilialId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        numero: "11923344112",
        FilialId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('tbltelefonefilial', null, {});

  }
};
