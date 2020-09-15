"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("tblCidade", {
      cidadeId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      idEstado: {
        type: Sequelize.INTEGER,
        allowNull: false,
        refences: {
          model: "tblEstado",
          key: "estadoId",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allownull: false

      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("tblCidade");
  },
};
