"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("tblCentral", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
      },

      login: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },

      senha: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      nome: {
        type: Sequelize.STRING,
        allowNull: false,
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
    return queryInterface.dropTable("tblCentral");
  },
};
