'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable("tblCoberturaPlanoSaude", {
      idCoberturaPlanoSaude: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },

      idCobertura: {
        type: Sequelize.INTEGER,
        allownull: false,
        references: {
          model: "tblCobertura",
          key: "idCobertura"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },

      idPlanoDeSaude: {
        type: Sequelize.INTEGER,
        allownull: false,
        references: {
          model: "tblPlanoDeSaude",
          key: "idPlanoDeSaude"
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
