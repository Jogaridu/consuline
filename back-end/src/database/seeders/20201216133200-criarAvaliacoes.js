"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("tblavaliacao", [
      {
        PacienteId: 1,
        ProfissionalDaSaudeId: 1,
        estrelas: 4,
        comentario: "Muito bom!",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("tblavaliacao", null, {});
  },
};
