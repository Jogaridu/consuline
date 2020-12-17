'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
<<<<<<< HEAD
    return queryInterface.createTable("tblatendimento", {
=======
<<<<<<< HEAD:back-end/src/database/migrations/20200909170429-criartabelaestado.js
    return queryInterface.createTable("tblEstado", {
=======
    return queryInterface.createTable("tblatendimento", {
>>>>>>> 94ae0017559ec3111deb5af277847d1f9422693b:back-end/src/database/migrations/20201103131011-criartabelaatendimento.js
>>>>>>> afc168bcd886ec11bf0b5938289e559842930d20
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      tipo: {
        type: Sequelize.STRING,
        allowNull: false
      },
<<<<<<< HEAD
=======
      sigla: {
        type: Sequelize.STRING,
        allowNull: false,
      },
>>>>>>> afc168bcd886ec11bf0b5938289e559842930d20
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("tblatendimento");
  }
};
