"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("tblFilial", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nomeFantasia: {
        type: Sequelize.STRING,
        allowNull: false,

      },
      dataAbertura: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      cnpj: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ie: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      enderecoFilialId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "tblEnderecoFilial",
          key: "id",
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
