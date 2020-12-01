import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import CardListagem from '../../../Components/CardListagem';
import MenuCentral from '../../../Components/MenuCentral';
import TituloPrincipal from '../../../Components/TituloPrincipal';
import api from '../../../Services/api';
import MsgErroGenerico from "../../../Fixtures/MsgErroGenerico";
import Lottie from "react-lottie";
import loader from "../../../Assets/loader.json";
import iconeFilial from "../../../Assets/icone-filial.png";

import './styles.css';

function ListarFiliais() {

    const [filiais, setFiliais] = useState([]);
    const [loading, setLoading] = useState(true);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loader,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    useEffect(() => {
        carregarFiliais();

    }, []);

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
                                {filiais.map(filial => (<CardListagem
                                    id={filial.id}
                                    nome={filial.nomeFantasia}
                                    estado={filial.EnderecoFilial.estado}
                                    cidade={filial.EnderecoFilial.cidade}
                                    telefones={filial.TelefoneFilials}
                                    telaEditar={`/filial/editar/${filial.id}`}
                                    telaConsulta={`/filial/${filial.id}`}
                                />)
                                )}
                            </>
                        )}

                </div>
            </div>
        </div>
    );
}

export default ListarFiliais;