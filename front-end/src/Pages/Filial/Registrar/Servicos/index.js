import React from 'react';

import './styles.css';

import teste from "../../../../Assets/c.jpg"
import api from "../../../../Services/api";
import { useState } from 'react';
import { useEffect } from 'react';

function Servicos({ setNovaFilial, servicosSel, cadastrarFilial, setTelaAtual }) {

    const [servicos, setServicos] = useState([]);

    useEffect(() => {
        carragarServicos();
    }, []);

    const carragarServicos = async () => {
        try {

            const retorno = await api.get("/servicos");

            if (retorno.data) {
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
            setNovaFilial((e) => ({ ...e, servicos: [...e.servicos, servicoId] }));
        } else {
            setNovaFilial((e) => ({ ...e, servicos: e.servicos.filter(servico => servico !== servicoId) }));

        }
    }

    const CardServico = ({ id, nome, descricao }) => {
        return (
            <div className="card-servico" id={id}>
                <label className="chk">
                    <input type="checkbox" checked={(servicosSel.filter(s => s === id.toString())).length !== 0} id="teste" name="teste" className="verificado" onChange={(evento) => pegarServico(evento)} />
                    <span />
                </label>
                <input type="checkbox" className="ver-mais" />
                <h3 className="card-titulo">{nome}</h3>
                <figure className="card-imagem">
                    <img src={teste} alt="Imagem do serviço" />
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

            <div className="container-card-servicos">
                {servicos === [] ? "Sem nenhum serviço cadastrado" : servicos.map(servico => (<CardServico
                    id={servico.id}
                    nome={servico.nome}
                    descricao={servico.descricao} />)
                )}
            </div>

            <div className="caixa-botoes">
                <button onClick={() => setTelaAtual("/filial/endereco")} type="button">&larr;</button>

                <button style={{ width: "180px", fontSize: "1.1em" }} type="submit" onClick={cadastrarFilial}>Cadastrar</button>
            </div>
        </div>
    );
}

export default Servicos;