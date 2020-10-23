import React from 'react';

import './styles.css';

import teste from "../../../../Assets/c.jpg"
import api from "../../../../Services/api";
import { useState } from 'react';
import { useEffect } from 'react';

function Servicos({novaFilial, setNovaFilial}) {

    const [servicos, setServicos] = useState([]);

    useEffect(() => {
        carragarServicos();
    }, []);

    const carragarServicos = async () => {
        try {

            const retorno = await api.get("/servicos");

            if (retorno) {
                setServicos(retorno.data);

            } else {
                alert("Serviços não existem");
            }
            
        } catch (error) {
            console.log(error);
        }
    }

    const pegarServico = (evento) => {

        const servicoId = evento.target.parentNode.parentNode.getAttribute("id");
        
        if (evento.target.checked) {
            // setNovaFilial({...novaFilial, servicos: [...novaFilial.servicos, servicoId]});

        } else {
            // setNovaFilial({...novaFilial, servicos: novaFilial.servicos.filter(servico => servico === servicoId)});

        }

        console.log(novaFilial.servicos);
    }

    const CardServico = ({id, nome, descricao}) => {
        return (
            <div className="card-servico" id={id}>
                <label className="chk">
                    <input type="checkbox" className="verificado" onChange={(evento) => pegarServico(evento)}/>
                    <span />
                </label>
                <input type="checkbox" className="ver-mais"/>
                <h3 className="card-titulo">{nome}</h3>
                <figure className="card-imagem">
                    <img src={teste} alt="Imagem do serviço"/>
                </figure>
                <div className="btn-descricao">+</div>
                
                <div className="card-descricao">
                    <p>
                        {descricao}
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="conteiner-entrada-servicos">
           {servicos.map(servico => (<CardServico 
                                                id={servico.id} 
                                                nome={servico.nome} 
                                                descricao={servico.descricao}/>)
            )}
        </div>
    );
}

export default Servicos;