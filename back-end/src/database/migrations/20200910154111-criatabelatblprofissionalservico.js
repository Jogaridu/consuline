'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("tblProfissionalServico", {
      idProfissionalServico: {
        type: Sequelize.INTERGER,
        primaryKey: true,
        autoIncrement: true,
      },
      createdProfissionalDaSaudeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        refences: {
          model: "tblProfissionalDaSaude",
          key: "idProfissionalDaSaude",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      createdServicoId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        refences: {
          model: "tblServico",
          key: "idServico",
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
