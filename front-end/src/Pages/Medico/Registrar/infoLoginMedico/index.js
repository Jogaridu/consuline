import React, {useLocation} from 'react';
import { Link } from 'react-router-dom';


import Swal from 'sweetalert2';
import InputCorreta from '../../../../Fixtures/Inputs/InputCorreta';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useHistory } from 'react-router-dom';

import MaskedInput from "react-text-mask";
//  import mascaras from "./mask";


import './styles.css';

import cadeado from "../../../../Assets/cadeado.png"
import api from '../../../../Services/api';
// import logoConsuline from "../../Assets/logoprojeto1.png"

function DadosMedicoLogin() {

  const history = useHistory();

  
  const cadastrarProfissional = async () => {

    try {
        const retorno = await api.post("/profissional"); 

        if (retorno.status === 201) {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Profissional cadastrada com sucesso',
                showConfirmButton: false,
                timer: 1500
            }).then(() => history.push("/profissional"));
        }

    } catch (error) {
        console.error(error);

    }

}

  const validar = () => {
    
  }

  return (

    <Formik
    onSubmit={validar}
    initialValues={{
      login: "",
      senha: "",
    }}
    // validationSchema={}
    >

        <div id="container-card1">
          <div className="container-left-side1">
            <div className="img-usuario">
              <img className="cadeado" src={cadeado} alt="logo projeto" />
            </div>

            <div className="subtitulo-img">
              Cadastro Login
             </div>
          </div>


          <div className="container-right-side1">
            <div className="entrada-de-dados-login">
              <div className="inputs">
              <Field
                name="login"
                render={({ field }) => (
                <MaskedInput
                  {...field}
                  type="text"
                  // mask={mascaras.nome}
                  placeholder="Login"
                  onBlur={InputCorreta}
                  guide={false}
                />
              )} />
              </div>
              <div className="inputs">
              <Field
                name="senha"
                render={({ field }) => (
                <MaskedInput
                  {...field}
                  type="text"
                  // mask={mascaras.nome}
                  placeholder="Senha"
                  onBlur={InputCorreta}
                  guide={false}
                />
              )} />
              </div>
              <div className="inputs">
              <Field
                name="Confirmar Senha"
                render={({ field }) => (
                <MaskedInput
                  {...field}
                  type="text"
                  // mask={mascaras.nome}
                  placeholder="Confirmar Senha"
                  onBlur={InputCorreta}
                  guide={false}
                />
              )} />
              </div>
            </div>


            <div className="div-btn">
              <Link to="/profissional-saude/endereco">
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
              <div className="next-right-medico">
                Concluido
              </div>
            </div>
          </div>


        </div>
    </Formik>
  );
}

export default DadosMedicoLogin;










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


















