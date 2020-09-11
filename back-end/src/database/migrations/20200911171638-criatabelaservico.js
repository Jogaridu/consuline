'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.createTable("tblServico", {
      idServico: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      nome: {
        type: Sequelize.STRING,
        allownull: false
      },

      descricao: {
        type: Sequelize.STRING,
        allownull: false
      },

      imagem: {
        type: Sequelize.STRING,
        allownull: false
      }

    })
  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.dropTable("tblServico");

  }
};
