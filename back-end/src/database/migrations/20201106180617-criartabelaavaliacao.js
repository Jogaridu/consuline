"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("tblnotificacao", {
     
      
     
      },
    });
  

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("tblnotificacao");
  },
};
