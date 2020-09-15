"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("tblEnderecoProfissional", {
      enderecoProfissionalId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      rua: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      bairro: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      numero: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      complemento: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cep: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cidadeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        refences: {
          model: "tblCidade",
          key: "cidadeId",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      estadoId: {
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
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("tblEnderecoProfissional");
  },
};
