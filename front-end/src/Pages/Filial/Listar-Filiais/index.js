import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import CardListagem from '../../../Components/CardListagem';
import MenuCentral from '../../../Components/MenuCentral';
import TituloPrincipal from '../../../Components/TituloPrincipal';
import api from '../../../Services/api';

import './styles.css';

function ListarFiliais() {

    const [filiais, setFiliais] = useState([]);

    useEffect(() => {
        carregarFiliais();

    }, []);

    const carregarFiliais = async () => {
        try {
            const retorno = await api.get("/filiais");

            setFiliais(retorno.data);

            console.log(retorno.data);

        } catch (error) {
            console.log(error);
        }

    }


    return (
        <div className="container-central">
            <MenuCentral />
            <div className="listar-filiais">
                <TituloPrincipal nome="Listar todas as filiais cadastradas" />
                <div className="container-cards">
                    {filiais.map(filial => (<CardListagem
                        id={filial.id}
                        nome={filial.nomeFantasia}
                        estado={filial.EnderecoFilial.estado}
                        cidade={filial.EnderecoFilial.cidade}
                        telefones={filial.TelefoneFilials}
                        telaEditar={`/filial/editar/${filial.id}`}
                    />)
                    )}
                </div>
            </div>
        </div>
    );
}

export default ListarFiliais;