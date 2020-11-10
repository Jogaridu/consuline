import React from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import MenuCentral from '../../../Components/MenuCentral';
import TituloPrincipal from '../../../Components/TituloPrincipal';
import api from '../../../Services/api';

import { HiPencilAlt } from "react-icons/hi";
import { FaTrashAlt } from "react-icons/fa";
import { RiAddCircleFill } from "react-icons/ri";

import './styles.css';
import { useEffect } from 'react';

function Consulta() {

    const { id } = useParams();
    const [dados, setDados] = useState({
        "nomeFantasia": "",
        "dataAbertura": "",
        "cnpj": "",
        "ie": "",
        "email": "",
        "razaoSocial": "",
        "EnderecoFilial": {
            "rua": "",
            "bairro": "",
            "numero": "",
            "complemento": "",
            "cep": "",
            "cidade": "",
            "estado": ""
        },
        "TelefoneFilials": [],
        "Servicos": []
    });

    useEffect(() => {
        const carregarDados = async () => {
            try {
                const retorno = await api.get(`/filial/${id}`);

                setDados({ ...retorno.data });

            } catch (error) {
                console.log(error);
            }
        }

        carregarDados();
    }, [id]);

    const CardServico = ({ titulo, imagem }) => {
        return (
            <li>
                <figure className="img-servico">
                    <img src={imagem} alt="Serviço Consuline" />
                </figure>

                <span>{titulo}</span>
            </li>
        )
    }

    return (

        <div className="container-central">
            <MenuCentral />
            <div className="container-conteudo-central">
                <TituloPrincipal nome="Consulta cadastro" />
                <div className="consulta-cadastro">
                    <div className="conjunto-dados">
                        <div className="titulo-conjunto-dados">
                            <h2>Informações pessoais</h2>
                            <Link to={`/filial/editar/${dados.id}`}>
                                <HiPencilAlt size={40} />
                            </Link>
                        </div>
                        <div className="dado">
                            <span>Razão social: </span> {dados.razaoSocial}
                        </div>
                        <div className="dado">
                            <span>Nome fantasia: </span> {dados.nomeFantasia}
                        </div>
                        <div className="dado">
                            <span>CNPJ: </span> {dados.cnpj}
                        </div>
                        <div className="dado">
                            <span>I.E: </span> {dados.ie}
                        </div>
                        <div className="dado">
                            <span>Data Abertura: </span> {dados.dataAbertura}
                        </div>
                        <div className="dado">
                            <span>Email: </span> {dados.email}
                        </div>
                        <div className="dado">
                            <span>Telefones: </span>
                            <div className="dado-telefones">
                                {dados.TelefoneFilials.map(tel => (<div>{tel.numero}</div>))}
                            </div>
                        </div>
                    </div>

                    <div className="conjunto-dados">
                        <div className="titulo-conjunto-dados">
                            <h2>Localização</h2>
                            <Link to={`/filial/editar/endereco/${dados.id}`}>
                                <HiPencilAlt size={40} />
                            </Link>
                        </div>
                        <div className="dado">
                            <span>CEP: </span> {dados.EnderecoFilial.cep}
                        </div>
                        <div className="dado">
                            <span>Bairro: </span> {dados.EnderecoFilial.bairro}
                        </div>
                        <div className="dado">
                            <span>Rua: </span> {dados.EnderecoFilial.rua}
                        </div>
                        <div className="dado">
                            <span>Estado: </span> {dados.EnderecoFilial.estado}
                        </div>
                        <div className="dado">
                            <span>Cidade: </span> {dados.EnderecoFilial.cidade}
                        </div>
                        <div className="dado">
                            <span>Complemento: </span> {dados.EnderecoFilial.complemento}
                        </div>
                    </div>

                    <div className="conjunto-dados">
                        <div className="titulo-conjunto-dados">
                            <h2>Serviços</h2>
                            <Link to={`/filial/editar/servico/${dados.id}`}>
                                <HiPencilAlt size={40} />
                            </Link>
                        </div>
                        <div className="editar-servicos">
                            <h2>Meus serviços</h2>
                            <ul className="lista-servicos">
                                {dados.Servicos.map(servico => {
                                    return (<CardServico
                                        titulo={servico.nome}
                                        imagem={servico.imagem} />)
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Consulta;