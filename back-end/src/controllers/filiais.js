const Filial = require("../models/Filial");
const EnderecoFilial = require("../models/EnderecoFilial");
const TelefoneFilial = require("../models/TelefoneFilial");
const Servico = require("../models/Servico");
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
const Cidade = require("../models/Cidade");
const Estado = require("../models/Estado");
=======
>>>>>>> c4cf7c49dfe3af7538d5e38a9fcc10f292694ca1
=======
>>>>>>> 94ae0017559ec3111deb5af277847d1f9422693b
>>>>>>> afc168bcd886ec11bf0b5938289e559842930d20
const enderecoFilial = require("./enderecoFilial");

module.exports = {

    async cadastrar(req, res) {

        const { servicos, endereco, telefones, ...dados } = req.body;

        const { idCentral, tipoPerfil } = req;

        // if (tipoPerfil !== "admin") {
        //     return res.status(401).send({ error: "Você não possui autorização para esta ação!!" })
        // }

        if (endereco && telefones && dados && servicos) {
            try {

                let filialCriado = await Filial.findOne({
                    where: {
                        cnpj: dados.cnpj,
                        ie: dados.ie,
                        nomeFantasia: dados.nomeFantasia

                    }
                });

                if (filialCriado) {
                    return res.status(400).send({ erro: "Essa filial já está cadastrado" });

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
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
                        include: [
                            {
                                model: Cidade,
                                attributes: ["id", "nome"]
                            },
                            {
                                model: Estado,
                                attributes: ["id", "nome", "sigla"]

                            }
                        ],
=======
>>>>>>> c4cf7c49dfe3af7538d5e38a9fcc10f292694ca1
=======
>>>>>>> 94ae0017559ec3111deb5af277847d1f9422693b
>>>>>>> afc168bcd886ec11bf0b5938289e559842930d20
                        attributes: [
                            "id", "rua", "bairro", "numero",
                            "complemento", "cep", "cidade", "estado"
                        ]

                    },
                    {
                        model: TelefoneFilial,
                        attributes: ["id", "numero"]
                    }
                ],

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
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
                        include: [
                            {
                                model: Cidade,
                                attributes: ["id", "nome"]
                            },
                            {
                                model: Estado,
                                attributes: ["id", "nome", "sigla"]

                            }
                        ],
=======
>>>>>>> c4cf7c49dfe3af7538d5e38a9fcc10f292694ca1
=======
>>>>>>> 94ae0017559ec3111deb5af277847d1f9422693b
>>>>>>> afc168bcd886ec11bf0b5938289e559842930d20
                        attributes: [
                            "id", "rua", "estado", "cidade", "cep", "numero"
                        ]

                    },
                    {
                        model: TelefoneFilial,
                        attributes: ["id", "numero"]
                    }
                ],

                attributes: ["id", "nomeFantasia"],
            });

            return res.status(200).send(filialTodos);

        } catch (error) {
            return res.status(404).send({ erro: "Falha ao buscar todos os serviços" });

        }
    },

    async deletar(req, res) {

        const { idCentral, tipoPerfil } = req;

        if (tipoPerfil !== "admin") {
            return res.status(401).send({ error: "Você não possui autorização para esta ação!!" })
        }

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

        const { idCentral, tipoPerfil } = req;

        // if (tipoPerfil !== "admin") {
        //     return res.status(401).send({ error: "Você não possui autorização para esta ação!!" })
        // }

        const { id } = req.params;

        try {
            const filialBuscado = await Filial.findByPk(id);

            if (filialBuscado) {

                const { servicos, endereco, telefones, ...dados } = req.body;

                if (endereco) {
                    await enderecoFilial.atualizar(endereco, endereco.id);

                }

                if (telefones) {

                    const telefonesBanco = await filialBuscado.getTelefoneFilials();

                    telefonesBanco.forEach(telefone => telefone.destroy());

                    telefones.forEach(numero => filialBuscado.createTelefoneFilial({ numero: numero }));
                }

                if (servicos) {
                    filialBuscado.setServicos(servicos);

                }

                filialBuscado.update(dados);

                return res.status(200).send("Filial atualizada");

            }

            return res.status(404).send({ erro: "Filial não encontrado" })



        } catch (error) {
            console.log(error);
            res.status(404).send({ erro: "Filial não encontrada" });
        }
    },

    async verificarCnpj(req, res) {

        const { cnpj } = req.body;

        try {

            const filialBuscado = await Filial.findOne({
                where: {
                    cnpj
                },
                attributes: ["cnpj"]
            });

            if (filialBuscado) {
                res.status(200).send("Filial cadastrada");

            } else {
                res.status(204).send();

            }

        } catch (error) {
            res.status(404).send({ erro: "Paciente não encontrado ou CNPJ não informado" })
        }
    },

    async verificarIe(req, res) {
        const { ie } = req.body;

        try {

            const filialBuscado = await Filial.findOne({
                where: {
                    ie
                },
                attributes: ["ie"]
            });

            if (filialBuscado) {
                res.status(200).send("Filial cadastrada");

            } else {
                res.status(204).send();

            }

        } catch (error) {
            res.status(404).send({ erro: "Paciente não encontrado ou IE não informado" })
        }
    },

    async verificarNomeFantasia(req, res) {
        const { nomeFantasia } = req.body;

        try {

            const filialBuscado = await Filial.findOne({
                where: {
                    nomeFantasia
                },
                attributes: ["nomeFantasia"]
            });

            if (filialBuscado) {
                res.status(200).send("Filial cadastrada");

            } else {
                res.status(204).send();

            }

        } catch (error) {
            res.status(404).send({ erro: "Paciente não encontrado ou NOME FANTASIA não informado" })
        }
    }
}