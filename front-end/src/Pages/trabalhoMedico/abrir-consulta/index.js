import React, { useEffect, useState } from 'react';

import api from '../../../Services/api';
import './style.css';
import '../../../Styles/globalStyle.css'
import medicoteste from '../../../Assets/medicoteste.png'
import relogio from '../../../Assets/relogio.png'
import calendario from '../../../Assets/calendario.png'
import { Link, useParams } from 'react-router-dom';

import BotaoPrincipal from "../../../Components/BotaoPrincipal";
// import BotaoSecundario from "../../Components/BotaoSecundario";

function AbrirConsulta () {
        let { id } = useParams();

    const [consulta, setConsulta] = useState([]);

    useEffect(() =>{
        const carregarConsulta = async () => {

            try {
                const retorno = await api.get(`/consulta/${id}`);
                console.log(retorno.data)
                setConsulta(retorno.data);
            } catch (error) {
                console.log(error);
            }
        }

        carregarConsulta();
    }, [])


    var data_atual = new Date();
    var data_nascimento = new Date (consulta.Paciente?.dataNascimento);
    var anos = data_atual.getFullYear() - data_nascimento.getFullYear();

    return(
    <div className="container-consulta-completa">
        <div className="header-consultas">
            <div className="titulo-avaliacao">
                Consulta
            </div>
        </div>
        <div className="card-consulta-aberta">
            <div className="dadospaciente">
                <div className="imagem-paciente-consulta">
                    <img id="imgpaciente-teste" src={medicoteste} alt="Logoteste" /> 
                </div>
                <div className="nome-endereco-paciente-consulta">
                    <div className="nome-paciente-consulta">
                        {consulta.Paciente?.nome}
                    </div>
                    <div className="endereco-paciente-consulta">
                        {anos} anos | Barueri-SP
                    </div>
                </div>
            </div>
            <div className="informacoes-consulta">
                <div className="status-consulta">
                    <div className="txt-fixo">
                        Tipo: 
                    </div> 
                    {consulta.Atendimento?.tipo}
                </div> 
                <div className="tipo-consulta">
                    <div className="txt-fixo">
                        Sintomas:
                    </div> 
                    {consulta.sintomas}
                </div> 
                <div className="sintomas-consulta">
                    <div className="txt-fixo">
                        Descrição:
                    </div> 
                    {consulta.descricao}
                </div> 
            </div>
            <div className="data-hora-consulta">
                <div className="data-hora">
                    <div className="img-calendario">
                        <img id="calendario" src={calendario} alt="Logoteste" /> 
                    </div>
                    <div className="data">
                        16, Janeiro - 2020
                    </div>
                    <div className="img-relogio">
                        <img id="relogio" src={relogio} alt="Logoteste" /> 
                    </div>
                    <div className="hora">
                        09:00 -- 11:00 AM
                    </div>
                </div>
            </div>
            <div className="btn-realizar-consulta">     
            <a href={`http://wa.me/${consulta.Paciente?.celular}`} target="_blank">
                <BotaoPrincipal titulo="Realiza consulta"  tipo="submit" loading={true} /> 
            </a>                 
            </div>
        </div>
    </div>        
    );
};

export default AbrirConsulta;