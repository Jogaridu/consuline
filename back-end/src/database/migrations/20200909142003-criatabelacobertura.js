'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.createTable("tblCobertura", {
      idCobertura: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },

      nome: {
        type: Sequelize.STRING,
        allownull: false
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,

      },

    });

  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.dropTable("tblCobertura");

  }
};
