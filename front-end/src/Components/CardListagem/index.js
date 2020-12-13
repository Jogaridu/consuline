import React from "react";

import "./styles.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../../Services/api";
import Swal from "sweetalert2";

function CardListagem(props) {
    const { id, nome, cidade, estado, telefones, telaEditar, telaConsulta } = props;

    const telefone = telefones[0].numero;

    const ddd = telefone.slice(0, 2);
    const telefoneParte1 = telefone.slice(2, 7);
    const telefoneParte2 = telefone.slice(7, 11);

    const [mostrarSubMenu, setMostrarSubMenu] = useState(false);

    const history = useHistory();

    const SubMenu = ({ id, nome }) => {
        return (
            <ul className="sub-menu">
                <li onClick={() => history.push(telaEditar)}>Editar</li>
                <li onClick={() => history.push(telaConsulta)}>Consulta completa</li>
                <li onClick={async () => {

                    Swal.fire({
                        title: `Tem certeza que deseja apagar a filial "${nome}"?`,
                        text: "Não há como reverter isso",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#403E66',
                        cancelButtonColor: '#ccc',
                        cancelButtonText: "Cancelar",
                        confirmButtonText: 'Sim, quero apagar'

                    }).then(async (result) => {

                        if (result.isConfirmed) {
                            try {
                                const retorno = await api.delete(`/filial/${id}`);

                                if (retorno.status === 200) {
                                    await Swal.fire('Filial apagada com sucesso', '', 'success');
                                    const arr = Array.from(document.querySelectorAll(".card-listagem"));

                                    const escolhido = arr.filter(element => element.getAttribute("id") === id.toString());

                                    escolhido[0].style.display = "none";
                                }

                            } catch (error) {
                                Swal.fire('Falha ao apagar a filial', '', 'error');

                            }

                        } else {
                            Swal.fire('Filial não apagada', '', 'info');
                        }
                    })

                }}>Excluir</li>
            </ul>
        );
    };

    return (
        <div className="card-listagem" id={id}>
            {/* <figure className="imagem-card-listagem">
        <img src={teste} alt="" />
      </figure> */}
            <div className="titulo-card-listagem">{nome || "Sem nome"}</div>
            <div className="local-card-listagem">{`${cidade || "Cidade"}/${estado || "Estado"
                }`}</div>
            <div className="telefone-card-listagem">
                {`(${ddd}) ${telefoneParte1}-${telefoneParte2}` || "Telefone principal"}
            </div>
            <div
                className="mais-opcoes"
                onClick={() => {
                    setMostrarSubMenu(!mostrarSubMenu);
                    setTimeout(() => {
                        setMostrarSubMenu(false);
                    }, 10000);
                }}>
                ...
            </div>
            {mostrarSubMenu && <SubMenu id={id} nome={nome} />}
        </div>
    );
}

export default CardListagem;
