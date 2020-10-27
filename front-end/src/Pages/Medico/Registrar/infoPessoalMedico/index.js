import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';
import '../../../../Styles/globalStyle.css'

import medico from "../../../../Assets/medico.png"

// import logoConsuline from "../../Assets/logoprojeto1.png"

function DadosMedico() {
  return (
        <div id="container-card1">
          <div className="container-left-side1">
            <div className="img-usuario">
              <img id="usuario" src={medico} alt="logo projeto" />
            </div>
            <div className="subtitulo-img">
              Cadastro Pessoal
            </div>
          </div>

          <div className="container-right-side1">
            <div className="entrada-de-dados1">
              <div className="inputs">
                <input placeholder="Nome Completo" required></input>
              </div>
              <div className="inputs">
                <input placeholder="Data de Nascimento" required></input>
              </div>
              <div className="entrada-dados22">
                <div className="">
                  <input placeholder="R.G" required></input>
                </div>
                <div className="entrada-dados3-pessoal3">
                  <input placeholder="CPF" required></input>
                </div>
              </div>
              <div className="inputs">
                <input placeholder="Email" required></input>
              </div>
              <div className="inputs">
                <input placeholder="Telefone" required></input>
              </div>
            </div>

            <div className="div-btn">

              <div className="qnt-pag">
                {/* <div className="pg1-1"> 
                              
                              </div>
                              <div className="pg2-1"> 
                              
                              </div>
                              <div className="pg3-1"> 
                              
                              </div> */}
              </div>

              <Link to="/profissional-saude/endereco">
                <div className="next-right">
                  ⇨
                </div>
              </Link>
            </div>
          </div>
        </div>
  );
}

export default DadosMedico;










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

















