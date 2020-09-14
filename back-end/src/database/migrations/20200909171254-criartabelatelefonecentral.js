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
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("tblTelefoneCentral");
  },
};
