const gerarCodigo = require("../../src/fixtures/gerarCodigo");

describe("gerarCodigo", () => {
    it("É possível gerar um número?", () => {
        const codigo = gerarCodigo();

        expect(codigo).toBeDefined();
        expect(typeof codigo).toBe("string");
        expect(codigo).toHaveLength(4);
    });
});