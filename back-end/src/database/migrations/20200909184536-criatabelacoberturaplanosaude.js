'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable("tblCoberturaPlanoSaude", {
      coberturaPlanoDeSaudeId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },

      coberturaId: {
        type: Sequelize.INTEGER,
        allownull: false,
        references: {
          model: "tblCobertura",
          key: "idCobertura"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },

      planoDeSaudeId: {
        type: Sequelize.INTEGER,
        allownull: false,
        references: {
          model: "tblPlanoDeSaude",
          key: "planoDeSaudeId"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,

      },

    })
  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.dropTable("tblCoberturaPlanoSaude");

  }
};
