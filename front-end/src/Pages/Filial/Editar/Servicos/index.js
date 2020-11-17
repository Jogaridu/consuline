import React from 'react';

import './styles.css';

import api from "../../../../Services/api";
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { FaTrashAlt } from "react-icons/fa";
import { RiAddCircleFill } from "react-icons/ri";
import MsgErroGenerico from '../../../../Fixtures/MsgErroGenerico';

function Servicos() {

    const { id } = useParams();

    const [meusServicos, setMeusServicos] = useState([]);
    const [todosServicos, setTodosServicos] = useState([]);

    const iconeLixeira = (<FaTrashAlt size={33} />);
    const iconeAdicionar = (<RiAddCircleFill size={45} />);

    const history = useHistory();

    useEffect(() => {
        const servicosFilial = async () => {
            try {
                const retorno = await api.get(`/filial/${id}`);

                setMeusServicos(retorno.data.Servicos);
                console.log(retorno.data);

            } catch (error) {
                console.log(error);
            }
        }

        const todosServicosBanco = async () => {
            try {
                const retorno = await api.get("/servicos");

                setTodosServicos(retorno.data);

            } catch (error) {
                console.log(error);
                MsgErroGenerico();
            }
        }

        servicosFilial();
        todosServicosBanco();
    }, [id])

    const CardServico = ({ titulo, imagem, icone }) => {
        return (
            <li>
                <figure className="img-servico">
                    <img src={imagem} alt="Serviço Consuline" />
                </figure>

                <span>{titulo}</span>

                {icone}
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
                    <h2>Meus serviços</h2>
                    <ul className="lista-servicos">
                        {meusServicos.map(servico => {
                            return (<CardServico
                                titulo={servico.nome}
                                imagem={servico.imagem}
                                icone={iconeLixeira} />)
                        })}
                    </ul>
                </div>

                <div className="editar-servicos">
                    <h2>Outros serviços</h2>
                    <ul className="lista-servicos">
                        {todosServicos.map(servico => {
                            return (<CardServico
                                titulo={servico.nome}
                                imagem={servico.imagem}
                                icone={iconeAdicionar} />)
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Servicos;