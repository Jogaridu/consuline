const request = require("supertest");
const app = require("../../src/app");
const connection = require("../../src/database");

describe("PACIENTES", () => {

    afterAll(() => {
        connection.close();
    })


    it("É possivel cadastrar um paciente", async () => {
        const retorno = await request(app).post("/paciente").send({
            "nome": "Jorge",
            "celular": "11912341234",
            "login": "jogaridu",
            "senha": "123",
            "dataNascimento": "2001-01-30",
            "email": "consulinetcc2020@gmail.com",
            "rg": "3856041274",
            "cpf": "44284537873",
            "endereco": {"rua": "Rua Jorge","bairro": "Bairro Jorge","numero":"121212","complemento": "casa 12","cep": "12345-123","cidade": "Jandira","estado":"SP"}
        });

        console.log(retorno);
        expect(retorno.ok).toBeTruthy();
        expect(retorno.body.paciente).toHaveProperty("id")
    });
});