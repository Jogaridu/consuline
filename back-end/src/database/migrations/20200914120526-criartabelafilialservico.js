"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("tblFilialServico", {
      filialServicoId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      filialId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "tblFilial",
          key: "filialId",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      servicoId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "tblServico",
          key: "servicoId",
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
    return queryInterface.dropTable("tblFilialServico");
  },
};
