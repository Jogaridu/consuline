"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("tblavaliacao", [
      {
        estrelas: 5,
        comentario: "Muito bom",
        consultaId: 3,
        ProfissionalDaSaudeId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("tblavaliacao", null, {});
  },
};
