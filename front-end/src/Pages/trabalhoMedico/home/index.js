import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import Rating from '@material-ui/lab/Rating';
import { Link } from 'react-router-dom';

import './style.css';
import '../../../Styles/globalStyle.css'

import supermedico from '../../../Assets/supermedico.png'
import medicoteste from '../../../Assets/medicoteste.png'

import api from '../../../Services/api'
import { getProfissional } from "../../../Services/security"

const CardConsulta = ({ consulta }) => {
    return (
        <div className="card-previa">
            <div className="foto-previa-card">
                <img id="medicoteste" src={medicoteste} alt="Logoteste" />
            </div>
            <div className="nome-previa-card">
                {consulta.Paciente.nome}
            </div>
            <div className="data-previa-card">
                {format(parseISO(consulta.data), 'dd/MM')}, {consulta.horario.substr(0,consulta.horario.lastIndexOf(":"))}
            </div>
            <Link style={{ textDecoration: 'none', color: 'black' }} to={`/consultas/abrir-consulta/${consulta.id}`}>
                <div className="vermais-previa-card">
                    <div className="txtvermais-previa-card">
                    Ver mais
                    </div>
                </div>
            </Link>
            
        </div>
    )
}

const ResumoAvaliacao = ({avaliacao}) => {
    return(
        <div className="card-ratingbar">
            <div className="img-cliente-avaliador">
                <div className="caixa-ajuste-medico">
                    <img id="medicoteste1" src={medicoteste} alt="" />
                </div>
            </div>
            <div className="nome-cliente-avaliador">
               {avaliacao.Paciente.nome}
            </div>
            <div className="ratingbar-cliente-avaliador">
                <Rating name="estrelas" value={avaliacao.estrelas} readOnly />
            </div>
        </div>
    )
}

function HomeConsulta() {

    const [consulta, setConsulta] = useState([]);

    useEffect(() => {
        carregarConsultas();

    }, []);

    const carregarConsultas = async () => {

        const { idProfissionalDaSaude } = getProfissional();

        try {
            const retorno = await api.get(`/medico/consultas`);
            // console.log(retorno.data);
            setConsulta(retorno.data);

        } catch (error) {
            console.log(error);
        }
    }
    

    const [avaliacao, setAvaliacao] = useState([]);

    useEffect(() => {
        carregarAvaliacao();
    }, []);

    const carregarAvaliacao = async () => {

        try {
            const retorno = await api.get('/medico/avaliacao');
            // console.log(retorno.data);
            setAvaliacao(retorno.data);
            
        } catch (error) {
            console.log(error);
        }
    }

    const medicoSessao = getProfissional();

    return (
        <div className="container-consulta-home">
            <div id="bem-vindo">
                <div
                    data-aos="fade-right"
                    data-aos-delay="80"
                    data-aos-duration="900"
                    className="img-supermedico">
                    <img id="supermedico" src={supermedico} alt="Imagem de teste" />
                </div>
                <div
                    data-aos="fade-right"
                    data-aos-delay="80"
                    data-aos-duration="900"
                    className="subtext-bemvindo">
                    <h1>Olá,</h1>
                    <h5>Lembre-se sempre do seu juramento:</h5>
                    <p>“Eu prometo solenemente consagrar minha
                    vida ao serviço da humanidade; a saúde e o
                    bem-estar de meu paciente serão as minhas
                    primeiras preocupações”</p>
                </div>
            </div>
            <div id="consultas-hoje">
                <div className="titulo-card-consultashoje">
                    <h1>Consultas para hoje:</h1>
                </div>
                <div className="card-previa-consulta">
                    {consulta.map((consulta) => (
                        <CardConsulta consulta={consulta} />))}
                </div>
                <div className="mais-consulta">
                    Mais Consultas +
                </div>
            </div>
            <div id="informacoes-consultas">
                <div className="previa-perfil-medico">
                    <div className="img-perfil-medico-previa">
                        <img id="medicoteste" src={medicoteste} alt="Logoteste" />
                    </div>
                    <div className="nome-perfil-medico-previa">
                        {medicoSessao.nome}
                    </div>
                    <div className="cidade-perfil-medico-previa">
                        Osasco, SP
                    </div>
                </div>
                <div className="informacoes-agendamento-medico">
                    <div className="txtprevia-perfil-medico">
                        Agendadas
                    </div>
                    <div className="txtcontagemprevia-perfil-medico">
                        2
                    </div>
                </div>
                <div className="informacoes-totalconsulta-medico">
                    <div className="txtprevia-perfil-medico">
                        Atendidas
                    </div>
                    <div className="txtcontagemprevia-perfil-medico">
                        0
                    </div>
                </div>
            </div>
            <div id="apresentacao-avaliacao">
                <div className="titulo-card-avaliacoes">
                    Avaliações
               </div>
                <div className="mini-card-avaliacao">
                    {avaliacao.map ((avaliacao, i) => {
                        if(i >= 3) return 
                        return <ResumoAvaliacao avaliacao={avaliacao}/>
                    })}
                </div>

                <div className="vermais-card-avaliacoes">
                    Ver mais
               </div>
            </div>
        </div>
    );
};

export default HomeConsulta;