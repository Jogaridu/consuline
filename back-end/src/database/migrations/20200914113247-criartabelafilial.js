"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("tblFilial", {
      filialId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      horarioFuncionamento: {
        type: Sequelize.TIME,
        allowNull: false,
      },
      enderecoFilialId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "tblEnderecoFilial",
          key: "enderecoFilialId",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("tblFilial");
  },
};
