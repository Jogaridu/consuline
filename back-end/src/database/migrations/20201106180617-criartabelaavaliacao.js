"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
<<<<<<< HEAD
    return queryInterface.createTable("tblavaliacao", {
=======
<<<<<<< HEAD:back-end/src/database/migrations/20200909172552-criartabelacidade.js
    return queryInterface.createTable("tblCidade", {
=======
    return queryInterface.createTable("tblavaliacao", {
>>>>>>> 94ae0017559ec3111deb5af277847d1f9422693b:back-end/src/database/migrations/20201106180617-criartabelaavaliacao.js
>>>>>>> afc168bcd886ec11bf0b5938289e559842930d20
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      estrelas:{
        type:Sequelize.INTEGER,
        allowNull:false,
      },
      comentario:{
        type:Sequelize.TEXT,
        allowNull:false
      },
<<<<<<< HEAD
=======
<<<<<<< HEAD:back-end/src/database/migrations/20200909172552-criartabelacidade.js
      EstadoId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        refences: {
          model: "tblEstado",
=======
>>>>>>> afc168bcd886ec11bf0b5938289e559842930d20
      PacienteId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        refences: {
          model: "tblpaciente",
<<<<<<< HEAD
=======
>>>>>>> 94ae0017559ec3111deb5af277847d1f9422693b:back-end/src/database/migrations/20201106180617-criartabelaavaliacao.js
>>>>>>> afc168bcd886ec11bf0b5938289e559842930d20
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      ProfissionalDaSaudeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        refences: {
          model: "tblProfissional",
          key: "id",
        },
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
    return queryInterface.dropTable("tblavaliacao");
  },
};
