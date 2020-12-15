import React, { useEffect, useState } from 'react';

import './style.css';
import '../../../Styles/globalStyle.css'
import medicoteste from '../../../Assets/medicoteste.png'

import Rating from '@material-ui/lab/Rating';
import api from '../../../Services/api';
// import { getProfissional } from "../../../Services/security"

const CardAvaliacao = ({avaliacao}) => {
    return(
        <div className="card-avaliacao">
            <div className="data-avaliacao">
                04/09
            </div>
            <img id="medicoteste-1" src={medicoteste} alt="Imagem de teste"/>
            <div className="nome-paciente-avaliacao">
                {avaliacao.Paciente.nome}
            </div>
            <div className="ratingbar-avaliacao">
            <Rating name="estrelas" value={avaliacao.estrelas} readOnly />
            </div>
        </div>
    )
}

function Avaliacao () {

    const [avaliacao, setAvaliacao] = useState([]);

    useEffect(() => {
        const carregarAvaliacao = async () => {
       
            try {
                const retorno = await api.get('/medico/avaliacao');
                setAvaliacao(retorno.data);
            } catch (error) {
                console.log(error.retorno);
            }
        }
        carregarAvaliacao();
    }, []);

    

    return(
     <div className="container-avaliacao">
        <div className="header-consultas">
            <div className="titulo-avaliacao">
                Avaliação
            </div>
        </div>
        <div className="conteudo-avaliacao">
            {avaliacao.map ((avaliacao) => (
                <CardAvaliacao avaliacao={avaliacao}/>
            ))}
            
        </div>
     </div>
    );
};

export default Avaliacao;