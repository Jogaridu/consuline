'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('tblfilialservico', [
      {
        filialId: 1,
        servicoId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        filialId: 1,
        servicoId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        filialId: 1,
        servicoId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        filialId: 2,
        servicoId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        filialId: 2,
        servicoId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        filialId: 2,
        servicoId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        filialId: 3,
        servicoId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        filialId: 3,
        servicoId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        filialId: 3,
        servicoId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        filialId: 4,
        servicoId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        filialId: 4,
        servicoId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        filialId: 4,
        servicoId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        filialId: 5,
        servicoId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        filialId: 5,
        servicoId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        filialId: 5,
        servicoId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('tblfilialservico', null, {});

  }
};
