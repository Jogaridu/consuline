'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("tblEnderecoPaciente", {
      idEnderecoPaciente: {
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

      idEstado: {
        type: Sequelize.INTEGER,
        allownull: false,
        references: {
          model: "tblEstado",
          key: "idEstado"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },

      idCidade: {
        type: Sequelize.INTEGER,
        allownull: false,
        references: {
          model: "tblCidade",
          key: "idCidade"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    })
  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.dropTable("tblEnderecoPaciente");

  }
};
