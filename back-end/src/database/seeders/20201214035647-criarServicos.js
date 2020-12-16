'use strict';
const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('tblServico', [
      {
        nome: "Clínico geral",
        descricao: "O clínico geral é um profissional da Medicina com amplo conhecimento sobre o funcionamento do corpo humano em seu conjunto. Ele é responsável por acompanhar e diagnosticar possíveis problemas de saúde em seus pacientes.",
        imagem: "https://firebasestorage.googleapis.com/v0/b/consuline.appspot.com/o/clnico-geral.png?alt=media&token=84acb5fc-f686-446e-84f1-2b64814cacea",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: "Cardiologista",
        descricao: "Cardiologia é a especialidade médica que se ocupa do diagnóstico e tratamento das doenças que acometem o coração bem como os outros componentes do sistema circulatório.",
        imagem: "https://firebasestorage.googleapis.com/v0/b/consuline.appspot.com/o/cardiologista.jpg?alt=media&token=1cc890f0-b4d0-4a1d-9b82-986947dab78c",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: "Pediatra",
        descricao: "O médico que cuida de crianças e adolescentes é chamado de pediatra. Ou seja, pediatra é o profissional de Medicina, especializado na saúde de crianças e que presta assistência a esse público específico em seus mais diversos aspectos, tanto de modo preventivo quanto curativo.",
        imagem: "https://firebasestorage.googleapis.com/v0/b/consuline.appspot.com/o/pediatra.jpg?alt=media&token=f745bdd7-7a05-4b19-9c37-77005804c7b8",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: "Nutricionista",
        descricao: "O nutricionista é o profissional da saúde que estuda os alimentos e seus efeitos no organismo humano. Ele preza pela qualidade da alimentação das pessoas, individualmente ou em grupo, indicando quais alimentos podem ser consumidos para garantir uma alimentação saudável, nutritiva e equilibrada.",
        imagem: "https://firebasestorage.googleapis.com/v0/b/consuline.appspot.com/o/nutricionista.jpg?alt=media&token=a87de301-9f48-45e7-a10d-4c9025f349f2",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: "Oftalmologista",
        descricao: "O oftalmologista é o profissional que estuda, diagnostica e trata dos olhos e suas doenças, uma vez que tem por sua responsabilidade realizar consultas, perguntando sobre o histórico da saúde ocular da família do paciente.",
        imagem: "https://firebasestorage.googleapis.com/v0/b/consuline.appspot.com/o/Oftalmologista.jpg?alt=media&token=dea66100-e758-4cd8-a579-1b8814cd3948",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: "Urologista",
        descricao: "Urologista é o médico responsável pelo tratamento dos problemas relacionados ao trato urinário de homens e mulheres e genital dos homens. Todo urologista obrigatoriamente teve a formação como médico, especialização (residência médica) em cirurgia geral e especialização (residência médica) em urologia.",
        imagem: "https://firebasestorage.googleapis.com/v0/b/consuline.appspot.com/o/Urologista.jpg?alt=media&token=812fd49e-4952-461d-b67e-fde07664e719",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: "Ginecologista",
        descricao: " A ginecologia é um ramo da medicina. Sendo uma especialidade própria para estudar, cuidar e tratar a saúde do aparelho reprodutor feminino.",
        imagem: "https://firebasestorage.googleapis.com/v0/b/consuline.appspot.com/o/Ginecologista.jpg?alt=media&token=67fe3557-e0c9-44ea-a352-5a891ee0fbfd",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: "Gastroenterologista",
        descricao: "O gastroenterologista é o médico mais especializado para cuidar dos distúrbios que atingem o trato gastrointestinal. Qualquer doença que esteja relacionada com o aparelho digestivo, ou seja, da boca até o ânus, deve ser diagnosticada e tratada por esse profissional.",
        imagem: "https://firebasestorage.googleapis.com/v0/b/consuline.appspot.com/o/Gastroenterologista.jpg?alt=media&token=129d9342-27d7-4c71-b23f-1aa7347931df",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: "Dermatologia",
        descricao: "O Médico Dermatologista cuida da prevenção e tratamento das doenças do maior órgão do corpo: a pele e seus apêndices, como a boca, os cabelos, as unhas etc.",
        imagem: "https://firebasestorage.googleapis.com/v0/b/consuline.appspot.com/o/Dermatologia.png?alt=media&token=e478ea5b-887b-4b40-97c4-af57ba47b9d4",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: "Ortopedista",
        descricao: "O Médico Ortopedista é o especialista no diagnóstico e tratamento das disfunções e lesões do sistema locomotor (músculos, ossos, ligamentos, nervos, articulações, tendões etc.).",
        imagem: "https://firebasestorage.googleapis.com/v0/b/consuline.appspot.com/o/Ortopedista.jpg?alt=media&token=9b57dd92-235a-4569-a2ad-9247ac3719f6",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('tblServico', null, {});

  }
};
