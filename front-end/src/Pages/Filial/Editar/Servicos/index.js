import React from 'react';

import './styles.css';

import api from "../../../../Services/api";
import { useHistory, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { FaTrashAlt } from "react-icons/fa";
import { RiAddCircleFill } from "react-icons/ri";
import MsgErroGenerico from '../../../../Fixtures/MsgErroGenerico';

function Servicos() {

    const { id } = useParams();

    const [meusServicos, setMeusServicos] = useState([]);
    const [todosServicos, setTodosServicos] = useState([]);

    const iconeLixeira = () => (<FaTrashAlt size={26} />);
    const iconeAdicionar = () => (<RiAddCircleFill size={35} />);

    const history = useHistory();

    useEffect(() => {
        const servicosFilial = async () => {
            try {
                const retorno = await api.get(`/filial/${id}`);

                setMeusServicos(retorno.data.Servicos);
                // console.log(retorno.data.Servicos);

            } catch (error) {
                console.log(error);
            }
        }

        const todosServicosBanco = async () => {
            try {
                const retorno = await api.get("/servicos");

                const arr = retorno.data.filter(servicoBanco => {

                    for (let index = 0; index < meusServicos.length; index++) {

                        if (servicoBanco.nome === meusServicos[index].nome) {
                            return false;
                        }

                    }

                    return servicoBanco;
                });

                setTodosServicos(arr);

            } catch (error) {
                console.log(error);
                MsgErroGenerico();
            }
        }

        servicosFilial();
        todosServicosBanco();
    }, [id, meusServicos])

    const CardServico = ({ id, titulo, imagem, Icone, tipo }) => {
        return (
            <li id={id}>
                <figure className="img-servico">
                    <img src={imagem} alt="Serviço Consuline" />
                </figure>

                <span>{titulo}</span>

                <button onClick={() => {
                    console.log(tipo);
                    alert("entrou")
                    if (tipo === "adicionar") {
                        console.log({ id, nome: titulo, imagem });
                        // setMeusServicos(e => [...e, { id, nome: titulo, imagem }]);
                    }

                }}>asasas</button>
                <Icone onClick={() => {
                    console.log(tipo);
                    alert("entrou")
                    if (tipo === "adicionar") {
                        console.log({ id, nome: titulo, imagem });
                        // setMeusServicos(e => [...e, { id, nome: titulo, imagem }]);
                    }

                }} />


            </li>
        )
    }

    const irPara = (evento) => {
        history.replace(evento.target.value)
    }

    return (
        <div className="container-editar-informacoes">
            <select className="rota-editar" onChange={irPara}>
                <option value={`/filial/editar/${id}`}>Informacoes</option>
                <option value={`/filial/editar/endereco/${id}`}>Endereço</option>
                <option value={`/filial/editar/servico/${id}`} selected>Serviços</option>
            </select>
            <div className="container-editar-servicos">
                <div className="editar-servicos">
                    <h2>Serviços</h2>
                    <ul className="lista-servicos">
                        {meusServicos.map(servico => {
                            return (<CardServico
                                key={servico.id}
                                titulo={servico.nome}
                                imagem={servico.imagem}
                                Icone={iconeLixeira}
                                tipo="deletar" />)
                        })}
                    </ul>
                </div>

                <div className="editar-servicos">
                    <h2>Outros serviços</h2>
                    <ul className="lista-servicos">
                        {todosServicos.map(servico => {
                            return (<CardServico
                                key={servico.id}
                                titulo={servico.nome}
                                imagem={servico.imagem}
                                Icone={iconeAdicionar}
                                tipo="adicionar" />)
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Servicos;