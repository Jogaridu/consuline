import React from "react";
// import { Link } from "react-router-dom";

import "./styles.css";

import "../../Styles/globalStyle.css";

import logoprojeto2 from "../../Assets/logoprojeto2.png";

import adc from "../../Assets/adc.png";

import usuario from "../../Assets/usuario.png";

import mapa from "../../Assets/mapa.png";

import trancado from "../../Assets/trancado.png";


// import mapa from "../../Assets/mapa.png";

// import trancado from "../../Assets/trancado.png";

const Medico = () => {
  return (
    <>
        <body>
            <div className="container-medicos">
                <div className="menu">
                    <div className="iconeMenu">
                        <img id="logoprojeto" src={logoprojeto2} alt="logo projeto" />
                    </div>
                    <div className="topicosMenu">
                        <div className="pesquisar">
                            <input type="text" name="" placeholder="" required=""></input>
                        </div>
                        <div className="hvr-sweep-to-right">
                            Central
                        </div>
                        <div className="hvr-sweep-to-right">
                            Medicos
                        </div>
                        <div className="hvr-sweep-to-right">
                            Filiais
                        </div>
                        <div className="hvr-sweep-to-right">
                            Serviços
                        </div>
                    </div>
                    <div className="desenvolvedor">
                        Desenvolvido por <br/> DS3-M | CONSULINE
                    </div>
                </div>
                <div className="cadastro">
                    <div className="container-titulo">
                            <div className="titulo">
                            ADICIONAR PROFISSIONAL DA SAÚDE
                            </div>
                            <div className="icone-titulo">
                                <img id="iconeAdc" src={adc} alt="icone" />
                            </div>
                    </div>


                    <div className="container-form">
                        <div className="img-left">
                            <div className="perfil-form">
                                <div className="img-usuario">
                                    <img id="usuario" src={usuario} alt="logo projeto" />
                                </div>

                                <div className="subtitulo-imgUsuario">
                                    Informações Pessoais
                                </div>                              
                            </div>
                        </div>


                        <div className="form-right">
                            <div className="formulario">
                                <form>
                                    <div className="CadastroEntradaDados"> 
                                        <input type="text" name="" placeholder="Nome Completo" required=""></input>
                                    </div>
                                    <div className="CadastroEntradaDados"> 
                                        <input type="text" name="" placeholder="Data de Nascimento" required=""></input>
                                    </div>   
                                    <div className="CadastroEntradaDados3"> 
                                        <input type="text" name="" placeholder="R.G" required=""></input>
                                    </div>  
                                    <div className="CadastroEntradaDados4"> 
                                        <input type="text" name="" placeholder="CPF" required=""></input>
                                    </div> 
                                    <div className="CadastroEntradaDados"> 
                                        <input type="text" name="" placeholder="Email" required=""></input>
                                    </div>
                                    <div className="CadastroEntradaDados"> 
                                        <input type="text" name="" placeholder="Telefone" required=""></input>
                                    </div>
                                    <div className="CadastroEntradaDados"> 
                                        <input type="text" name="" placeholder="Vinculado a qual filial?" required=""></input>
                                    </div> 
                             </form>
                             
                            </div>
                            <div className="div-btn">

                            </div>
                        </div>
                    </div>
                </div>

                {/* ********************** SPA CADASTRO TELA 2 ********************** */}


                <div className="cadastro">

                    <div className="container-titulo">

                            <div className="titulo">
                                ADICIONAR PROFISSIONAL DA SAÚDE
                            </div>

                            <div className="icone-titulo">
                                <img id="iconeAdc" src={adc} alt="icone" />
                            </div>

                    </div>


                    <div className="container-form">
                        <div className="img-left">
                            <div className="perfil-form">
                                <div className="img-usuario">
                                     <img className="mapa" src={mapa} alt="logo projeto" /> 
                                </div>

                                <div className="subtitulo-imgUsuario">
                                    Digite a Localização
                                </div>                              
                            </div>
                        </div>

                        <div className="form-right">


                            <div className="formulario">
                                <form className="form-div">
                                    <div className="div-campos">
                                        <div className="campo1">
                                            <input type="text" name="" placeholder="CEP" required=""></input>
                                        </div>
                                        <div className="campo2">
                                            <input type="text" name="" placeholder="Endereço" required=""></input>
                                        </div>
                                    </div>
                                    <div className="div-campos2">
                                        <div className="campo3">
                                            <input type="text" name="" placeholder="Rua" required=""></input>
                                        </div>
                                        <div className="campo4">
                                            <input type="text" name="" placeholder="Nº" required=""></input>
                                        </div>
                                    </div>
                                    <div className="div-campos3">
                                        <div className="campo1">
                                            <input type="text" name="" placeholder="Bairro" required=""></input>
                                        </div>
                                        <div className="campo2">
                                            <input type="text" name="" placeholder="Complemento" required=""></input>
                                        </div>
                                    </div>
                                    
                            
                                </form>
                            </div>

                            <div className="div-btn">

                            </div>
                        </div>
                    </div>
                </div>
            
                {/* ********************** SPA CADASTRO TELA 3 ********************** */}


                <div className="cadastro">
                    <div className="container-titulo">
                            <div className="titulo">
                            ADICIONAR PROFISSIONAL DA SAÚDE
                            </div>
                            <div className="icone-titulo">
                                <img id="iconeAdc" src={adc} alt="icone" />
                            </div>
                    </div>


                    <div className="container-form">
                        <div className="img-left">
                            <div className="perfil-form">
                                <div className="img-usuario">
                                     <img className="cadeado" src={trancado} alt="logo projeto" /> 
                                </div>

                                <div className="subtitulo-imgUsuario">
                                    Crie um login e uma senha
                                </div>                              
                            </div>
                        </div>


                        <div className="form-right">
                        
                            <div className="formulario">
                                <form>
                                    <div className="CadastroEntradaDados"> 
                                        <input type="text" name="" placeholder="Login" required=""></input>
                                    </div>
                                    <div className="CadastroEntradaDados"> 
                                        <input type="text" name="" placeholder="Senha" required=""></input>
                                    </div>   
                                    <div className="CadastroEntradaDados"> 
                                        <input type="text" name="" placeholder="Confirmar Senha" required=""></input>
                                    </div>
                                    
                             </form>
                             
                            </div>
                            <div className="div-btn">

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </body>
    </>
  );
};

export default Medico;
