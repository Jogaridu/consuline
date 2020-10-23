import React from 'react';
import { Link } from 'react-router-dom';


import './styles2.css';

import mapa from "../../../../Assets/mapa.png"

// import logoConsuline from "../../Assets/logoprojeto1.png"

function MenuCentral3() {
    return (

        <div className="container-medicos">    
        <div className="cadastro-pessoal">  

            <div id="container-card">
                <div className="container-left-side">
                        <div className="img-usuario">
                             <img className="mapa" src={mapa} alt="logo projeto" />
                        </div>
    
                        <div className="subtitulo-img">
                          Cadastro Localização
                        </div>                              
                </div>
    
                <div className="container-right-side">
                    <div className="entrada-de-dados-localizacao">
                    <div className="entrada-dados2">
                        <div className="inputs-line-1">
                          <input placeholder="CEP"></input>
                        </div>
                        <div className="">
                          <input placeholder="Endereço"></input>
                        </div>
                      </div>
                      <div className="entrada-dados2">
                        <div className="entrada-dados1">
                          <input placeholder="Rua"></input>
                        </div>
                        <div className="entrada-dados3">
                          <input placeholder="N"></input>
                        </div>
                      </div>
                      <div className="entrada-dados2">
                        <div className="inputs-line-1">
                          <input placeholder="Bairro"></input>
                        </div>
                        <div className="">
                          <input placeholder="Complemento"></input>
                        </div>
                      </div>
                    </div>
    
    
                     <div className="div-btn">
                        <Link to="/cadastro-pessoal">
                              <div className="next-right">
                                ⇦
                              </div>
                        </Link>
                        <div className="qnt-pag">
                            {/* <div className="pg1-1"> 
                            
                            </div>
                            <div className="pg2-1"> 
                            
                            </div>
                            <div className="pg3-1"> 
                            
                            </div> */}
                        </div>
                        <Link to="/cadastro-login">
                              <div className="next-right">
                                ⇨
                              </div>
                        </Link>
                    </div>
                    </div>
                   
                
            </div>
        </div>            
    
    </div>
        
    );
}

export default MenuCentral3;










// import React from 'react';
// import './styles.css';

// function infoPessoal () {
//     return (
//         <body>
//             <div className="container-medicos">    

//                 <div className="cadastro">
//                     <div className="container-titulo">
//                             <div className="titulo">
//                             ADICIONAR PROFISSIONAL DA SAÚDE
//                             </div>
//                             <div className="icone-titulo">
//                                 {/* <img id="iconeAdc" src={adc} alt="icone" /> */}
//                             </div>
//                     </div>
//                     <div className="container-form">
//                         <div className="img-left">
//                             <div className="perfil-form">
//                                 <div className="img-usuario">
//                                     {/* <img id="usuario" src={usuario} alt="logo projeto" /> */}
//                                 </div>

//                                 <div className="subtitulo-imgCadastro">
//                                     Informações Pessoais
//                                 </div>                              
//                             </div>
//                         </div>


//                         <div className="form-right">
//                             <div className="formulario">
//                                 <form>
//                                     <div className="CadastroEntradaDados"> 
//                                         <input type="text" name="" placeholder="Nome Completo" required=""></input>
//                                     </div>
//                                     <div className="CadastroEntradaDados"> 
//                                         <input type="text" name="" placeholder="Data de Nascimento" required=""></input>
//                                     </div>   
//                                     <div className="CadastroEntradaDados3"> 
//                                         <input type="text" name="" placeholder="R.G" required=""></input>
//                                     </div>  
//                                     <div className="CadastroEntradaDados4"> 
//                                         <input type="text" name="" placeholder="CPF" required=""></input>
//                                     </div> 
//                                     <div className="CadastroEntradaDados"> 
//                                         <input type="text" name="" placeholder="Email" required=""></input>
//                                     </div>
//                                     <div className="CadastroEntradaDados"> 
//                                         <input type="text" name="" placeholder="Telefone" required=""></input>
//                                     </div>
//                                     <div className="CadastroEntradaDados"> 
//                                         <input type="text" name="" placeholder="Vinculado a qual filial?" required=""></input>
//                                     </div> 
//                              </form>
                             
//                             </div>
//                             <div className="div-btn">
//                                 <div className="next-left">
                                
//                                 </div>
//                                 <div className="qnt-pag">
//                                     <div className="pg1-1"> 
                                    
//                                     </div>
//                                     <div className="pg2-1"> 
                                    
//                                     </div>
//                                     <div className="pg3-1"> 
                                    
//                                     </div>
//                                 </div>
//                                 <div className="next-right">
                                    
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>            

//             </div>
//         </body>
//     );
// }

// export default infoPessoal;


















