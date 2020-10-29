import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';
import '../../../../Styles/globalStyle.css'


 import validarInputVazia from '../../../../Fixtures/Inputs/ValidarInputVazia';
import InputCorreta from '../../../../Fixtures/Inputs/InputCorreta';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useHistory } from 'react-router-dom';
import { validarDadosMedico } from '../ValidacaoInputSchema';

import MaskedInput from "react-text-mask";
 import mascaras from "./mask";
import ValidarData from '../../../../Fixtures/ValidarData';




import medico from "../../../../Assets/medico.png"

// import logoConsuline from "../../Assets/logoprojeto1.png"

function DadosMedico() {

  const history = useHistory();


  const validar = (values) => {
    const arrInputs = Array.from(document.querySelectorAll("form input"));

    const arrayInputsVazias = validarInputVazia(arrInputs);

    if (!arrayInputsVazias) {
      const dataNascimentoEn = ValidarData(values.dataNascimento);

      if (dataNascimentoEn) {
        history.push("/profissional-saude/endereco", { ...values, dataNascimento: dataNascimentoEn });

      }
    }
  }


  return (
    <Formik
    onSubmit={validar}
    initialValues={{
      cpf: "",
      nome: "",
      crm: "",
      dataNascimento: "",
      email: "",
      telefone: "",
    }}
    validationSchema={validarDadosMedico}>


      {/* <Form> */}
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
              <Field
                name="nome"
                render={({ field }) => (
                <MaskedInput
                  {...field}
                  type="text"
                  mask={mascaras.nome}
                  placeholder="Nome Completo"
                  onBlur={InputCorreta}
                  guide={false}
                />
              )} />
              </div>
              <div className="inputs">
              <Field
                name="dataNascimento"
                render={({ field }) => (
                <MaskedInput
                  {...field}
                  type="text"
                  mask={mascaras.data}
                  placeholder="Data de Nascimento"
                  onBlur={InputCorreta}
                  guide={false}
                />
              )} />
              </div>
              <div className="entrada-dados22">
                <div className="">
                  <input placeholder="R.G"
                  name="crm"
                  type="text"
                  // mask={mascaras.cnpj}
                  onBlur={InputCorreta}
                  guide={false}
                  required></input>
                </div>
                <div className="entrada-dados3-pessoal3">
                <Field
                name="cpf"
                render={({ field }) => (
                <MaskedInput
                  {...field}
                  type="text"
                  mask={mascaras.cpf}
                  placeholder="CPF"
                  onBlur={InputCorreta}
                  guide={false}
                />
              )} />
                </div>
              </div>
              <div className="inputs">
                <input placeholder="Email"
                name="email"
                type="text"
                // mask={mascaras.cnpj}
                onBlur={InputCorreta}
                guide={false}
                required></input>
              </div>
              <div className="inputs">
              <Field
                name="telefone"
                render={({ field }) => (
                <MaskedInput
                  {...field}
                  type="text"
                  mask={mascaras.telefone}
                  placeholder="Telefone"
                  onBlur={InputCorreta}
                  guide={false}
                />
              )} />
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
        {/* </Form> */}
      </Formik>
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


















