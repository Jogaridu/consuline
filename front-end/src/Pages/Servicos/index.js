import React, { useState, useEffect } from "react";
import { MdAdd, MdFormatListNumbered } from "react-icons/md";
import { FiMoreHorizontal } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { Link, useHistory, useParams } from "react-router-dom";
import Lottie from "react-lottie";

import loader from "../../Assets/loader.json";
import icone from "../../Assets/icone-servico.png";

import "./styles.css";

import Menu from "../../Components/MenuCentral";
import Titulo from "../../Components/TituloPrincipal";

import api from "../../Services/api";
import Swal from "sweetalert2";
import MsgErroGenerico from "../../Fixtures/MsgErroGenerico";

const CardServicos = (props) => {
    const [mostrarSubMenu, setMostrarSubMenu] = useState(false);
    const history = useHistory();

    const excluir = async () => {
        Swal.fire({
            title: `Deseja apagar o serviço "${props.nome}"?`,
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
                    const retorno = await api.delete(`/servico/${props.id}`);

                    if (retorno.status === 200) {
                        await Swal.fire('Serviço apagado com sucesso', '', 'success');

                        const arr = Array.from(document.querySelectorAll(".card-servico-listar"));

                        const escolhido = arr.filter(element => element.getAttribute("id") === props.id.toString());

                        escolhido[0].style.display = "none";
                    }

                } catch (error) {
                    console.log(error);
                    Swal.fire('Falha ao apagar o serviço', '', 'error');

                }

            } else {
                Swal.fire('Serviço não apagado', '', 'info');

            }
        })
    };

    const editar = () => {
        history.push("/servicos/editar", props.id);
    };

    const SubMenu = () => {
        // <ul className="menu-config-servicos">
        //         <li>
        //             <h2>Ver mais</h2>
        //         </li>
        //         <li>
        //             <h2 onClick={() => {
        //                 history.replace(`/servicos/${props.id}`);
        //                 props.setmostrarHospitais(!props.mostrarHospitais);
        //             }}>
        //                 Ver Hospitais
        //             </h2>
        //         </li>
        //         <li>
        //             <h2 onClick={() => editar()}>Editar</h2>
        //         </li>
        //         <li>
        //             <h2 style={{ color: "#e70011" }} onClick={() => excluir()}>
        //                 Excluir
        //             </h2>
        //         </li>
        //     </ul>
        return (
            <ul className="sub-menu">
                <li onClick={() => editar()}>Editar</li>
                <li onClick={() => {
                    history.replace(`/servicos/${props.id}`);
                    props.setmostrarHospitais(!props.mostrarHospitais);
                }}>Ver Hospitais</li>
                <li onClick={() => excluir()}>Excluir</li>
            </ul>
        );
    };

    return (
        <div className="card-servico-listar" id={props.id}>
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

            {mostrarSubMenu && <SubMenu />}

            <div className="card-servico-conteudo">
                <input type="checkbox" className="ver-mais" onClick={() => setMostrarSubMenu(false)} />

                <h1 className="card-titulo"> {props.nome} </h1>

                <figure className="card-imagem-servicos">
                    <img src={props.imagem} alt="Imagem do serviço" />
                </figure>

                <div className="btn-descricao">+</div>

                <div className="card-descricao">
                    <p>{props.descricao}</p>
                </div>
            </div>
        </div>
    );
};

// ********************************************************************************

const VerHospitais = (props) => {
    const { id } = useParams();
    const [hospitais, setHospitais] = useState([]);
    const [nomeServico, setNomeServico] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const buscarHospitais = async () => {
            try {
                const retornoHospitais = await api.get(`/servico/${id}/filiais`);

                try {
                    const retornoServico = await api.get(`/servico/${id}`);

                    setNomeServico(retornoServico.data.nome);
                    setHospitais(retornoHospitais.data);
                    setLoading(false);
                } catch (error) {
                    console.log(error);
                }
            } catch (error) {
                console.log(error);
            }
        };

        buscarHospitais();
    }, [id]);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loader,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    return (
        <div id="ver-hospitais-servicos">
            <IoMdClose
                id="fechar-ver-hospitais"
                color="#b9000c"
                size={62}
                onClick={() => {
                    props.setmostrarHospitais(!props.mostrarHospitais);
                }}
            />
            {loading ? (
                <div id="loader">
                    <Lottie options={defaultOptions} height={200} width={200} />
                </div>
            ) : (
                    <>
                        <h1> {nomeServico} </h1>

                        <ul>
                            {hospitais.map((hosp) => (
                                <li> {hosp.nomeFantasia} </li>
                            ))}
                        </ul>
                    </>
                )}
        </div>
    );
};

// ********************************************************************************

function Servicos() {
    const [servicos, setServicos] = useState(null);
    const [loading, setLoading] = useState(true);
    const [mostrarHospitais, setmostrarHospitais] = useState(false);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loader,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    const listarservicos = async () => {
        try {
            const retorno = await api.get("/servicos");

            setServicos(retorno.data);
            setLoading(false);
        } catch (error) {

            console.log(error);
            MsgErroGenerico();
        }
    };

    useEffect(() => {
        listarservicos();
    }, []);

    return (
        <div className="container-central">
            <Menu />
            {mostrarHospitais && (
                <VerHospitais
                    setmostrarHospitais={setmostrarHospitais}
                    mostrarHospitais={mostrarHospitais}
                    servicos={servicos}
                />
            )}
            <div className="container-conteudo-central">
                <Titulo nome="Serviços" imagem={icone} />
                <div id="container-conteudo-cms">
                    <Link to="/servico" id="btn-add-servicos">
                        <MdAdd size={50} color="#FFF" />
                        <h1>Adicionar serviço</h1>
                    </Link>

                    {loading ? (
                        <div id="loader">
                            <Lottie options={defaultOptions} height={200} width={200} />
                        </div>
                    ) : (
                            <div id="container-card-servicos">
                                {servicos.map((servico) => (
                                    <CardServicos
                                        id={servico.id}
                                        nome={servico.nome}
                                        descricao={servico.descricao}
                                        imagem={servico.imagem}
                                        setmostrarHospitais={setmostrarHospitais}
                                        mostrarHospitais={mostrarHospitais}
                                    />
                                ))}
                            </div>
                        )}
                </div>
            </div>
        </div>
    );
}

export default Servicos;
