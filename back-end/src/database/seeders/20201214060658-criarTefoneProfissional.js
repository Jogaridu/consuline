'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('tbltelefoneprofissional', [
      {
        numero: "11963688640",
        ProfissionalDaSaudeId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        numero: "11962797184",
        ProfissionalDaSaudeId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('tbltelefoneprofissional', null, {});

  }
};
