import React from 'react';

import './styles.css';

import teste from "../../../../Assets/c.jpg"
import api from "../../../../Services/api";
import { useState } from 'react';
import { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

function Servicos() {

    const history = useHistory();

    const location = useLocation();

    let novaFilial = location.state;

    const [servicos, setServicos] = useState([]);
    const [novoServico, setNovoServico] = useState([]);

    useEffect(() => {
        carragarServicos();
        console.log(novaFilial.servicos);

    }, []);

    const cadastrarFilial = async () => {

        novaFilial.telefones = ["11912341234"]; // Provisório
        novaFilial["servicos"] = novoServico;

        try {
            const retorno = await api.post("/filial", novaFilial);

            if (retorno.status === 201) {
                alert("Cadastro realizado com sucesso");
            }

        } catch (error) {
            console.error(error);

        }

    }

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

    const pegarServico = (evento, servicoId) => {

        if (evento.target.checked) {
            setNovoServico(e => [...e, servicoId]);

        } else {
            setNovoServico(e => e.filter(servico => servico !== servicoId));

        }

        console.log(novaFilial.servicos);

    }

    const CardServico = ({ id, nome, descricao }) => {
        return (
            <div className="card-servico" id={id}>
                <label className="chk">
                    <input type="checkbox" checked={(novoServico.filter(s => s === id)).length !== 0} id="teste" name="teste" className="verificado" onChange={(evento) => pegarServico(evento, id)} />
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
                <button onClick={() => history.push("/filial/endereco")} type="button">&larr;</button>

                <button style={{ width: "180px", fontSize: "1.1em" }} type="submit" onClick={cadastrarFilial}>Cadastrar</button>
            </div>
        </div>
    );
}

export default Servicos;