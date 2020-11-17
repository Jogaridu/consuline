'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.createTable("tblCobertura", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },

      nome: {
        type: Sequelize.STRING,
        allownull: false
      },

      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,

      },

    });

  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.dropTable("tblCobertura");

  }
};
