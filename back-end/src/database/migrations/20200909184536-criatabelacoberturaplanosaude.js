'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable("tblCoberturaPlanoSaude", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },

      idCobertura: {
        type: Sequelize.INTEGER,
        allownull: false,
        references: {
          model: "tblCobertura",
          key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },

      idPlanoDeSaude: {
        type: Sequelize.INTEGER,
        allownull: false,
        references: {
          model: "tblPlanoDeSaude",
          key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },

      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,

      },

    })
  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.dropTable("tblCoberturaPlanoSaude");

  }
};
