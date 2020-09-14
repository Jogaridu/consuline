"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("tblFilial", {
      idFilial: {
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
          key: "idEnderecoFilial",
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
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("tblFilial");
  },
};
