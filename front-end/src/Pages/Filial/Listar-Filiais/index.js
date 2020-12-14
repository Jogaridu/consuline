import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import CardListagem from '../../../Components/CardListagem';
import MenuCentral from '../../../Components/MenuCentral';
import TituloPrincipal from '../../../Components/TituloPrincipal';
import api from '../../../Services/api';
import MsgErroGenerico from "../../../Fixtures/MsgErroGenerico";
import Lottie from "react-lottie";
import search from "../../../Assets/no-search.json";
import iconeFilial from "../../../Assets/icone-filial.png";
import BotaoPrincipal from "../../../Components/BotaoPrincipal";

import './styles.css';
import '../../../Styles/globalStyle.css';
import { Link } from 'react-router-dom';

function ListarFiliais() {

    const [filiais, setFiliais] = useState([]);
    const [loading, setLoading] = useState(true);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: search,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    useEffect(() => {
        const carregarFiliais = async () => {
            try {
                const retorno = await api.get("/filiais");

                setFiliais(retorno.data);

                setLoading(false);

            } catch (error) {
                console.log(error);

                MsgErroGenerico();
            }

        }

        carregarFiliais();

    }, []);

    return (
        <div className="container-central">
            <MenuCentral />
            <div className="listar-filiais">
                <TituloPrincipal nome="Filiais" imagem={iconeFilial} />
                <div className="container-cards">
                    {loading ? (
                        <Lottie options={defaultOptions} height={200} width={200} />
                    ) : (
                            <>
                                {!(filiais.length === 0) ? filiais.map(filial => (<CardListagem
                                    id={filial.id}
                                    nome={filial.nomeFantasia}
                                    estado={filial.EnderecoFilial.estado}
                                    cidade={filial.EnderecoFilial.cidade}
                                    telefones={filial.TelefoneFilials}
                                    telaEditar={`/filial/editar/${filial.id}`}
                                    telaConsulta={`/filial/${filial.id}`}
                                />)
                                ) : (
                                        <div className="msg-sem-dados">
                                            <Lottie options={defaultOptions} height={200} width={200} />
                                            <h2>Sem filiais cadastradas</h2>
                                            <Link to="/filial">
                                                <BotaoPrincipal titulo="Adicionar filial" />
                                            </Link>
                                        </div>
                                    )}
                            </>
                        )}

                </div>
            </div>
        </div>
    );
}

export default ListarFiliais;