'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('tblEstado', [{
      "id": 11,
      "nome": "Rondônia",
      "sigla": "RO",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      "id": 12,
      "nome": "Acre",
      "sigla": "AC",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      "id": 13,
      "nome": "Amazonas",
      "sigla": "AM",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      "id": 14,
      "nome": "Roraima",
      "sigla": "RR",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      "id": 15,
      "nome": "Pará",
      "sigla": "PA",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      "id": 16,
      "nome": "Amapá",
      "sigla": "AP",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      "id": 17,
      "nome": "Tocantins",
      "sigla": "TO",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      "id": 21,
      "nome": "Maranhão",
      "sigla": "MA",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      "id": 22,
      "nome": "Piauí",
      "sigla": "PI",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      "id": 23,
      "nome": "Ceará",
      "sigla": "CE",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      "id": 24,
      "nome": "Rio Grande do Norte",
      "sigla": "RN",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      "id": 25,
      "nome": "Paraíba",
      "sigla": "PB",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      "id": 26,
      "nome": "Pernambuco",
      "sigla": "PE",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      "id": 27,
      "nome": "Alagoas",
      "sigla": "AL",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      "id": 28,
      "nome": "Sergipe",
      "sigla": "SE",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      "id": 29,
      "nome": "Bahia",
      "sigla": "BA",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      "id": 31,
      "nome": "Minas Gerais",
      "sigla": "MG",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      "id": 32,
      "nome": "Espírito Santo",
      "sigla": "ES",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      "id": 33,
      "nome": "Rio de Janeiro",
      "sigla": "RJ",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      "id": 35,
      "nome": "São Paulo",
      "sigla": "SP",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      "id": 41,
      "nome": "Paraná",
      "sigla": "PR",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      "id": 42,
      "nome": "Santa Catarina",
      "sigla": "SC",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      "id": 43,
      "nome": "Rio Grande do Sul",
      "sigla": "RS",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      "id": 50,
      "nome": "Mato Grosso do Sul",
      "sigla": "MS",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      "id": 51,
      "nome": "Mato Grosso",
      "sigla": "MT",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      "id": 52,
      "nome": "Goiás",
      "sigla": "GO",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      "id": 53,
      "nome": "Distrito Federal",
      "sigla": "DF",
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('tblEstado', null, {});
  }
};
