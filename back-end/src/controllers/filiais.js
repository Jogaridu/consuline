const Filial = require("../models/Filial");
const EnderecoFilial = require("../models/EnderecoFilial");
const TelefoneFilial = require("../models/TelefoneFilial");
const Servico = require("../models/Servico");
const enderecoFilial = require("./enderecoFilial");

module.exports = {

    async cadastrar(req, res) {

        const { servicos, endereco, telefones, ...dados } = req.body;

        // celebrate
        if (endereco && telefones && dados && servicos) {
            try {

                let filialCriado = await Filial.findOne({
                    where: {
                        cnpj: dados.cnpj

                    }
                });

                if (filialCriado) {
                    return res.status(400).send("Essa filial já está cadastrado");

                }

                const enderecoFilialCriado = await enderecoFilial.cadastrar(endereco);

                filialCriado = await enderecoFilialCriado.createFilial(dados);

                filialCriado.setServicos(servicos);

                telefones.forEach(numero => filialCriado.createTelefoneFilial({ numero: numero }));

                return res.status(201).send(filialCriado);

            } catch (error) {
                console.log(error);
                return res.status(404).send({ erro: "Falha na criação da filial" });

            }
        }

        res.status(400).send({ erro: "Todos os campos devem ser preenchidos (nome, endereço, telefones e serviços)." });

    },

    async buscarPorId(req, res) {

        const { id } = req.params;

        try {
            const FilialBuscado = await Filial.findByPk(id, {
                include: [
                    {
                        model: Servico,
                        through: { attributes: [] },
                        attributes: ["id", "nome", "descricao", "imagem"]
                    },
                    {
                        model: EnderecoFilial,
                        attributes: [
                            "id", "rua", "bairro", "numero",
                            "complemento", "cep"
                        ]

                    },
                    {
                        model: TelefoneFilial,
                        attributes: ["id", "numero"]
                    }
                ],

                attributes: ["id", "nome", "horarioFuncionamento"]

            });

            FilialBuscado ?
                res.status(200).send(FilialBuscado) :
                res.status(404).send({ erro: "Filial não encontrado" });

        } catch (error) {
            console.log(error);
            res.status(404).send({ erro: "Falha ao buscar a filial" })
        }
    },

    async listar(req, res) {

        try {
            const filialTodos = await Filial.findAll({
                include: [
                    {
                        model: Servico,
                        through: { attributes: [] },
                        attributes: ["id", "nome", "descricao", "imagem"]
                    },
                    {
                        model: EnderecoFilial,
                        attributes: [
                            "id", "estado", "cidade"
                        ]

                    },
                    {
                        model: TelefoneFilial,
                        attributes: ["id", "numero"]
                    }
                ],

                attributes: ["id", "nomeFantasia"]
            });

            return res.status(200).send(filialTodos);

        } catch (error) {
            console.log(error);
            return res.status(404).send({ erro: "Falha ao buscar todos os serviços" });

        }
    },

    async deletar(req, res) {

        const { id } = req.params;

        try {
            const FilialCriado = await Filial.findByPk(id);

            if (FilialCriado) {
                FilialCriado.destroy();
                return res.status(200).send("Filial apagado com sucesso");

            }

            return res.status(404).send({ erro: "Esta filial não está cadastrado" });


        } catch (error) {
            console.log(error);
            res.status(404).send({ erro: "Falha ao apagar o registro do serviço" })
        }
    },

    async atualizar(req, res) {

        const { id } = req.params;

        try {
            const filialBuscado = await Filial.findByPk(id);

            if (filialBuscado) {

                const { servicos, endereco, telefones, ...dados } = req.body;

                const enderecoAtualizado = await enderecoFilial.atualizar(endereco, endereco.id);

                if (enderecoAtualizado[0] === 1) {

                    const telefonesBanco = await filialBuscado.getTelefoneFilials();

                    // Apagando todos os telefones
                    telefonesBanco.forEach(telefone => telefone.destroy());

                    // Cadastrando todos os telefones
                    telefones.forEach(numero => filialBuscado.createTelefoneFilial({ numero: numero }));

                    filialBuscado.update(dados);

                    filialBuscado.setServicos(servicos);

                    res.status(200).send("Filial atualizada");

                }

                res.status(200).send("Endereco inválido, ajuste o ID");

            }

            return res.status(404).send({ erro: "Filial não encontrado" })



        } catch (error) {
            res.status(404).send({ erro: "Filial não encontrada" });
        }
    }
}