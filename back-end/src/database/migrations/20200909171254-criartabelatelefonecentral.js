"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("tblTelefoneCentral", {
      centralTelefoneId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      numero: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      centralId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        refences: {
          model: "tblCentral",
          key: "centralId",
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
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("tblTelefoneCentral");
  },
};
