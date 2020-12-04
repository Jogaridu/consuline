import React from 'react';

import './styles.css';

import teste from "../../../../Assets/c.jpg"
import api from "../../../../Services/api";
import { useState } from 'react';
import { useEffect } from 'react';
import { Redirect, useHistory, useLocation } from 'react-router-dom';
import Swal from "sweetalert2";
import RemoverMask from '../../../../Fixtures/RemoverMask';
import MsgErroGenerico from '../../../../Fixtures/MsgErroGenerico';
import BotaoPrincipal from "../../../../Components/BotaoPrincipal";

function Servicos() {

    const history = useHistory();

    const location = useLocation();

    let novaFilial = location.state;

    const [servicos, setServicos] = useState([]);
    const [novoServico, setNovoServico] = useState([]);

    useEffect(() => {
        const carragarServicos = async () => {
            try {

                const retorno = await api.get("/servicos");
                console.log(retorno.data);

                if (retorno.data) {
                    setServicos(retorno.data);

                } else {
                    alert("Serviços não existem");
                }

            } catch (error) {
                console.log(error);
            }
        }

        carragarServicos();


    }, [novaFilial.servicos]);

    const cadastrarFilial = async () => {

        novaFilial["servicos"] = novoServico;
        novaFilial["telefones"] = [RemoverMask(novaFilial.telefones[0])]

        try {

            const dados = {
                ...novaFilial,
                cnpj: RemoverMask(novaFilial.cnpj),
                ie: RemoverMask(novaFilial.ie),
                endereco: {
                    ...novaFilial.endereco,
                    cep: RemoverMask(novaFilial.endereco.cep)
                }
            }

            const retorno = await api.post("/filial", dados);

            if (retorno.status === 201) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: "Filial cadastrada com sucesso",
                    showConfirmButton: false,
                    timer: 1500
                }).then(() => history.replace(`/filial/${retorno.data.id}`));
            }

        } catch (error) {
            console.error(error);
            MsgErroGenerico();

        }

    }

    const pegarServico = (evento, servicoId) => {

        if (evento.target.checked) {
            setNovoServico(e => [...e, servicoId]);

        } else {
            setNovoServico(e => e.filter(servico => servico !== servicoId));

        }

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
                <button onClick={() => {
                    Swal.fire({
                        title: 'Quer realmente voltar?',
                        text: "Todos os dados registrados serão apagados",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Sim, quero voltar'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            history.push("/filial/endereco");

                        }
                    })
                }} type="button">&larr;</button>


                <BotaoPrincipal titulo="Cadastrar" tipo="submit" loading={true} funcExec={cadastrarFilial} />

            </div>
        </div>
    );
}

export default Servicos;