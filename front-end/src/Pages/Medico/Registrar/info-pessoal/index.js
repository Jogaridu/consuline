import React from 'react';
import './styles.css';

function infoMedico () {
    return (
        <body>
            <div className="container-medicos">    

                <div className="cadastro">
                    <div className="container-titulo">
                            <div className="titulo">
                            ADICIONAR PROFISSIONAL DA SAÚDE
                            </div>
                            <div className="icone-titulo">
                                {/* <img id="iconeAdc" src={adc} alt="icone" /> */}
                            </div>
                    </div>
                    <div className="container-form">
                        <div className="img-left">
                            <div className="perfil-form">
                                <div className="img-usuario">
                                    {/* <img id="usuario" src={usuario} alt="logo projeto" /> */}
                                </div>

                                <div className="subtitulo-imgCadastro">
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
                                <div className="next-left">
                                
                                </div>
                                <div className="qnt-pag">
                                    <div className="pg1-1"> 
                                    
                                    </div>
                                    <div className="pg2-1"> 
                                    
                                    </div>
                                    <div className="pg3-1"> 
                                    
                                    </div>
                                </div>
                                <div className="next-right">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>            

            </div>
        </body>
    );
}

export default infoMedico;


















