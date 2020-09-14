"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("tblTelefoneFilial", {
      idTelefoneFilial: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      numero: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      filialId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "tblFilial",
          key: "idFilial",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
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
    return queryInterface.dropTable("tblTelefoneFilial");
  },
};
