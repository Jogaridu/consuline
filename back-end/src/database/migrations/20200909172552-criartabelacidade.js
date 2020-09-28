"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("tblCidade", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      EstadoId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        refences: {
          model: "tblEstado",
          key: "id",
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
