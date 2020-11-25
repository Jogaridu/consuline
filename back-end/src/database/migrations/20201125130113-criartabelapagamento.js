'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.createTable("tblpagamento",{
     id:{
       type:Sequelize.INTEGER,
       primaryKey: true,
       autoIncrement: true,
     },
     cod:{
       type:Sequelize.STRING,
       allowNull:false
     },
     data:{
      type:Sequelize.DATEONLY,
      allowNull:false
     },
     numero:{
      type:Sequelize.STRING,
      allowNull:false
     },
     nomeCompleto:{
      type:Sequelize.STRING,
      allowNull:false
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
   return queryInterface.dropTable("tblpagamento");
  }
};
