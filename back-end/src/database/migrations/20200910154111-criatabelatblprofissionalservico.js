'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("tblProfissionalServico", {
      servicoProfissionalId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      profissionalDaSaudeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        refences: {
          model: "tblProfissionalDaSaude",
          key: "profissionalDaSaudeId",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      servicoId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        refences: {
          model: "tblServico",
          key: "servicoId",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("tblProfissionalServico");
  }
};
